import {basics} from "@/database/data.json"

const About = () => {
  const {summary} = basics

  return (
    <div className="h-full flex flex-col">
      <h1 className="title mb-2">Sobre mi</h1>
      <p className="font-light text-1xl">{summary}</p>
    </div>
  )
}

export default About
