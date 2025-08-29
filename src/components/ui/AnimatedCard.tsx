"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  mid?: boolean;
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = "",
  mid = false,
}: AnimatedCardProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  // Usamos useLayoutEffect para animaciones, previene parpadeos (flickering)
  useLayoutEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    // Creamos un contexto de GSAP para un cleanup automático y seguro en React
    const ctx = gsap.context(() => {
      // Ocultamos la tarjeta inicialmente
      gsap.set(el, { y: "50px", opacity: 0 });

      const animation = gsap.to(el, {
        y: "0px",
        opacity: 1,
        ease: "back.out(1.2)",
        delay,
        duration: 0.6,
      });

      // Usamos matchMedia para la lógica responsive
      ScrollTrigger.matchMedia({
        // ✅ Lógica para ESCRITORIO (coincide con el breakpoint 'xl' de Tailwind)
        "(min-width: 1280px)": function () {
          // En escritorio, simplemente ejecutamos la animación.
          // Las tarjetas del segundo grid estarán fuera de la vista y se animarán
          // cuando el usuario baje, dando el efecto deseado.
          animation.play();
        },

        // ✅ Lógica para MÓVIL (y tablets)
        "(max-width: 1279px)": function () {
          // En móvil, activamos la animación con ScrollTrigger
          ScrollTrigger.create({
            trigger: el,
            start: mid ? "top 65%" : "top 90%", // Ajustado para mejor visibilidad en móvil
            once: true,
            onEnter: () => animation.play(),
          });
        },
      });
    }, triggerRef);

    // Cleanup del contexto al desmontar el componente
    return () => ctx.revert();
  }, [delay, mid]);

  return (
    <div ref={triggerRef} className={`${className}`}>
      {children}
    </div>
  );
}


