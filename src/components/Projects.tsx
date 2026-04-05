import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "UNMESSIFY",
    tagline: "Smart Mess Credit Planner",
    tech: "JavaScript, Chart.js, HTML5, CSS3",
    description:
      "A decision support system optimizing 6,000+ monthly mess credits with custom predictive burn-rate analysis and a dynamic Daily Safe Limit algorithm that adapts to user risk tolerance.",
    link: "https://github.com/devxnshsharma/unmessify",
  },
  {
    title: "MedRep",
    tagline: "Student Health Analytics",
    tech: "Python, MySQL, PyMySQL",
    description:
      "Secure student health portal built on a strictly normalized relational schema with enforced Role-Based Access Control (RBAC), preventing SQL injection, plus automated diagnostic alerts for BMI and vaccinations.",
    link: "https://github.com/devxnshsharma/student-health-projekt",
  },
  {
    title: "SkyCast",
    tagline: "Real-Time Weather Dashboard",
    tech: "React, JavaScript, REST APIs",
    description:
      "Responsive weather dashboard demonstrating optimized asynchronous state handling and dynamic UI updates with LocalStorage-based caching for performance.",
    link: "https://github.com/devxnshsharma/weather-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-background py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-4">
          Projects
        </div>
        <h2 className="font-heading italic text-foreground text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9]">
          Built to perform.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="liquid-glass rounded-2xl p-8 flex flex-col"
          >
            <span className="font-body text-xs font-medium text-foreground/40 uppercase tracking-widest mb-2">
              {project.tech}
            </span>
            <h3 className="font-heading italic text-foreground text-2xl mb-1">
              {project.title}
            </h3>
            <p className="font-body font-medium text-foreground/80 text-sm mb-4">
              {project.tagline}
            </p>
            <p className="font-body font-light text-foreground/60 text-sm flex-1 mb-6">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-strong rounded-full font-body font-medium text-sm text-foreground px-5 py-2.5 inline-flex items-center gap-2 self-start hover:bg-white/10 transition-colors"
            >
              View on GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
