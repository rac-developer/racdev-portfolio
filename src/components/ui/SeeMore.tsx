import React from 'react'
import Link from 'next/link'

interface SeeMoreProps {
  link: string;
}

const SeeMore: React.FC<SeeMoreProps> = ({ link }) => {
  return (
    <div className="text-center mt-4">
        <Link
          href={link}
          className="inline-block text-secundary/90 font-medium transition-all duration-300 ease-in-out hover:text-secundary/100 hover:-translate-y-px hover:scale-102"
        >
          Ver más
        </Link>
    </div>
  )
}

export default SeeMore