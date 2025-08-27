import Link from "next/link"
import {basics} from "@/database/data.json"
import { FiExternalLink } from "react-icons/fi";

const CV = () => {

  const cv = basics.cv

  return (
    <div className='flex flex-col h-full justify-center items-center text-white'>
      <Link
        href={cv}
        target="_blank"
        className="font-bold text-6xl hover:text-secundary flex items-center gap-2"
      >
        CV
        <FiExternalLink />
      </Link>
      
    </div>
  )
}

export default CV