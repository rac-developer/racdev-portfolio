"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;   // anima al cargar
  mid?: boolean;         // anima al llegar a la mitad del viewport
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = "",
  immediate = false,
  mid = false,
}: AnimatedCardProps) {
  
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    gsap.set(el, { y: "100%", opacity: 0 });

    if (immediate) {
      // 🚀 Anima apenas carga
      gsap.to(el, {
        y: "0%",
        opacity: 1,
        ease: "back.out(1.2)",
        delay,
        duration: 0.6,
      });
    } else {
      // 🎯 Animación con scroll
      ScrollTrigger.create({
        // markers:true,
        trigger: el,
        start: mid ? "top " : "top 95%",
        end: "bottom 80%",
        once: true,
        onEnter: () => {
          gsap.to(el, {
            y: "0%",
            opacity: 1,
            ease: "back.out(1.2)",
            delay,
            duration: 0.6,
          });
        },
      });
    }
  }, [delay, immediate, mid]);

  return (
    <div ref={triggerRef} className={`${className}`}>
      {children}
    </div>
  );
}


