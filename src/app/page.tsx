import About from "@/components/About";
import Photo from "@/components/Photo";
import Experience from "@/components/Experience";
import Proyects from "@/components/Proyects";
import Location from "@/components/Location";
import Time from "@/components/Time";
import Skills from "@/components/Skills";
import Message from "@/components/Message";
import Youtube from "@/components/Youtube";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <main className="h-screen p-4 xl:p-12">
      
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 xl:grid-rows-8 h-full">

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:col-span-3 xl:row-span-2 relative">
          <About />
        </div>

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl xl:row-span-5 xl:col-start-4 relative">
          <Photo />
        </div>

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:row-span-3 xl:row-start-3 relative">
          <Experience />
        </div>

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:col-span-2 xl:row-span-2 xl:row-start-3 relative">
          <Proyects />
        </div>

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:col-start-2 xl:row-start-5 relative">
          <Time />
        </div>

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:col-start-3 xl:row-start-5 relative">
          <Location />
        </div>

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:col-span-4 xl:row-start-6 relative">
          <Skills />
        </div>

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:row-span-2 xl:row-start-7 relative">
          <Message />
        </div>

        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:col-span-2 xl:row-span-2 xl:row-start-7 relative">
          <Youtube />
        </div>
        
        <div className="!bg-transparent border-1 border-secundary-bg rounded-xl p-4 xl:row-span-2 xl:col-start-4 xl:row-start-7 relative">
          <SocialMedia />
        </div>
        
      </div>
    </main>
  );
}
