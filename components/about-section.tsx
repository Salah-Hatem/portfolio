import MyBento from "./my-bento"

const AboutSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen  flex flex-col items-center justify-center gap-8 sm:gap-10 mt-24 pt-20"
    >
      <h2 className=" text-3xl sm:text-5xl tracking-tight font-bold ">
        Skills & <span className="text-[#CBACF9]">Experience</span>{" "}
      </h2>

      <MyBento />
    </section>
  )
}

export default AboutSection
