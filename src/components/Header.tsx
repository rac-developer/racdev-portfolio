import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <header>
      <Image
        src="logotipo.svg"
        width={500}
        height={500}
        alt="racdeveloper"
      />
    </header>
  )
}
