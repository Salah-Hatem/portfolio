import MyBento from "./my-bento"

const AboutSection = () => {
  return (
    <section
      id="skills"
      className="h-auto  flex flex-col items-center gap-10 pt-24"
    >
      <h2 className="text-5xl tracking-tight font-bold ">
        Skills & <span className="text-[#CBACF9]">Experience</span>{" "}
      </h2>

      <MyBento />
    </section>
  )
}

export default AboutSection
