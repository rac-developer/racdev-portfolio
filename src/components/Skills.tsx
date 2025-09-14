import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiFigma, SiDocker, SiPython, SiRedux, SiSass,
  SiPostgresql, SiNodedotjs, SiNestjs, SiGit, SiPrisma, SiVercel
} from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";

const size: number = 50;

const technologies = [
  { name: 'HTML5', icon: <SiHtml5 size={size} /> },
  { name: 'CSS3', icon: <SiCss3 size={size} /> },
  { name: 'JavaScript', icon: <IoLogoJavascript size={size} /> },
  { name: 'TypeScript', icon: <SiTypescript size={size} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={size} /> },
  { name: 'React', icon: <SiReact size={size} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={size} /> },
  { name: 'Java', icon: <FaJava size={size} /> },
  { name: 'Python', icon: <SiPython size={size} /> },
  { name: 'Docker', icon: <SiDocker size={size} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={size} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={size} /> },
  { name: 'Sass', icon: <SiSass size={size} /> },
  { name: 'Redux', icon: <SiRedux size={size} /> },
  // { name: 'NestJS', icon: <SiNestjs size={size} /> },
  // { name: 'Prisma', icon: <SiPrisma size={size} /> },
  { name: 'Git', icon: <SiGit size={size} /> },
  { name: 'Figma', icon: <SiFigma size={size} /> },
  // { name: 'Vercel', icon: <SiVercel size={size} /> },
];

const Skills = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-6">
      <div
        className="w-full inline-flex flex-nowrap overflow-hidden 
                   [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]"
      >
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {technologies.map((tech, index) => (
            <li key={`tech-${index}`} className="flex flex-col items-center text-center text-gray-500 hover:text-secundary transition-colors">
              {tech.icon}
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
          {technologies.map((tech, index) => (
            <li key={`tech-dup-${index}`} className="flex flex-col items-center text-center text-gray-500 hover:text-secundary transition-colors">
              {tech.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
