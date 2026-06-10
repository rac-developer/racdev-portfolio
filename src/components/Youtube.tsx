'use client'

import React from 'react'
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

const Youtube = ({ videoYT }: { videoYT: string }) => {
  const videoId = videoYT; 
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <div className="flex items-center justify-center h-full text-center p-4">
        <p className="text-muted-foreground">
          No hay conexión a internet para cargar el video.
        </p>
      </div>
    );
  }

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
