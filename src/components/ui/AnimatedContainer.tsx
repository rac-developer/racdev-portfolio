"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  scrollTriggered?: boolean; 
}

export default function AnimatedContainer({
  children,
  delay = 0,
  className = "",
  scrollTriggered = false, 
}: AnimatedContainerProps) {
  const componentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    
    const ctx = gsap.context(() => {
      
      const animatedElement = componentRef.current?.children[0];
      if (!animatedElement) return;

      gsap.set(animatedElement, { y: "50px", opacity: 0 });
      
      const animation = gsap.to(animatedElement, {
        y: "0px",
        opacity: 1,
        ease: "power3.out",
        delay,
        duration: 0.8,
        paused: true,
      });

      if (scrollTriggered) {
        
        ScrollTrigger.create({
          trigger: componentRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => animation.play(),
        });
      } else {
        
        animation.play();
      }
    }, componentRef);

    return () => ctx.revert();
  }, [delay, scrollTriggered]);

  return (
    <div ref={componentRef} className={`overflow-hidden ${className}`}>
      {/* El div hijo ya no necesita una ref separada */}
      <div>{children}</div>
    </div>
  );
}