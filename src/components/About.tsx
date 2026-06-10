import AnimatedTitle from "@/components/ui/AnimatedTitle"

const About = ({ summary }: { summary: string }) => {
  return (
    <div className="h-full flex flex-col text-white">
      {/* <h1 className="title">Sobre mi</h1> */}
      <AnimatedTitle text="Sobre mi 👋" delay={0.1} className="title"/>
      <p className="parrafo">{summary}</p>
    </div>
  )
}

export default About
