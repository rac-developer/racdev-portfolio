import React from 'react'
import { FaYoutube, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import data from '@/database/data.json'

const SocialMedia = () => {
  const colorText = 'text-gray-500 hover:text-secundary transition-colors'

  const iconMap: { [key: string]: React.ElementType } = {
    'X': FaXTwitter,
    'Youtube': FaYoutube,
    'LinkedIn': FaLinkedinIn,
    'GitHub': FaGithub,
  };

  const socialLinks = data.basics.profiles.map(profile => ({
    name: profile.network,
    url: profile.url,
    icon: iconMap[profile.network],
    color: colorText,
  })).filter(link => link.icon);
  
  return (
    <div className="grid h-full w-full grid-cols-2 items-center justify-items-center gap-4">
      {socialLinks.map((link) => {

        const Icon = link.icon;

        return (
          <div
            key={link.name}
            className="flex items-center justify-center border-1 border-secundary-bg rounded-lg w-full h-full p-6" 
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