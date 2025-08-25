import {work} from "@/database/data.json"
import Link from "next/link"

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
    <div className="relative font">
      <h1 className="title mb-1 text-">Experencia</h1>
      <ul className="space-y-4">
        {work.map(({ name, startDate, endDate, position, skills }: Work, idx) => {

          const startYear = new Date(startDate).getFullYear()
          const endYear = endDate ? new Date(endDate).getFullYear() : "Actualmente"
          const years = `${startYear} - ${endYear}`

          return (
            <li key={name + years + idx}>
              <article>
                <h3 className="text-xl font-medium capitalize">{name}</h3>
                <h4 className="text-gray-400 capitalize">{position}</h4>
                <time className="text-md text-gray-500">{years}</time>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="bg-secundary/90 text-secundary-foreground text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-secundary/100 text-background">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      <div className="text-center mt-4">
        <Link
          href="/experience"
          className="inline-block text-secundary/90 font-medium transition-all duration-300 ease-in-out hover:text-secundary/100 hover:-translate-y-px hover:scale-102"
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}

export default Experience
