import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hasMouse = window.matchMedia("(pointer:fine)").matches;

    if (hasMouse) {
      let rafId: number | null = null;
      let initialized = false;

      const render = () => {
        // Lerp for the delay effect
        currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.15;
        currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.15;

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px) ${
            isPointer ? "rotate(30deg) translateY(-5px)" : ""
          } ${isClicked ? "scale(0.9)" : "scale(1)"}`;
        }

        rafId = requestAnimationFrame(render);
      };

      rafId = requestAnimationFrame(render);

      const updatePosition = (e: MouseEvent) => {
        targetPos.current.x = e.clientX;
        targetPos.current.y = e.clientY;
        if (!initialized) {
          currentPos.current.x = e.clientX;
          currentPos.current.y = e.clientY;
          initialized = true;
        }
      };

      const checkIfPointer = (e: MouseEvent) => {
        const target = e.target as Element | null;
        if (!target) return;
        
        const isHovering = 
          target.classList.contains("pointer-cursor-element") ||
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.closest('a') !== null ||
          target.closest('button') !== null;
          
        setIsPointer(isHovering);
        setIsHidden(target.classList?.contains("cursor-none") || false);
      };

      const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200);
      };

      document.addEventListener("mousemove", updatePosition);
      document.addEventListener("mouseover", checkIfPointer);
      document.addEventListener("mouseout", checkIfPointer);
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("mousemove", updatePosition);
        document.removeEventListener("mouseover", checkIfPointer);
        document.removeEventListener("mouseout", checkIfPointer);
        document.removeEventListener("click", handleClick);
        if (rafId) cancelAnimationFrame(rafId);
      };
    }
  }, [isPointer, isClicked]);

  if (typeof window === "undefined" || !window.matchMedia("(pointer:fine)").matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={cursorRef}
        className={`fixed flex items-center justify-center ${isHidden ? "hidden" : ""}`}
        style={{
          left: '0',
          top: '0',
          willChange: 'transform',
        }}
      >
        <img
          src="/cursor.svg"
          width={32}
          height={32}
          alt="cursor"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default CustomCursor;
