import React from 'react'
import { basics } from "@/database/data.json"

const Youtube = () => {
  const videoId = basics.videoYT; 

  return (
    <div className="relative w-full overflow-hidden rounded-xl pt-[56.25%] xl:pt-0 xl:h-full">
      <iframe
        title="Reproductor de video de YouTube"
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Youtube
