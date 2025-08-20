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
    <div className="h-screen p-12">
      <div className="grid h-full grid-cols-4 grid-rows-8 gap-4">
          <div className="col-span-3 row-span-2 bg-primary rounded-lg items-center justify-center p-6">
            <About/>
          </div>
          <div className="row-span-5 col-start-4 bg-white rounded-lg">
            <Photo/>
          </div>
          <div className="row-span-3 row-start-3 bg-white rounded-lg">
            <Experience/>
          </div>
          <div className="col-span-2 row-span-2 row-start-3 bg-white rounded-lg">
            <Proyects/>
          </div>
          <div className="col-start-2 row-start-5 bg-white rounded-lg">
            <Location/>
          </div>
          <div className="col-start-3 row-start-5 bg-white rounded-lg">
            <Time/>
          </div>
          <div className="col-span-4 row-start-6 bg-white rounded-lg">
            <Skills/>
          </div>
          <div className="row-span-2 row-start-7 bg-white rounded-lg">
            <Message/>
          </div>
          <div className="col-span-2 row-span-2 row-start-7 bg-white rounded-lg">
            <Youtube/>
          </div>
          <div className="row-span-2 col-start-4 row-start-7 bg-white rounded-lg">
            <SocialMedia/>
          </div>
        </div>
    </div>
  );
}
