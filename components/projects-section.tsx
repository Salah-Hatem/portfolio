import React from "react"
import { VelocityScroll } from "./ui/scroll-based-velocity"
import ProjectCard from "./project-card"
import BlurFade from "./ui/blur-fade"

const projects = [
  {
    title: "ExamWalk",
    tags: ["Figma", "WordPress", "UI/UX", "SEO"],
    image: "/images/01-examwalk.png",
    link: "https://examwalk.com/",
  },
  {
    title: "SwapSocials",
    tags: ["Figma", "WordPress", "UI/UX", "SEO"],
    image: "/images/02-SwapSocials.png",
    link: "https://swapsocials.com/",
  },
  {
    title: "FPS Coach",
    tags: ["React", "Node.js", "Demo"],
    image: "/images/03-FPS Coach.png",
    link: "https://modest-booth-fe326d.netlify.app/",
  },
  {
    title: "Admin Dashboard",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Demo"],
    image: "/images/04-Admin Dashboard.png",
    link: "https://admin-dashboard-mern-7ctn.onrender.com/dashboard",
  },
  {
    title: "3D Shirt Customizer",
    tags: ["React", "TypeScript", "TailwindCSS"],
    image: "/images/05-3D Shirt.png",
    link: "https://threed-shirt-customizer-9xyw.onrender.com/",
  },
  {
    title: "Portfolio",
    tags: [
      "Figma",
      "Next.js",
      "Three.js",
      "TailwindCSS",
      "Shadcn",
      "framer-motion",
    ],
    image: "/images/06-Portfolio.png",
    link: "/",
  },
]

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="h-auto  flex flex-col items-center gap-20 pt-28"
    >
      <VelocityScroll
        text={
          <>
            A Selection of Recent{" "}
            <span className="text-[#CBACF9]">Projects. </span>
            {"  "}
          </>
        }
        default_velocity={2}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      <div className="md:w-[1200px] flex items-center justify-between flex-wrap gap-y-10">
        {projects.map((project, index) => {
          return (
            <BlurFade key={project.link} delay={0.25 + index * 0.05} inView>
              <ProjectCard key={index} project={project} />
            </BlurFade>
          )
        })}
        {/* <ProjectCard /> */}
      </div>
    </section>
  )
}

export default ProjectsSection
