import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen sm:max-w-7xl px-10 mx-auto">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
