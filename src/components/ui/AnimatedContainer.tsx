"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scrollTriggered?: boolean; // Nueva prop para control
}

export default function AnimatedContainer({
  children,
  delay = 0,
  className = "",
  scrollTriggered = false, // Por defecto, anima al cargar
}: AnimatedContainerProps) {
  const componentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // Creamos el contexto de GSAP
    const ctx = gsap.context(() => {
      // El elemento a animar es el primer hijo del div principal
      const animatedElement = componentRef.current?.children[0];
      if (!animatedElement) return;

      // Estado inicial
      gsap.set(animatedElement, { y: "50px", opacity: 0 });

      // Definimos la animación en estado pausado
      const animation = gsap.to(animatedElement, {
        y: "0px",
        opacity: 1,
        ease: "power3.out",
        delay,
        duration: 0.8,
        paused: true,
      });

      if (scrollTriggered) {
        // Si se activa por scroll, creamos el trigger
        ScrollTrigger.create({
          trigger: componentRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => animation.play(),
        });
      } else {
        // Si no, la reproducimos directamente
        animation.play();
      }
    }, componentRef);

    // Limpieza del contexto
    return () => ctx.revert();
  }, [delay, scrollTriggered]);

  return (
    <div ref={componentRef} className={`overflow-hidden ${className}`}>
      {/* El div hijo ya no necesita una ref separada */}
      <div>{children}</div>
    </div>
  );
}