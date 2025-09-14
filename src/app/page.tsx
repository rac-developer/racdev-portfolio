'use client'

import { useLayoutEffect, useRef, useState } from "react";
import About from "@/components/About";
import CV from "@/components/CV";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Location from "@/components/Location";
import Photo from "@/components/Photo";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SocialMedia from "@/components/SocialMedia";
import Time from "@/components/Time";
import Youtube from "@/components/Youtube";
import AnimatedCard from "@/components/ui/AnimatedCard";

export default function Home() {
  
  const mainGridRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const delays = {
    About: 0,
    Photo: 0.2,
    Experience: 0.3,
    Projects: 0.4,
    CV: 0.5,
    Location: 0.6,
    Time: 0.7,
    Skills: 0.8,
    Education: 0.1,
    Youtube: 0.2,
    SocialMedia: 0.3,
  };

  useLayoutEffect(() => {
    let gsapInstance: any;
    let ScrollTriggerInstance: any;
    let ctx: any;

    const loadGSAP = async () => {
      const GSAP = await import("gsap");
      const ScrollTrigger = await import("gsap/ScrollTrigger");
      gsapInstance = GSAP.gsap;
      ScrollTriggerInstance = ScrollTrigger.ScrollTrigger;
      gsapInstance.registerPlugin(ScrollTriggerInstance);

      const mediaQuery = window.matchMedia("(min-width: 1280px)");

      const handleMediaQueryChange = (e: MediaQueryListEvent | MediaQueryList) => {
        setIsDesktop(e.matches);
        if (ScrollTriggerInstance) {
          ScrollTriggerInstance.refresh();
        }
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);

      if (mainGridRef.current) {
        gsapInstance.set(mainGridRef.current, { visibility: 'visible' });
      }

      ctx = gsapInstance.context(() => {
        ScrollTriggerInstance.matchMedia({
          "(min-width: 1280px)": function () {
            if (mainGridRef.current) {
              mainGridRef.current.style.overflowY = "visible";
              mainGridRef.current.style.minHeight = "auto";
              mainGridRef.current.style.height = "auto";
            }
          },
          "(max-width: 1279px)": function () {
            if (mainGridRef.current) {
              mainGridRef.current.style.overflowY = "visible"
              mainGridRef.current.style.minHeight = "0"
              mainGridRef.current.style.height = "auto"
            }
          },
        });
      }, mainGridRef);
    };

    loadGSAP();

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  const scrollTriggered = !isDesktop;

  return (
    <main className="pt-8 pb-6">

      {/* Grid principal */}
      <div ref={mainGridRef} className="grid grid-cols-1 gap-4 xl:grid-cols-4 xl:auto-rows-[minmax(130px,auto)] invisible">

        <AnimatedCard delay={delays.About} scrollTriggered={scrollTriggered} className="card-style background-style xl:col-span-3 xl:row-span-1 relative h-full">
          <About />
        </AnimatedCard>

        <AnimatedCard delay={delays.Photo} scrollTriggered={scrollTriggered} className="card-photo background-style xl:row-span-4 xl:col-start-4 relative h-full">
          <Photo />
        </AnimatedCard>

        <AnimatedCard delay={delays.Experience} scrollTriggered={scrollTriggered} className="card-style background-style xl:row-span-2 xl:row-start-2 relative h-full">
          <Experience />
        </AnimatedCard>

        <AnimatedCard delay={delays.Projects} scrollTriggered={scrollTriggered} className="card-style background-style xl:col-span-2 xl:row-span-2 xl:row-start-2 relative h-full">
          <Projects />
        </AnimatedCard>

        <AnimatedCard delay={delays.CV} scrollTriggered={scrollTriggered} className="card-text background-style xl:row-span-1 xl:col-start-1 xl:row-start-4 relative h-full">
          <CV />
        </AnimatedCard>

        <AnimatedCard delay={delays.Location} scrollTriggered={scrollTriggered} className="card-text background-style xl:row-span-1 xl:col-start-2 xl:row-start-4 relative h-full">
          <Location />
        </AnimatedCard>

        <AnimatedCard delay={delays.Time} scrollTriggered={scrollTriggered} className="card-text background-style xl:row-span-1 xl:col-start-3 xl:row-start-4 relative h-full">
          <Time />
        </AnimatedCard>

        <AnimatedCard delay={delays.Skills} scrollTriggered={scrollTriggered} className="card-style background-style xl:col-span-4 xl:row-start-5 relative h-full">
          <Skills />
        </AnimatedCard>
      </div>

      {/* Grid secundario */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4 xl:auto-rows-[minmax(400px,auto)]">

        <AnimatedCard delay={delays.Education} scrollTriggered={true} className="card-style background-style h-full xl:col-span-1">
          <Education />
        </AnimatedCard>

        <AnimatedCard delay={delays.Youtube} scrollTriggered={true} className="card-style background-style xl:col-span-2 h-full">
          <Youtube />
        </AnimatedCard>

        <AnimatedCard delay={delays.SocialMedia} scrollTriggered={true} className="rounded-xl xl:col-span-1 h-full">
          <SocialMedia />
        </AnimatedCard>
      </div>
    </main>
  );
}
