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
  scrollTriggered?: boolean; // Nueva prop para controlar si usa ScrollTrigger
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = "",
  mid = false,
  scrollTriggered = false, // Por defecto, no usa ScrollTrigger
}: AnimatedCardProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    gsap.set(el, { y: "50px", opacity: 0 }); // Estado inicial

    const animation = gsap.to(el, {
      y: "0px",
      opacity: 1,
      ease: "back.out(1.2)",
      delay,
      duration: 0.6,
      paused: true, // La animación empieza pausada
    });

    if (scrollTriggered) {
      // Si scrollTriggered es true, usamos ScrollTrigger
      const st = ScrollTrigger.create({
        trigger: el,
        start: mid ? "top 65%" : "top 90%",
        once: true,
        onEnter: () => animation.play(), // Reproduce la animación al entrar
      });

      return () => {
        if (st) st.kill(); // Limpiar ScrollTrigger
      };
    } else {
      // Si no es por scroll (ej. animación al cargar), la reproducimos directamente
      animation.play();
    }
  }, [delay, mid, scrollTriggered]); // Asegúrate de que todas las dependencias estén aquí

  return (
    <div ref={triggerRef} className={`${className}`}>
      {children}
    </div>
  );
}


