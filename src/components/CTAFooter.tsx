import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import HlsVideo from "./HlsVideo";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const XTwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
  </svg>
);

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://www.instagram.com/devxnshsharma/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://github.com/devxnshsharma",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/devxnshsharma/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://x.com/selepheim",
    label: "Twitter / X",
    icon: XTwitterIcon,
  },
  {
    href: "https://discord.com/users/624578210792865794",
    label: "Discord",
    icon: DiscordIcon,
  },
  {
    href: "https://open.spotify.com/user/uz3rfku79l80ouuudo5jo49rq?si=aY31p3eVSy2GUZpUFhvA9A",
    label: "Spotify",
    icon: SpotifyIcon,
  },
];

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
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-foreground/10 w-full flex flex-col md:flex-row items-center justify-between text-foreground/40 text-xs font-body">
          <span>© 2026 Devansh Sharma</span>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-foreground/60 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground/60 transition-colors">
              Terms
            </Link>
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
