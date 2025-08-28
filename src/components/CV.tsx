import Link from "next/link"
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import {basics} from "@/database/data.json"
import { FiExternalLink } from "react-icons/fi";

const CV = () => {

  const cv = basics.cv

  return (
    <>
      <AnimatedContainer delay={0.7}>
        <div className="flex h-full justify-center items-center text-white">
          <Link
            href={cv}
            target="_blank"
            className="font-bold text-6xl hover:text-secundary flex items-center gap-2"
          >
            CV
            <FiExternalLink size={60} />
          </Link>
        </div>
      </AnimatedContainer>
      
    </>
  )
}

export default CV