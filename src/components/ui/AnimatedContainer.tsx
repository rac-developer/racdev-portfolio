"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedContainer({
  children,
  delay = 0,
  className = "",
}: AnimatedContainerProps) {
  
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const animatedElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const triggerElement = triggerRef.current;
    const animatedElement = animatedElementRef.current;

    if (triggerElement && animatedElement) {
      // Estado inicial: invisible y desplazado hacia abajo
      gsap.set(animatedElement, { y: "100%", opacity: 0 });

      // Animación controlada por ScrollTrigger
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 85%", // La animación empieza cuando el 85% superior del elemento es visible
        once: true, // La animación solo se ejecuta una vez
        onEnter: () => {
          gsap.to(animatedElement, {
            y: "0%",
            opacity: 1,
            ease: "power3.out",
            delay,
          });
        },
      });
    }
  }, [delay]);

  return (
    <div ref={triggerRef} className={`overflow-hidden ${className}`}>
      <div ref={animatedElementRef}>{children}</div>
    </div>
  );
}
