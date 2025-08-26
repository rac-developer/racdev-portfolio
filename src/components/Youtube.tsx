import React from 'react'

const Youtube = () => {
  const videoId = 'dQw4w9WgXcQ'; 

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
