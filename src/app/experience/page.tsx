import { work } from "@/database/data.json"
import SkillBadge from "@/components/ui/SkillBadge"
import AnimatedTitle from "@/components/ui/AnimatedTitle"

interface Work {
  name: string,
  startDate: string | number,
  endDate: string | number | null,
  position: string,
  skills: string[],
  summary: string[]
}

export default function page() {

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-auto flex-col  py-12">
      <AnimatedTitle text="Experiencia" delay={0.1} className="title-subpage text-primary"/>
      <section className="px-4">
        <ol className="relative border-s border-gray-200">
          {work.slice(0, 2).map(({ name, startDate, endDate, position, skills, summary }: Work, idx) => {

            const startYear = new Date(startDate).getFullYear()
            const endYear = endDate ? new Date(endDate).getFullYear() : "Actualmente"
            const years = `${startYear} - ${endYear}`

            return (
              <li key={idx} className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-gray-200 bg-gray-200" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">{years}</time>
                <h3 className="text-2xl font-semibold text-white">{name}</h3>
                <h4 className="mb-2 text-base font-normal text-gray-400 ">{position}</h4>
                <div className="mb-4 flex flex-wrap gap-2">
                  {skills.map((skill, skillIdx) => (
                    <SkillBadge key={skillIdx} skill={skill} color="primary"/>
                  ))}
                </div>
                <ul className="list-disc space-y-1 ps-5">
                  {summary.map((point, pointIdx) => (
                    <li key={pointIdx} className="text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
      </section>

    </main>
  )
}
