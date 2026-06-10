"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scrollTriggered?: boolean; 
}

export default function AnimatedCard({
  children,
  delay = 0,
  className = "",
  scrollTriggered = false,
}: AnimatedCardProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = triggerRef.current;
    if (!el) return;

    gsap.set(el, { y: "50px", opacity: 0 });

    const animation = gsap.to(el, {
      y: "0px",
      opacity: 1,
      ease: "back.out(1.2)",
      delay,
      duration: 0.6,
      paused: true,
    });

    if (scrollTriggered) {
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => animation.play(),
      });

      return () => {
        if (st) st.kill();
      };
    } else {
      animation.play();
    }
  }, [delay, scrollTriggered]);

  return (
    <div ref={triggerRef} className={`${className}`}>
      {children}
    </div>
  );
}


