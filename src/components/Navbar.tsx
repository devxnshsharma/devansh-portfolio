import { ArrowUpRight } from "lucide-react";
import MagneticElement from "./MagneticElement";

const navLinks = ["Home", "About", "Experience", "Projects"];

interface NavbarProps {
  minimal?: boolean;
}

const Navbar = ({ minimal = false }: NavbarProps) => {
  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 flex items-center ${minimal ? 'justify-center' : 'justify-between'} px-6 md:px-12 lg:px-16`}>
      {!minimal && (
        <MagneticElement>
          <a href="/#home" className="font-heading italic text-foreground text-xl tracking-tight hover:opacity-80 transition-opacity">
            Devansh Sharma
          </a>
        </MagneticElement>
      )}

      <div className="liquid-glass rounded-full px-2 py-1.5 hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <MagneticElement key={link}>
            <a
              href={`/#${link.toLowerCase()}`}
              className="font-body text-sm font-medium text-foreground/90 px-4 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              {link}
            </a>
          </MagneticElement>
        ))}
        <MagneticElement>
          <a
            href="/#contact"
            className="font-body text-sm font-semibold bg-primary text-primary-foreground rounded-full px-4 py-1.5 inline-flex items-center gap-1.5 hover:bg-primary/90 transition-colors"
          >
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </MagneticElement>
      </div>

      {!minimal && (
        <MagneticElement>
          <a
            href="/Devansh_s_Resume-9.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold bg-primary text-primary-foreground rounded-full px-5 py-2 hover:bg-primary/90 transition-colors"
          >
            Resume
          </a>
        </MagneticElement>
      )}
    </nav>
  );
};

export default Navbar;
