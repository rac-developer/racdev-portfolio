import {work} from "@/database/data.json"
import SeeMore from "./ui/SeeMore"

interface Work {
  name: string,
  startDate: string | number,
  endDate: string | number | null,
  position: string,
  skills: string[]
}

import React from 'react'

const Experience = () => {
  return (
    <div className="flex flex-col h-full relative">
      <section className="flex-responsive-center flex-1 overflow-hidden relative px-4">
        <h1 className="title mb-1">Experiencia</h1>
        <ol className="relative border-s border-gray-200">
          {work.slice(0, 2).map(({ name, startDate, endDate, position, skills }: Work, idx) => {

            const startYear = new Date(startDate).getFullYear()
            const endYear = endDate ? new Date(endDate).getFullYear() : "Actualmente"
            const years = `${startYear} - ${endYear}`

            return (
              <li key={idx} className="mb-10 ms-4 last:mb-0">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{years}</time>
                <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                <h4 className="mb-2 text-base font-normal text-gray-500">{position}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="bg-secundary/90 text-secundary-foreground text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-secundary/100 text-background">
                      {skill}
                    </span>
                  ))}
                </div>
              </li>
            )
          })}
        </ol>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-background/80 to-transparent"/>
      </section>
      <div className="relative z-10 mt-auto pt-4 bg-background/80 backdrop-blur-sm">
        <SeeMore link='/experience'/>
      </div>
    </div>
  )
}

export default Experience
