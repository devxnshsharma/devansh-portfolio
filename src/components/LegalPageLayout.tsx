import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
  return (
    <div className="bg-background min-h-screen">
      {/* Center-only navbar — no branding or resume */}
      <Navbar minimal />

      {/* Hero Header */}
      <div className="relative overflow-hidden pt-24 pb-10 px-6 md:px-16 lg:px-24">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.25, 0, 1] }}
        >
          <h1 className="font-heading italic text-foreground text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] mb-4">
            {title}
          </h1>
          <p className="font-body font-light text-foreground/40 text-sm">
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="h-px bg-gradient-to-r from-foreground/10 via-foreground/6 to-transparent" />
      </div>

      {/* Content — full width, single column */}
      <motion.div
        className="px-6 md:px-16 lg:px-24 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
      >
        <div className="legal-content">{children}</div>
      </motion.div>

      {/* Footer */}
      <div className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="h-px bg-gradient-to-r from-foreground/10 via-foreground/6 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between text-foreground/40 text-xs font-body">
          <span>© 2026 Devansh Sharma</span>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-foreground/60 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground/60 transition-colors">
              Terms
            </Link>
            <a
              href="https://devansh-studio.vercel.app/#contact"
              className="hover:text-foreground/60 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
