import Image from 'next/image'
import React from 'react'

function Photo() {
  return (
    <div className="relative xl:w-full xl:h-full  rounded-xl overflow-hidden ">
      <Image
        src='/me2.png'
        width={500}
        height={500}
        alt="Rodolfo Alejandro C"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 h-100 bg-gradient-to-t from-background/100 to-transparent pointer-events-none" />
    </div>
  )
}

export default Photo
