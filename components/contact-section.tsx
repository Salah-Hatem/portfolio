import React from "react"
import { Button } from "./ui/button"
import { AiOutlineLinkedin } from "react-icons/ai"
import { MdOutlineMailOutline } from "react-icons/md"

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="h-auto  flex flex-col items-center gap-14 pt-24 mb-52"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-5xl tracking-tight font-bold w-[600px] text-center">
          Ready to take your <span className="text-[#CBACF9]">digital</span>{" "}
          presence to the next level?
        </h2>
        <p className="text-base text-[#C1C2D3]">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-7">
        <h2 className="text-5xl tracking-tight font-bold w-[600px] text-center ">
          Contact Me
        </h2>
        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            className=" rounded-[100%] border-[1px] border-[#080B21] antialiased"
            size="icon"
          >
            <AiOutlineLinkedin size="20" />
          </Button>
          <Button
            variant="outline"
            className="  rounded-[100%] border-[1px] border-[#080B21] antialiased"
            size="icon"
          >
            <MdOutlineMailOutline size="20" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
