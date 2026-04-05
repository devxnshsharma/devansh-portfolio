import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    label: "Languages",
    items: ["Python", "C", "C++", "Java", "Go", "JavaScript", "R", "LaTeX"],
  },
  {
    label: "Frontend",
    items: ["HTML5", "CSS3", "React.js"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    label: "Tools & Design",
    items: ["Cloudflare", "Figma", "Framer", "Canva", "Blender"],
  },
];

const SkillsBar = () => {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="bg-background py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-6">
            Technologies I use
          </div>
          <h2 className="font-heading italic text-foreground text-4xl md:text-5xl tracking-tight leading-[0.9]">
            My toolkit.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <span className="font-body text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-4 block">
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="liquid-glass rounded-full px-4 py-2 font-body text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={visible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.1 + i * 0.04,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsBar;
