import About from "@/components/About";
import Photo from "@/components/Photo";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Proyects from "@/components/Proyects";
import Time from "@/components/Time";
import Location from "@/components/Location";
import Skills from "@/components/Skills";
import Message from "@/components/Message";
import Youtube from "@/components/Youtube";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <main className="p-4 xl:p-12">
      
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 xl:grid-rows-7 h-full">

        <div className="card-style xl:col-span-3 xl:row-span-1 relative">
          <About />
        </div>

        <div className="card-photo xl:row-span-4 xl:col-start-4 relative">
          <Photo />
        </div>

        <div className="card-style xl:row-span-2 xl:row-start-2 relative">
          <Experience />
        </div>

        <div className="card-style xl:row-span-1 xl:col-start-1 xl:row-start-4 relative">
          <Education />
        </div>


        <div className="card-style xl:col-span-2 xl:row-span-2 xl:row-start-2 relative">
          <Proyects />
        </div>

        <div className="card-style xl:row-span-1 xl:col-start-2 xl:row-start-4 relative">
          <Location />
        </div>

        <div className="card-style xl:row-span-1 xl:col-start-3 xl:row-start-4 relative">
          <Time />
        </div>

        <div className="card-style xl:col-span-4 xl:row-start-5 relative">
          <Skills />
        </div>

        <div className="card-style xl:row-span-2 xl:row-start-6 relative">
          <Message />
        </div>

        <div className="card-style xl:col-span-2 xl:row-span-2 xl:row-start-6 relative">
          <Youtube />
        </div>
        
        <div className="!bg-transparent border-1 border-transparent rounded-xl xl:row-span-2 xl:col-start-4 xl:row-start-6 relative">
          <SocialMedia />
        </div>
        
      </div>
    </main>
  );
}
