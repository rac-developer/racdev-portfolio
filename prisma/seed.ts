import 'dotenv/config'
import * as fs from 'fs'
import * as path from 'path'
import prisma from '../src/database/client'

async function main() {
  const dataPath = path.join(__dirname, '../src/database/data.json')
  const rawData = fs.readFileSync(dataPath, 'utf-8')
  const data = JSON.parse(rawData)

  console.log('Seeding Basics...')
  await prisma.basics.create({
    data: {
      name: data.basics.name,
      layout: data.basics.layout,
      label: data.basics.label,
      email: data.basics.email,
      phone: data.basics.phone,
      videoYT: data.basics.videoYT,
      url: data.basics.url,
      repoUrl: data.basics.repoUrl,
      cv: data.basics.cv,
      summary: data.basics.summary,
      postalCode: data.basics.location.postalCode,
      city: data.basics.location.city,
      countryCode: data.basics.location.countryCode,
      region: data.basics.location.region,
      profiles: {
        create: data.basics.profiles.map((p: any) => ({
          network: p.network,
          username: p.username,
          url: p.url,
        })),
      },
    },
  })

  console.log('Seeding Skills...')
  // Gather all unique skills from works and projects
  const uniqueSkills = new Set<string>()
  
  data.work.forEach((w: any) => {
    if (w.skills) {
      w.skills.forEach((s: string) => uniqueSkills.add(s))
    }
  })
  
  data.projects.forEach((p: any) => {
    if (p.skills) {
      p.skills.forEach((s: string) => uniqueSkills.add(s))
    }
  })

  // Create all skills
  for (const skillName of uniqueSkills) {
    await prisma.skill.upsert({
      where: { name: skillName },
      update: {},
      create: { name: skillName },
    })
  }

  console.log('Seeding Work...')
  for (const w of data.work) {
    await prisma.work.create({
      data: {
        name: w.name,
        position: w.position,
        url: w.url,
        startDate: w.startDate,
        endDate: w.endDate,
        description: w.description,
        summary: w.summary,
        highlights: w.highlights,
        skills: {
          connect: w.skills ? w.skills.map((s: string) => ({ name: s })) : []
        }
      }
    })
  }

  console.log('Seeding Education...')
  for (const e of data.education) {
    await prisma.education.create({
      data: {
        institution: e.institution,
        url: e.url,
        area: e.area,
        studyType: e.studyType,
        startDate: e.startDate,
        endDate: e.endDate,
        score: e.score,
        courses: e.courses,
      }
    })
  }

  console.log('Seeding Projects...')
  for (const p of data.projects) {
    await prisma.project.create({
      data: {
        name: p.name,
        github: p.github,
        isActive: p.isActive,
        up: p.up,
        startDate: p.startDate,
        endDate: p.endDate,
        description: p.description,
        url: p.url,
        image: p.image,
        skills: {
          connect: p.skills ? p.skills.map((s: string) => ({ name: s })) : []
        }
      }
    })
  }

  console.log('Seeding SkillGroups...')
  for (const sg of data.skills) {
    await prisma.skillGroup.create({
      data: {
        name: sg.name,
        level: sg.level,
        keywords: sg.keywords,
      }
    })
  }

  // Optional arrays
  if (data.volunteer) {
    for (const v of data.volunteer) {
      await prisma.volunteer.create({
        data: v
      })
    }
  }
  
  if (data.awards) {
    for (const a of data.awards) {
      await prisma.award.create({
        data: a
      })
    }
  }

  if (data.certificates) {
    for (const c of data.certificates) {
      await prisma.certificate.create({
        data: c
      })
    }
  }

  if (data.publications) {
    for (const p of data.publications) {
      await prisma.publication.create({
        data: p
      })
    }
  }

  if (data.languages) {
    for (const l of data.languages) {
      await prisma.language.create({
        data: l
      })
    }
  }

  if (data.interests) {
    for (const i of data.interests) {
      await prisma.interest.create({
        data: i
      })
    }
  }

  if (data.references) {
    for (const r of data.references) {
      await prisma.reference.create({
        data: r
      })
    }
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
