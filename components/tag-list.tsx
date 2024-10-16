import React from "react"

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[10px] font-medium border border-[#D1D1D1]  px-1 py-[2px] rounded-[4px] text-black cursor-pointer hover:bg-slate-100 duration-300"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default TagList
