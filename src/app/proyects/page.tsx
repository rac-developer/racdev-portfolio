'use client';

import { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Calendar, 
  Clock,
  AlertCircle,
  Code2
} from 'lucide-react';

const projectsData = {
  "projects": [
    {
      "name": "Tic tac toe",
      "github": "https://github.com/r-alejandro-castro/tic-tac-toe",
      "isActive": true,
      "up": "Al poner arriba false, cambia al logo de git hub",
      "startDate": "2024-02-10",
      "endDate": "2024-10-13",
      "description": "Implementación de juego de tres en raya con historial de jugadas y lógica de ganador.",
      "highlights": ["React.js"],
      "url": "https://rac-tic-tac-toe.netlify.app/"
    },
    {
      "name": "X Card",
      "github": "https://github.com/r-alejandro-castro/x-card",
      "isActive": true,
      "startDate": "2024-10-17",
      "endDate": "2024-10-23",
      "description": "Página web interactiva en React con funcionalidad de seguimiento de usuarios, basada en componentes reutilizables.",
      "highlights": ["React.js"],
      "url": "https://rac-tic-tac-toe.netlify.app/"
    },
    {
      "name": "Proyectos en JavaScript",
      "github": "https://github.com/r-alejandro-castro/web-apps-js-and-ts",
      "isActive": false,
      "startDate": "2024-10-17",
      "endDate": "2024-10-23",
      "description": "Colección de mini componentes JavaScript (navbar, contador, etc.) en GitHub, enfocados en funcionalidades individuales.",
      "highlights": ["JavaScript"],
      "url": "https://github.com/r-alejandro-castro/web-apps-js-and-ts"
    }
  ]
};
import React from 'react'

const Proyects = () => {
  const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({});
  const [errorStates, setErrorStates] = useState<{[key: string]: boolean}>({});

  const handleIframeLoad = (name: string) => {
    setLoadingStates(prev => ({ ...prev, [name]: false }));
  };

  const handleIframeError = (name: string) => {
    setLoadingStates(prev => ({ ...prev, [name]: false }));
    setErrorStates(prev => ({ ...prev, [name]: true }));
  };

  // Formatear fecha
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header con nombre y estado */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.isActive ? 'Activo' : 'Inactivo'}
                  </span>
                </div>

                {/* Fechas */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{formatDate(project.startDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{formatDate(project.endDate)}</span>
                  </div>
                </div>
              </div>

              {/* Contenedor de la preview - solo si está activo y tiene URL */}
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
                      className={`w-full h-full border-0 transition-opacity duration-300 ${
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
                // Si está inactivo o es un repositorio de GitHub, mostrar placeholder
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

              {/* Información del proyecto */}
              <div className="p-6">
                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de acción */}
                <div className="flex gap-3">
                  {/* Botón GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex-1 justify-center text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>

                  {/* Botón Ver Proyecto - solo si está activo y no es GitHub */}
                  {project.isActive && project.url && !project.url.includes('github.com') && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex-1 justify-center text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proyects