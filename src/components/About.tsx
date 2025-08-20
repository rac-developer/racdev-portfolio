import {basics} from "@/database/data.json"

const About = () => {
  const {summary} = basics

  return (
    <div className="h-full flex flex-col">
      <h1 className="font-bold text-4xl">Sobre mi</h1>
      <div className="flex-1 flex flex-col justify-end">
        <p className="font-light">{summary}</p>
      </div>
    </div>
  )
}

export default About
