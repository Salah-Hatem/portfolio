"use client"

import { SecondPulseBeams } from "@/components/second-pulse-beams"
import { Button } from "@/components/ui/button"
import WordFadeIn from "@/components/magicui/word-fade-in"
import FlipText from "@/components/magicui/flip-text"
import WordRotate from "@/components/magicui/word-rotate"
import { FaGithub } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { AiOutlineLinkedin } from "react-icons/ai"
import { FaAngleDoubleDown } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full bg-[url('./Bg.svg')] h-[900px] bg-auto bg-no-repeat bg-center relative overflow-clip"
    >
      {/* Position SecondPulseBeams as a background */}
      <div className="absolute inset-0 z-0 w-full">
        <SecondPulseBeams />
      </div>

      {/* Content that goes on top */}

      <div className="w-[440px] h-full flex flex-col justify-center items-center  mx-auto z-10 relative">
        <WordFadeIn
          className="text-gray-400 font-medium text-2xl"
          words="Hello I'm"
          delay={0.2}
        />

        <div className="flex flex-col justify-center items-center">
          <FlipText
            className="text-4xl font-bold tracking-[-0.1em] text-[#080B21] dark:text-white md:text-7xl md:leading-[5rem]"
            word="Salah Hatem"
            delayMultiple={0.1}
          />

          <div className="text-3xl tracking-[-1.6px] font-medium  flex justify-center items-center">
            <WordRotate
              className=" text-[#CBACF9] m-0"
              words={["Full-Stack Web Developer", "UI/UX Designer"]}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-8 items-stretch">
          <a href="#projects">
            <Button className="px-8 py-6   rounded-[14px] border-[1px] border-[#080B21] w-[190px]  antialiased flex items-center justify-stretch gap-2">
              <p className="text-[1rem] leading-[120%] tracking-tight	">
                See My Work
              </p>
              <FaAngleDoubleDown size={16} />
            </Button>
          </a>
          <a
            download={true}
            target="_blank"
            rel="noopener noreferrer"
            href="/files/salah-hatem-cv-oct2024.pdf"
          >
            <Button
              variant="outline"
              className="px-8 py-6 rounded-[14px] border-[1px] border-[#080B21] w-[190px]  antialiased flex items-center justify-stretch gap-2 "
            >
              <FaDownload size={16} />
              <p className="text-[1rem] leading-[120%] tracking-tight	">
                Download CV
              </p>
            </Button>
          </a>
        </div>
        <div className="mt-6 flex gap-4 justify-center items-center">
          <a href="mailto:salahhatem899@gmail.com">
            <Button
              variant="outline"
              className="  rounded-[100%] border-[1px] border-[#080B21] antialiased"
              size="icon"
            >
              <MdOutlineMailOutline size="20" />
            </Button>
          </a>
          <a href="https://github.com/Salah-Hatem/">
            <Button
              variant="outline"
              className=" rounded-[100%] border-[1px] border-[#080B21] antialiased"
              size="icon"
            >
              <FaGithub size="20" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/salah-hatem-6a21b7195">
            <Button
              variant="outline"
              className=" rounded-[100%] border-[1px] border-[#080B21] antialiased"
              size="icon"
            >
              <AiOutlineLinkedin size="20" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
