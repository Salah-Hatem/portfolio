import { SiNextdotjs } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { SiExpress } from "react-icons/si"

const FullStackCard = () => {
  return (
    <div className="md:col-span-5  border border-[#DBDBDB] rounded-xl hover:shadow-xl transition duration-200 shadow-input p-5 flex flex-col justify-between  ">
      <div className="flex items-center justify-between h-full">
        <SiNextdotjs size={64} />
        <FaReact size={64} />
        <FaNodeJs size={64} />
        <SiExpress size={64} />
      </div>
      <h2 className="text-lg tracking-tight font-bold ">
        Full-Stack <span className="text-[#CBACF9]">Javascript</span> Developer
      </h2>
    </div>
  )
}

export default FullStackCard
