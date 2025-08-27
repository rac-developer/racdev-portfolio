'use client';

import { useState } from 'react';
import {
  Github,
  ExternalLink,
  AlertCircle,
  Code2
} from 'lucide-react';
import { projects } from "@/database/data.json";
import SkillBadge from "@/components/ui/SkillBadge";

function Page() {
  const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({});
  const [errorStates, setErrorStates] = useState<{[key: string]: boolean}>({});

  const handleIframeError = (name: string) => {
    setLoadingStates(prev => ({ ...prev, [name]: false }));
    setErrorStates(prev => ({ ...prev, [name]: true }));
  };

  const handleIframeLoad = (name: string) => setLoadingStates(prev => ({ ...prev, [name]: false }));

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="title-subpage text-primary text-center">Proyectos</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="background-style rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {project.isActive ? 'Activo' : 'Inactivo'}
                  </span>
                </div>

              </div>

              {project.isActive && project.url && !project.url.includes('github.com') ? (
                <div className="relative h-64 bg-gray-100">
                  {/* Estado de carga */}
                  {loadingStates[project.name] !== false && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                      <p className="text-gray-600 text-sm">Cargando {project.name}...</p>
                    </div>
                  )}

                  {/* Estado de error */}
                  {errorStates[project.name] && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-red-50">
                      <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
                      <p className="text-red-700 text-center text-sm mb-3">
                        No se pudo cargar la vista previa
                      </p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-xs underline flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Ver proyecto directamente
                      </a>
                    </div>
                  )}

                  {/* Iframe */}
                  {!errorStates[project.name] && (
                    <iframe
                      src={project.url}
                      title={`Vista previa de ${project.name}`}
                      className={`w-full h-full border-0 transition-opacity duration-300 scrollbar-hide scroll-smooth ${
                        loadingStates[project.name] !== false ? 'opacity-0' : 'opacity-100'
                      }`}
                      onLoad={() => handleIframeLoad(project.name)}
                      onError={() => handleIframeError(project.name)}
                      sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                      loading="lazy"
                    />
                  )}
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Code2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-sm mb-4">
                      {project.isActive ? 'Repositorio de GitHub' : 'Proyecto inactivo'}
                    </p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Ver en GitHub
                    </a>
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-200 text-md mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, skillIdx) => (
                      <SkillBadge key={skillIdx} skill={skill} color="primary"/>
                    ))}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex-1 justify-center text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>

                    {project.isActive && project.url && !project.url.includes('github.com') && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 btn-primary px-4 py-2 rounded-lg transition-colors flex-1 justify-center text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Page