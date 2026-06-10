import prisma from "@/database/client";
import HomeClient from "@/components/HomeClient";
import { Work as PrismaWork, Project as PrismaProject, Skill as PrismaSkill } from '@prisma/client'

export const revalidate = 60; // Cache and revalidate every minute if needed

export default async function Page() {
  const basics = await prisma.basics.findFirst({
    include: { profiles: true },
  });

  const workRaw = await prisma.work.findMany({
    include: { skills: true },
    orderBy: { order: 'asc' },
  });
  
  // Transform skills from relation array to string array for the UI components
  const work = workRaw.map((w: PrismaWork & { skills: PrismaSkill[] }) => ({
    ...w,
    skills: w.skills.map((s: PrismaSkill) => s.name)
  }))

  const projectsRaw = await prisma.project.findMany({
    include: { skills: true },
    orderBy: { order: 'asc' },
  });
  
  const projects = projectsRaw.map((p: PrismaProject & { skills: PrismaSkill[] }) => ({
    ...p,
    skills: p.skills.map((s: PrismaSkill) => s.name)
  }))

  const education = await prisma.education.findMany({
    orderBy: { order: 'asc' }
  });

  return (
    <HomeClient
      basics={basics}
      work={work}
      projects={projects}
      education={education}
    />
  );
}
