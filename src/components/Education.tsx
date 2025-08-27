'use client'

import { useState, useEffect } from "react";
import { education }  from '@/database/data.json'
import SeeMore from './ui/SeeMore'

const Education = () => {

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
 
  const displayedEducation = education.slice(0, numToDisplay);

  return (
    <div className='flex flex-col h-full relative text-white'>
      <section className="flex-responsive-center flex-1 overflow-hidden relative px-4">
        <h2 className="title mb-1">Educación</h2>
        <ol className="relative border-s border-gray-200">
          {displayedEducation.map(({ institution, area, startDate, endDate }, idx) => {

            const startYear = new Date(startDate).getFullYear()
            const endYear = endDate ? new Date(endDate).getFullYear() : "Cursando"
            const years = `${startYear} - ${endYear}`

            return (
              <li key={idx} className="mb-10 ms-4 last:mb-0">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-200 bg-gray-200" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{years}</time>
                <h3 className="text-lg font-semibold text-white">{institution}</h3>
                <h4 className="text-base font-normal text-gray-400">{area}</h4>
              </li>
            )
          })}
        </ol>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-background/80 to-transparent"/>
      </section>
      
      <div className="relative z-10 mt-auto pt-4 bg-background/80 backdrop-blur-sm">
        <SeeMore link='/education'/>
      </div>
    </div>
  )
}

export default Education
