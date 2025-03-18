import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { GallerySection } from "@/components/gallery-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ProjectsSection />
      <SkillsSection />
      <FooterSection />
    </main>
  );
}