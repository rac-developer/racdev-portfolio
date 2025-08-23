import {basics} from "@/database/data.json"

const About = () => {
  const {summary} = basics

  return (
    <div className="h-full flex flex-col">
      <h1 className="title mb-4">Sobre mi</h1>
      <p className="font-light">{summary}</p>
    </div>
  )
}

export default About
