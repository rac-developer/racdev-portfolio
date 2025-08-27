'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/database/data.json";
import { ExternalLink, Code2 } from "lucide-react";
import SeeMore from "./ui/SeeMore";

const Projects = () => {
  const [numToDisplay, setNumToDisplay] = useState(4); // Por defecto muestra 4

  useEffect(() => {
    const handleResize = () => {
      // Muestra 4 proyectos si la pantalla es menor a 1410px
      if (window.innerWidth < 1520) {
        setNumToDisplay(4);
      } else {
        // Para anchos de 1410px o más, muestra 2. Puedes ajustar esto.
        setNumToDisplay(2);
      }
    };

    handleResize(); // Se ejecuta al montar para el estado inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedProjects = projects.slice(0, numToDisplay);

  return (
    <section className="relative overflow-hidden justify-center items-center flex flex-col h-full ">
      <h2 className="title text-center mb-1">Proyectos</h2>
      <div className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {displayedProjects.map((project) => (
            <div key={project.name} className="group relative">
              {project.isActive && project.url && project.image && !project.url.includes("github.com") ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  aria-label={`Ver proyecto ${project.name} en vivo`}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={`Vista del proyecto ${project.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    {/* Título */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-1xl drop-shadow-md">
                        {project.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <ExternalLink className="w-6 h- text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                </a>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  aria-label={`Ver código del proyecto ${project.name} en GitHub`}
                >
                  <div className="relative aspect-video flex items-center justify-center bg-gray-200">
                    <Code2 className="w-12 h-12 text-gray-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-1xl drop-shadow-md">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-200 drop-shadow-sm">Ver código</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <ExternalLink className="w-6 h- text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mt-auto pt-4 bg-background/80 backdrop-blur-sm">
        <SeeMore link='/projects' />
      </div>
    </section>
  );
}

export default Projects