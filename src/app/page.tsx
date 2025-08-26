import About from "@/components/About";
import Photo from "@/components/Photo";
import CV from "@/components/CV";
import Experience from "@/components/Experience";
import Proyects from "@/components/Proyects";
import Time from "@/components/Time";
import Location from "@/components/Location";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Youtube from "@/components/Youtube";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <main className="px-4 xl:px-12 py-8">
      {/* Grid principal */}
      <div className="grid grid-cols-1 gap-4 min-h-0 overflow-y-auto xl:grid-cols-4 xl:auto-rows-[minmax(130px,auto)] xl:h-auto xl:overflow-visible">
        
        <div className="card-style background-style xl:col-span-3 xl:row-span-1 relative h-full">
          <About />
        </div>

        <div className="card-photo background-style xl:row-span-4 xl:col-start-4 relative h-full">
          <Photo />
        </div>

        <div className="card-style background-style xl:row-span-2 xl:row-start-2 relative h-full">
          <Experience />
        </div>

        <div className="card-style background-style xl:col-span-2 xl:row-span-2 xl:row-start-2 relative h-full">
          <Proyects />
        </div>

        <div className="card-style background-style xl:row-span-1 xl:col-start-1 xl:row-start-4 relative h-full">
          <CV />
        </div>

        <div className="card-style background-style xl:row-span-1 xl:col-start-2 xl:row-start-4 relative h-full">
          <Location />
        </div>

        <div className="card-style background-style xl:row-span-1 xl:col-start-3 xl:row-start-4 relative h-full">
          <Time />
        </div>

        <div className="card-style background-style xl:col-span-4 xl:row-start-5 relative h-full">
          <Skills />
        </div>
      </div>

      {/* Grid secundario */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4 xl:auto-rows-[minmax(400px,auto)]">
        <div className="card-style background-style h-full xl:col-span-1">
          <Education />
        </div>
        <div className="card-style background-style xl:col-span-2 h-full">
          <Youtube />
        </div>
        <div className="rounded-xl xl:col-span-1 h-full">
          <SocialMedia />
        </div>
      </div>
    </main>
  );
}