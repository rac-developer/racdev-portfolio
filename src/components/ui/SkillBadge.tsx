import React from 'react';

type ColorVariant = 'primary' | 'secundary';

interface SkillBadgeProps {
  skill: string;
  color: ColorVariant;
}

const SkillBadge = ({ skill, color = 'secundary' }: SkillBadgeProps) => {
  // Este objeto mapea un nombre de color a las clases de Tailwind correspondientes.
  // De esta forma, Tailwind puede detectar las clases completas y generarlas correctamente.
  const colorVariants: Record<ColorVariant, string> = {
    primary: 'bg-primary/90 text-p-other hover:bg-primary/100',
    secundary: 'bg-secundary/90 text-secundary-bg hover:bg-secundary/100',
  };

  // Clases base que son iguales para todas las variantes
  const baseClasses = "text-xs font-medium px-2.5 py-0.5 rounded-full";

  return (
    <span className={`${baseClasses} ${colorVariants[color]}`}>
      {skill}
    </span>
  );
};

export default SkillBadge;
