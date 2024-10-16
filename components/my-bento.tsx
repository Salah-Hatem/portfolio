import { BentoGrid } from "./ui/bento-grid"
import WorkExpCard from "./work-exp-card"
import SkillsCard from "./skills-card"
import FullStackCard from "./fullstack-card"

export default function MyBento() {
  return (
    <BentoGrid className="   mx-auto md:auto-rows-[288px] gap-x-4 md:grid-cols-12 p-2">
      <WorkExpCard />
      <SkillsCard />
      <FullStackCard />
    </BentoGrid>
  )
}
