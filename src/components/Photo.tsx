import Image from 'next/image'
import React from 'react'

function Photo() {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden ">
      <Image
        src='/me.png'
        width={500}
        height={500}
        alt="Rodolfo Alejandro C"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b to-100% to-background/30 pointer-events-none rounded-xl" />
    </div>
  )
}

export default Photo
