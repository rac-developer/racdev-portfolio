'use client'

import About from "@/components/About";
import Photo from "@/components/Photo";
import CV from "@/components/CV";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Time from "@/components/Time";
import Location from "@/components/Location";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Youtube from "@/components/Youtube";
import SocialMedia from "@/components/SocialMedia";
import AnimatedCard from "@/components/ui/AnimatedCard";
import useAnimatedDelay from "@/hooks/useAnimatedDelay";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Asegúrate de registrarlo aquí también si tienes otras animaciones en la página

export default function Home() {
  const mainGridRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // useAnimatedDelay para los delays de tus tarjetas
  const AboutDelay = useAnimatedDelay(0);
  const PhotoDelay = useAnimatedDelay(0.2);
  const ExperienceDelay = useAnimatedDelay(0.3);
  const ProjectsDelay = useAnimatedDelay(0.4);
  const CVDelay = useAnimatedDelay(0.5);
  const LocationDelay = useAnimatedDelay(0.6);
  const TimeDelay = useAnimatedDelay(0.7);
  const SkillsDelay = useAnimatedDelay(0.8);
  const EducationDelay = useAnimatedDelay(0.1);
  const YoutubeDelay = useAnimatedDelay(0.2);
  const SocialMediaDelay = useAnimatedDelay(0.3);

  useLayoutEffect(() => {
    // Media query para detectar si estamos en escritorio (breakpoint 'xl' de Tailwind)
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleMediaQueryChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
      // Cuando cambia el tamaño, es buena idea refrescar ScrollTrigger
      ScrollTrigger.refresh();
    };

    // Escuchar cambios
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Establecer el estado inicial
    handleMediaQueryChange(mediaQuery);

    // GSAP matchMedia para el control de overflow del grid principal
    // Esto es CRUCIAL para evitar el doble scroll en mobile
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 1280px)": function () {
          if (mainGridRef.current) {
            mainGridRef.current.style.overflowY = "visible";
            mainGridRef.current.style.minHeight = "auto";
            mainGridRef.current.style.height = "auto";
          }
        },
        // Mobile (y tablet)
        "(max-width: 1279px)": function () {
          if (mainGridRef.current) {
            mainGridRef.current.style.overflowY = "visible"; // Aseguramos que no haya scroll interno
            mainGridRef.current.style.minHeight = "0"; // Permitimos que crezca
            mainGridRef.current.style.height = "auto"; // Aseguramos altura flexible
          }
        },
      });
    }, mainGridRef); // Contexto para el mainGridRef

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      ctx.revert(); // Limpiar el contexto de GSAP
    };
  }, []);


  return (
    <main className="pt-8 pb-6">

      {/* Grid principal */}
      {/* Eliminamos 'overflow-y-auto' y 'min-h-0' del className; GSAP lo maneja */}
      <div ref={mainGridRef} className="grid grid-cols-1 gap-4 xl:grid-cols-4 xl:auto-rows-[minmax(130px,auto)]">

        <AnimatedCard delay={AboutDelay} scrollTriggered={!isDesktop} className="card-style background-style xl:col-span-3 xl:row-span-1 relative h-full">
          <About />
        </AnimatedCard>

        <AnimatedCard delay={PhotoDelay} scrollTriggered={!isDesktop} className="card-photo background-style xl:row-span-4 xl:col-start-4 relative h-full">
          <Photo />
        </AnimatedCard>

        <AnimatedCard delay={ExperienceDelay} scrollTriggered={!isDesktop} className="card-style background-style xl:row-span-2 xl:row-start-2 relative h-full">
          <Experience />
        </AnimatedCard>

        <AnimatedCard delay={ProjectsDelay} scrollTriggered={!isDesktop} className="card-style background-style xl:col-span-2 xl:row-span-2 xl:row-start-2 relative h-full">
          <Projects />
        </AnimatedCard>

        <AnimatedCard delay={CVDelay} scrollTriggered={!isDesktop} className="card-text background-style xl:row-span-1 xl:col-start-1 xl:row-start-4 relative h-full">
          <CV />
        </AnimatedCard>

        <AnimatedCard delay={LocationDelay} scrollTriggered={!isDesktop} className="card-text background-style xl:row-span-1 xl:col-start-2 xl:row-start-4 relative h-full">
          <Location />
        </AnimatedCard>

        <AnimatedCard delay={TimeDelay} scrollTriggered={!isDesktop} className="card-text background-style xl:row-span-1 xl:col-start-3 xl:row-start-4 relative h-full">
          <Time />
        </AnimatedCard>

        <AnimatedCard delay={SkillsDelay} scrollTriggered={!isDesktop} className="card-style background-style xl:col-span-4 xl:row-start-5 relative h-full">
          <Skills />
        </AnimatedCard>
      </div>

      {/* Grid secundario */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4 xl:auto-rows-[minmax(400px,auto)]">

        {/* Estas tarjetas SIEMPRE se animan con scroll, independientemente del tamaño */}
        <AnimatedCard delay={EducationDelay} scrollTriggered={true} className="card-style background-style h-full xl:col-span-1">
          <Education />
        </AnimatedCard>

        <AnimatedCard delay={YoutubeDelay} scrollTriggered={true} className="card-style background-style xl:col-span-2 h-full">
          <Youtube />
        </AnimatedCard>

        <AnimatedCard delay={SocialMediaDelay} scrollTriggered={true} className="rounded-xl xl:col-span-1 h-full">
          <SocialMedia />
        </AnimatedCard>
      </div>
    </main>
  );
}
