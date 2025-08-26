import React from 'react'
import data from '@/database/data.json'
import SeeMore from './ui/SeeMore'

const Education = () => {
  return (
    <div className='flex flex-col h-full relative'>
      <section className="flex-responsive-center flex-1 overflow-hidden relative">
        <h2 className="title mb-1">Educación</h2>
        <ul className="space-y-4">
          {data.education.slice(0, 3).map(({ institution, area, startDate, endDate }, idx) => {

            const startYear = new Date(startDate).getFullYear()
            const endYear = endDate ? new Date(endDate).getFullYear() : "Actualmente"
            const years = `${startYear} - ${endYear}`

            return (
              <li key={idx}>
                <article>
                  <h3 className="text-lg font-medium capitalize tracking-tight">{institution}</h3>
                  <h4 className="text-gray-400 capitalize">{area}</h4>
                  <time className="text-md text-gray-500">{years}</time>
                </article>
              </li>
            )
          })}
        </ul>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-gradient-to-t from-background/80 to-transparent"/>
      </section>
      
      <div className="relative z-10 mt-auto pt-4 bg-background/80 backdrop-blur-sm">
        <SeeMore link='/education'/>
      </div>
    </div>
  )
}

export default Education
