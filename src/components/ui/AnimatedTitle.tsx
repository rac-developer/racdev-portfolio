"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function AnimatedTitle({
  text,
  delay = 0,
  className = "",
}: AnimatedTitleProps) {

  const titleRef = useRef<HTMLSpanElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const triggerElement = triggerRef.current;
    const titleElement = titleRef.current;

    if (titleElement && triggerElement) {
      // Estado inicial: invisible y desplazado hacia abajo
      gsap.set(titleElement, { y: "100%", opacity: 0 });

      // Animación con ScrollTrigger
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 85%", // La animación empieza cuando titleElement 85% superior dtitleElement titleElementemento es visible
        once: true, // La animación solo se ejecuta una vez
        onEnter: () => {
          gsap.to(titleElement, {
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
      <h1 className="title">
        <span ref={titleRef} className="inline-block">
          {text}
        </span>
      </h1>
    </div>
  );
}
