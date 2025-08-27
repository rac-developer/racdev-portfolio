'use client'

import { useState, useEffect } from "react";
import { work } from "@/database/data.json"
import SkillBadge from "./ui/SkillBadge";
import SeeMore from "./ui/SeeMore"

interface Work {
  name: string,
  startDate: string | number,
  endDate: string | number | null,
  position: string,
  skills: string[]
}


const Experience = () => {

  const [numToDisplay, setNumToDisplay] = useState(3); // Por defecto muestra 3

  useEffect(() => {
    const handleResize = () => {
      // Muestra 4 proyectos si la pantalla es menor a 1410px
      if (window.innerWidth < 1500) {
        setNumToDisplay(2);
      } else {
        // Para anchos de 1500px o más, muestra 2. Puedes ajustar esto.
        setNumToDisplay(2);
      }
    };

    handleResize(); // Se ejecuta al montar para el estado inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedWorks = work.slice(0, numToDisplay);

  return (
    <div className="flex flex-col h-full relative">
      <section className="flex-responsive-center flex-1 overflow-hidden relative px-4">
        <h1 className="title">Experiencia</h1>
        <ol className="relative border-s border-gray-200">
          {displayedWorks.map(({ name, startDate, endDate, position, skills }: Work, idx) => {

            const startYear = new Date(startDate).getFullYear()
            const endYear = endDate ? new Date(endDate).getFullYear() : "Actualmente"
            const years = `${startYear} - ${endYear}`

            return (
              <li key={idx} className="mb-2 md:mb-4 xl:mb-6 ms-4 last:mb-0">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-200 bg-gray-200" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{years}</time>
                <h3 className="text-lg font-semibold text-gray-white">{name}</h3>
                <h4 className="mb-2 text-base font-normal text-gray-400">{position}</h4>
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill, skillIdx) => (
                    <SkillBadge key={skillIdx} skill={skill} color="secundary"/>
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
