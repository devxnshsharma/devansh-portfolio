import { Github, Linkedin } from "lucide-react";
import HlsVideo from "./HlsVideo";

const CTAFooter = () => {
  return (
    <section
      id="contact"
      className="relative bg-background py-32 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* HLS Background */}
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
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
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="font-heading italic text-foreground text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] mb-6">
          Let's build something great.
        </h2>
        <p className="font-body font-light text-foreground/60 text-sm md:text-base mb-10 max-w-lg">
          Open to Software Engineering & Internship opportunities. Let's
          connect and create something exceptional.
        </p>
        <div className="flex items-center gap-4 mb-6">
          <a
            href="mailto:devanshsharma0363@gmail.com"
            className="liquid-glass-strong rounded-full font-body font-medium text-sm text-foreground px-6 py-3 hover:bg-white/10 transition-colors"
          >
            devanshsharma0363@gmail.com
          </a>
          <span className="font-body text-foreground/40 text-sm">
            +91-9718895990
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/devxnshsharma"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/devxnshsharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-foreground/10 w-full flex flex-col md:flex-row items-center justify-between text-foreground/40 text-xs font-body">
          <span>© 2026 Devansh Sharma</span>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground/60 transition-colors">
              Terms
            </a>
            <a
              href="mailto:devanshsharma0363@gmail.com"
              className="hover:text-foreground/60 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
