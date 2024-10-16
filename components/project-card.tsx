import { LuExternalLink } from "react-icons/lu"
import TagList from "./tag-list"
import Image from "next/image"

type Project = { title: string; tags: string[]; image: string; link: string }

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-[387px] flex flex-col gap-4 h-auto  ">
      <div className="flex flex-col gap-6 overflow-hidden h-auto">
        <a href={project.link} target="_blank">
          <Image
            src={project.image}
            alt={project.title}
            width={387}
            height={387}
            className="rounded-[8px]    transition-opacity duration-300 hover:opacity-80  "
          />
        </a>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-black">{project.title}</h3>
          <a
            className="hover:bg-slate-200 w-8 h-8 flex justify-center items-center rounded-sm duration-300"
            href={project.link}
            target="_blank"
          >
            <LuExternalLink size={24} color="#CBACF9" />
          </a>
        </div>
      </div>
      <TagList tags={project.tags} />
    </div>
  )
}

export default ProjectCard
