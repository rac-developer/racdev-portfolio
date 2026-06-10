import prisma from "@/database/client";
import ProjectsClient from "@/components/ProjectsClient";
import { Project as PrismaProject, Skill as PrismaSkill } from '@prisma/client'

export const revalidate = 60;

export default async function Page() {
  const projectsRaw = await prisma.project.findMany({
    include: { skills: true },
    orderBy: { order: 'asc' }
  });

  const projects = projectsRaw.map((p: PrismaProject & { skills: PrismaSkill[] }) => ({
    ...p,
    skills: p.skills.map((s: PrismaSkill) => s.name)
  }))

  return <ProjectsClient projects={projects} />;
}