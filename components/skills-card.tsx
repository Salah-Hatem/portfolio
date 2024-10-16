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
    <div className="md:col-start-6 md:col-span-7 md:row-span-2 border border-[#DBDBDB] rounded-xl hover:shadow-xl transition duration-200 shadow-input p-5 flex flex-col justify-between  ">
      <div className="relative flex size-full items-center justify-center overflow-hidden  px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
      <h2 className="text-lg tracking-tight font-bold ">
        Skills & <span className="text-[#CBACF9]">Tools</span>{" "}
      </h2>
    </div>
  )
}

export default SkillsCard
