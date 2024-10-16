import IconCloud from "./magicui/icon-cloud"

const slugs = [
  "threedotjs",
  "wordpress",
  "typescript",
  "javascript",
  "php",
  "python",
  "shopify",
  "react",
  "redux",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "adobephotoshop",
  "adobeillustrator",
  "figma",
  "tailwindcss",
  "mongodb",
  "mysql",
  "woocommerce",
  "vite",
]
const SkillsCard = () => {
  return (
    <div className=" gap-4 md:col-start-7 md:col-span-6 lg:col-span-7  md:row-span-2 border border-[#DBDBDB] rounded-xl hover:shadow-xl transition duration-200 shadow-input p-5 flex flex-col justify-between  ">
      <div className="relative flex size-full items-center justify-center overflow-hidden  lg:px-20 lg:pb-20 lg:pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <h2 className="text-lg tracking-tight font-bold ">
        Skills & <span className="text-[#CBACF9]">Tools</span>{" "}
      </h2>
    </div>
  )
}

export default SkillsCard
