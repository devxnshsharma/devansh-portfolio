import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-background py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-6">
            About Me
          </div>

          <h2 className="font-heading italic text-foreground text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] mb-8">
            Who I am.
          </h2>

          <div className="space-y-5">
            <p className="font-body font-light text-foreground/60 text-base md:text-lg leading-relaxed">
              I'm Devansh Sharma, a second-year B.Tech Computer Science (Core)
              student at VIT University, Vellore, originally from Delhi. I focus
              on building scalable backend systems and efficient, real-world
              software solutions.
            </p>
            <p className="font-body font-light text-foreground/60 text-base md:text-lg leading-relaxed">
              With a strong foundation in Python, Java, C, and C++, I'm
              currently expanding into Spring Boot and Golang while aligning my
              work toward Artificial Intelligence and data-driven systems.
            </p>
            <p className="font-body font-light text-foreground/60 text-base md:text-lg leading-relaxed">
              I enjoy solving complex problems, designing structured systems, and
              turning ideas into practical, high-impact applications. I'm always
              looking to learn, collaborate, and contribute to meaningful
              projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
