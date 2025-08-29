"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  text: string;
  delay?: number;
  className?: string;
  scrollTriggered?: boolean; // Nueva prop para control
}

export default function AnimatedTitle({
  text,
  delay = 0,
  className = "",
  scrollTriggered = false, // Por defecto, anima al cargar
}: AnimatedTitleProps) {
  const componentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // Usamos el div principal como el "escopo" para el contexto de GSAP
    const ctx = gsap.context(() => {
      // Seleccionamos el span dentro del contexto para animarlo
      const titleElement = componentRef.current?.querySelector("span");
      if (!titleElement) return;

      // Estado inicial
      gsap.set(titleElement, { y: "100%", opacity: 0 });

      // Definimos la animación, pero la dejamos en pausa
      const animation = gsap.to(titleElement, {
        y: "0%",
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
          start: "top 90%",
          once: true,
          onEnter: () => animation.play(),
        });
      } else {
        // Si no, la reproducimos directamente
        animation.play();
      }
    }, componentRef); // El contexto se aplica al elemento principal

    // Limpieza automática del contexto al desmontar el componente
    return () => ctx.revert();
  }, [delay, scrollTriggered, text]);

  return (
    <div ref={componentRef} className={`overflow-hidden ${className}`}>
      <h1>
        <span className="inline-block">{text}</span>
      </h1>
    </div>
  );
}
