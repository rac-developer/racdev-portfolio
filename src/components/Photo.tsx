'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const DESKTOP_IMAGE = '/me-desktop.png'
const MOBILE_IMAGE = '/me-mobile.png'

function Photo() {
  const [imageSrc, setImageSrc] = useState(DESKTOP_IMAGE)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setImageSrc(MOBILE_IMAGE)
      } else {
        setImageSrc(DESKTOP_IMAGE)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) 

  return (
    <div className="relative xl:w-full xl:h-full rounded-xl overflow-hidden">
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt="Rodolfo Alejandro C"
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-60 xl:h-100 bg-gradient-to-t from-background/100 to-transparent pointer-events-none" />
    </div>
  )
}

export default Photo
