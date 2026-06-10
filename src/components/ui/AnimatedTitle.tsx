"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  text: string;
  delay?: number;
  className?: string;
  scrollTriggered?: boolean; 
}

export default function AnimatedTitle({
  text,
  delay = 0,
  className = "",
  scrollTriggered = false, 
}: AnimatedTitleProps) {
  const componentRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    
    const ctx = gsap.context(() => {
      
      const titleElement = componentRef.current?.querySelector("span");
      if (!titleElement) return;

      gsap.set(titleElement, { y: "100%", opacity: 0 });
      
      const animation = gsap.to(titleElement, {
        y: "0%",
        opacity: 1,
        ease: "power3.out",
        delay,
        duration: 0.8,
        paused: true,
      });

      if (scrollTriggered) {
        
        ScrollTrigger.create({
          trigger: componentRef.current,
          start: "top 90%",
          once: true,
          onEnter: () => animation.play(),
        });
      } else {
        
        animation.play();
      }
    }, componentRef); 

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
