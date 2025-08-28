import {basics} from "@/database/data.json"
import AnimatedTitle from "@/components/ui/AnimatedTitle"


const About = () => {
  const {summary} = basics

  return (
    <div className="h-full flex flex-col text-white">
      {/* <h1 className="title">Sobre mi</h1> */}
      <AnimatedTitle text="Sobre mi 👋" delay={0.1}/>
      <p className="parrafo">{summary}</p>
    </div>
  )
}

export default About
