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

export default function Home() {
  const AboutDelay = useAnimatedDelay(0);
  const PhotoDelay = useAnimatedDelay(0.2);
  const ExperienceDelay = useAnimatedDelay(0.3);
  const ProjectsDelay = useAnimatedDelay(0.4);
  const CVDelay = useAnimatedDelay(0.5);
  const LocationDelay = useAnimatedDelay(0.6);
  const TimeDelay = useAnimatedDelay(0.7);
  const SkillsDelay = useAnimatedDelay(0.8);
  const EducationDelay = useAnimatedDelay(0.9);
  const YoutubeDelay = useAnimatedDelay(1.0);
  const SocialMediaDelay = useAnimatedDelay(1.1);

  return (
    <main className="pt-8 pb-6">

      {/* Grid principal */}
      <div className="grid grid-cols-1 gap-4 min-h-0 overflow-y-auto xl:grid-cols-4 xl:auto-rows-[minmax(130px,auto)] xl:h-auto xl:overflow-visible">

        <AnimatedCard delay={AboutDelay} immediate className="card-style background-style xl:col-span-3 xl:row-span-1 relative h-full">
          <About />
        </AnimatedCard>

        <AnimatedCard delay={PhotoDelay} immediate className="card-photo background-style xl:row-span-4 xl:col-start-4 relative h-full">
          <Photo />
        </AnimatedCard>

        <AnimatedCard delay={ExperienceDelay} className="card-style background-style xl:row-span-2 xl:row-start-2 relative h-full">
          <Experience />
        </AnimatedCard>

        <AnimatedCard delay={ProjectsDelay} className="card-style background-style xl:col-span-2 xl:row-span-2 xl:row-start-2 relative h-full">
          <Projects />
        </AnimatedCard>

        <AnimatedCard delay={CVDelay} className="card-text background-style xl:row-span-1 xl:col-start-1 xl:row-start-4 relative h-full">
          <CV />
        </AnimatedCard>

        <AnimatedCard delay={LocationDelay} className="card-text background-style xl:row-span-1 xl:col-start-2 xl:row-start-4 relative h-full">
          <Location />
        </AnimatedCard>

        <AnimatedCard delay={TimeDelay} className="card-text background-style xl:row-span-1 xl:col-start-3 xl:row-start-4 relative h-full">
          <Time />
        </AnimatedCard>

        <AnimatedCard delay={SkillsDelay} className="card-style background-style xl:col-span-4 xl:row-start-5 relative h-full">
          <Skills />
        </AnimatedCard>
      </div>

      {/* Grid secundario */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4 xl:auto-rows-[minmax(400px,auto)]">

        <AnimatedCard delay={EducationDelay} className="card-style background-style h-full xl:col-span-1">
          <Education />
        </AnimatedCard>

        <AnimatedCard delay={YoutubeDelay} className="card-style background-style xl:col-span-2 h-full">
          <Youtube />
        </AnimatedCard>

        <AnimatedCard delay={SocialMediaDelay} className="rounded-xl xl:col-span-1 h-full">
          <SocialMedia />
        </AnimatedCard>
      </div>
    </main>
  );
}
