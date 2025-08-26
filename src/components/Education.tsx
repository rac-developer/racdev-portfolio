import React from 'react'
import data from '@/database/data.json'
import SeeMore from './ui/SeeMore'

const Education = () => {
  const { institution, area, startDate, endDate } = data.education[0]
  const startYear = new Date(startDate).getFullYear()
  const endYear = endDate ? new Date(endDate).getFullYear() : "Presente"
  const years = `${startYear} - ${endYear}`

  return (
    <div className='items-center'>
      <div className="flex-responsive-center">
        <h2 className="title">Educación</h2>
        <div className="text-sm">
          <h3 className="font-semibold">{institution}</h3>
          <p className="text-foreground/80">{area}</p>
          <p className="text-foreground/60">{years}</p>
        </div>
      </div>
      <SeeMore link='/education'/>
    </div>
  )
}

export default Education
