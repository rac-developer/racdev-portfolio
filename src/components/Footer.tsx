import React from 'react'
import { basics } from '@/database/data.json'
 
const Footer = () => {

  const url = basics.repoUrl

  return (
    <footer className='py-1 lg:py-0'>
      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-none mx-auto px-6 sm:px-10 xl:px-10 border-t flex flex-col items-center border-secundary-bg">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row pt-6 md:pt-0">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Desarrollado con
            <span className="font-semibold text-secundary"> Next.js</span>,
            <span className="font-semibold text-secundary"> TypeScript</span> y
            <span className="font-semibold text-secundary"> Tailwind CSS</span>.
            <br />
            El código fuente está disponible en{" "}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline hover:underline-offset-4 hover:text-secundary"
            >GitHub</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
