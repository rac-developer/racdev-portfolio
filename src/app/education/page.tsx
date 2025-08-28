import { education } from "@/database/data.json"
import AnimatedTitle from "@/components/ui/AnimatedTitle"

interface Education {
  institution: string,
  area: string,
  startDate: string,
  endDate: string | null
}

export default function page() {

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-auto flex-col px-4 py-8">
      <AnimatedTitle text="Educación" delay={0.1} className="title-subpage text-primary"/>
      <section className="px-4">
        <ol className="relative border-s border-gray-200">
          {education.map(({ institution, area, startDate, endDate }: Education, idx) => {

            const startYear = new Date(startDate).getFullYear()
            const endYear = endDate ? new Date(endDate).getFullYear() : "Cursando"
            const years = `${startYear} - ${endYear}`

            return (
              <li key={idx} className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-200 bg-gray-200" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{years}</time>
                <h3 className="text-2xl font-semibold text-white">{institution}</h3>
                <h4 className="mb-2 text-base font-normal text-gray-400 ">{area}</h4>
              </li>
            )
          })}
        </ol>
      </section>
    </main>
  )
}
