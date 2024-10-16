"use client"
import { FaUpwork } from "react-icons/fa6"
import { HiOutlineLink } from "react-icons/hi"
import Mostaql from "./svg/mostaql"

const WorkExpCard = () => {
  return (
    <div className="md:col-span-5 border border-[#DBDBDB] rounded-xl hover:shadow-xl transition duration-200 shadow-input p-5 flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <div className="w-full h-[84px] rounded-[6px] bg-[#F9F9F9] flex py-3 px-5 items-center justify-between">
          <div className="flex gap-5">
            <div className="w-[60px] h-[60px] bg-white rounded-[6px] flex items-center justify-center">
              <FaUpwork size={40} />
            </div>
            <div>
              <h2 className="font-medium tracking-tight">
                Web Developer, UI/UX Designer
              </h2>
              <p className="text-xs text-[#6C6C6C] font-medium tracking-tight">
                UpWork - Freelance
              </p>
              <p className="text-xs text-[#D3D3D3] font-medium tracking-tight">
                Oct 2022 - Present
              </p>
            </div>
          </div>
          <a
            className="hover:bg-slate-200 w-8 h-8 flex justify-center items-center rounded-sm duration-300 cursor-pointer"
            href="https://www.upwork.com/freelancers/salahh"
            target="_blank"
          >
            <HiOutlineLink size={24} />
          </a>
        </div>
        <div className="w-full h-[84px] rounded-[6px] bg-[#F9F9F9] flex py-3 px-5 items-center justify-between">
          <div className="flex gap-5">
            <div className="w-[60px] h-[60px] bg-white rounded-[6px] flex items-center justify-center">
              <Mostaql />
            </div>
            <div>
              <h2 className="font-medium tracking-tight">
                Web Developer, UI/UX Designer
              </h2>
              <p className="text-xs text-[#6C6C6C] font-medium tracking-tight">
                UpWork - Freelance
              </p>
              <p className="text-xs text-[#D3D3D3] font-medium tracking-tight">
                Oct 2022 - Present
              </p>
            </div>
          </div>
          <a
            className="hover:bg-slate-200 w-8 h-8 flex justify-center items-center rounded-sm duration-300 cursor-pointer"
            href="https://mostaql.com/u/salahhatem899"
            target="_blank"
          >
            <HiOutlineLink size={24} />
          </a>
        </div>
      </div>
      <h2 className="text-lg tracking-tight font-bold ">
        Work <span className="text-[#CBACF9]">Experience</span>{" "}
      </h2>
    </div>
  )
}

export default WorkExpCard
