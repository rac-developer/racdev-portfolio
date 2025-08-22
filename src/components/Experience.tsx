import {work} from "@/database/data.json"

interface Work {
  name: string,
  startDate: string | number,
  endDate: string | number | null,
  position: string
}

import React from 'react'

const Experience = () => {
  return (
    <div className="relative">
      <h1 className="font-bold text-4xl">Experencia</h1>
      <ul className="space-y-4">
        {work.map(({name, startDate, endDate, position}: Work, idx) => {
          const startYear = new Date(startDate).getFullYear()
          const endYear = endDate ? new Date(endDate).getFullYear() : "Actualmente"
          const years = `${startYear} - ${endYear}`

          return (
            <li key={name + years + idx}>
              <article className="text-white">
                <h3>{name}</h3>
                <h4>{position}</h4>
                <time>{years}</time>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Experience
