"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;   // anima al cargar
  mid?: boolean;         // anima al llegar a la mitad del viewport
  forceImmediateOnDesktop?: boolean; // 👈 nuevo
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = "",
  immediate = false,
  mid = false,
  forceImmediateOnDesktop = false,
}: AnimatedCardProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)"); // xl
    setIsDesktop(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    gsap.set(el, { y: "100%", opacity: 0 });

    const shouldImmediate = immediate || (isDesktop && forceImmediateOnDesktop);

    if (shouldImmediate) {
      // 🚀 Animación apenas carga
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
        trigger: el,
        start: mid ? "top 65%" : "top 10%",
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
  }, [delay, immediate, mid, isDesktop, forceImmediateOnDesktop]);

  return (
    <div ref={triggerRef} className={`${className}`}>
      {children}
    </div>
  );
}
