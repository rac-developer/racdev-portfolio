import React from 'react'
import { FaYoutube, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // FaXTwitter está en 'react-icons/fa6'

const SocialMedia = () => {
  
  const colorText = 'text-gray-500 dark:text-gray-400 hover:text-secundary transition-colors'
  const nameUser = 'racdeveloper'

  const socialLinks = [
    // Asegúrate de reemplazar 'tu_usuario' y 'tu_canal' con tus enlaces reales
    { name: 'X (Twitter)', url: `https://twitter.com/${nameUser}`, icon: FaXTwitter, color: colorText },
    { name: 'YouTube', url: `https://www.youtube.com/${nameUser}`, icon: FaYoutube, color: colorText },
    { name: 'LinkedIn', url: `https://www.linkedin.com/in/${nameUser}`, icon: FaLinkedinIn, color: colorText },
    { name: 'GitHub', url: `https://github.com/${nameUser}`, icon: FaGithub, color: colorText },
  ];

  return (
    <div className="grid h-full w-full grid-cols-2 items-center justify-items-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <div
            key={link.name}
            className="flex items-center justify-center border-1 border-secundary-bg rounded-lg w-full h-full" /* Nuevo div contenedor con borde y padding */
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`flex items-center justify-center transition-transform hover:scale-110 ${link.color} !bg-transparent`}
            >
              <Icon className="text-5xl" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SocialMedia;