import React from 'react'
import data from '@/database/data.json'

const Education = () => {
  const { institution, area, startDate, endDate } = data.education[0]
  const startYear = new Date(startDate).getFullYear()
  const endYear = endDate ? new Date(endDate).getFullYear() : "Presente"
  const years = `${startYear} - ${endYear}`

  return (
    <div>
      <h2 className="title mb-2">Educación</h2>
      <div className="text-sm">
        <h3 className="font-semibold">{institution}</h3>
        <p className="text-sm text-foreground/80">{area}</p>
        <p className="text-xs text-foreground/60">{years}</p>
      </div>
    </div>
  )
}

export default Education
