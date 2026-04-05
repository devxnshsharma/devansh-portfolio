import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsBar from "@/components/SkillsBar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import CTAFooter from "@/components/CTAFooter";
import FadeIn from "@/components/FadeIn";

const Index = () => {
  return (
    <div className="bg-background overflow-visible">
      <Navbar />
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn delay={0.1}>
        <About />
      </FadeIn>
      <FadeIn>
        <SkillsBar />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Stats />
      </FadeIn>
      <FadeIn>
        <CTAFooter />
      </FadeIn>
    </div>
  );
};

export default Index;
