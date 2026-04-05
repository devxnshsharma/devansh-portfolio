import { ArrowUpRight } from "lucide-react";
import HlsVideo from "./HlsVideo";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-background min-h-screen py-32 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* HLS Background */}
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1]"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, hsl(0 0% 0%), transparent)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{
          height: "200px",
          background: "linear-gradient(to top, hsl(0 0% 0%), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-4">
          Experience
        </div>
        <h2 className="font-heading italic text-foreground text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] mb-6">
          Hex Softwares Pvt. Ltd.
        </h2>
        <p className="font-body font-light text-foreground/60 text-sm md:text-base max-w-2xl mb-4">
          <span className="text-foreground/80 font-medium">
            Java Programming Intern
          </span>{" "}
          · Jan 2026 – Feb 2026
        </p>
        <p className="font-body font-light text-foreground/60 text-sm max-w-xl mb-8">
          Developed scalable enterprise modules, implemented secure CRUD
          operations, and engineered modular backend architectures serving
          production-grade workloads.
        </p>
        <a
          href="#projects"
          className="liquid-glass-strong rounded-full font-body font-medium text-sm text-foreground px-6 py-3 inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          See Projects
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
