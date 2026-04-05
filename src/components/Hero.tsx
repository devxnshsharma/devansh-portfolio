import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background"
      style={{ height: "1000px" }}
    >
      {/* Background video */}
      <video
        className="absolute top-[20%] w-full h-auto object-contain z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/5 z-0" />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{
          height: "300px",
          background: "linear-gradient(to bottom, transparent, hsl(0 0% 0%))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[150px] px-6">
        {/* Badge */}
        <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2.5 mb-6">
          <span className="bg-primary text-primary-foreground rounded-full px-2.5 py-0.5 text-xs font-body font-semibold">
            New
          </span>
          <span className="font-body text-sm text-foreground/80 pr-3">
            Available for 2026 roles.
          </span>
        </div>

        {/* Main Heading */}
        <BlurText
          text="Engineered to Scale. Built to Perform."
          className="font-heading italic text-foreground text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.8] tracking-[-4px] max-w-4xl"
          delay={100}
        />

        {/* Subtext */}
        <motion.p
          className="font-body font-light text-foreground/60 text-base md:text-lg max-w-2xl mt-6"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Software Engineer specializing in robust backend systems, advanced
          algorithms, and seamless full-stack execution. From predictive
          analytics to enterprise modules—fast, secure, and built to last.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="liquid-glass-strong rounded-full font-body font-medium text-sm text-foreground px-6 py-3 inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            View Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="font-body font-medium text-sm text-foreground/70 inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
