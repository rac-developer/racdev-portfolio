import prisma from "@/database/client";
import ProjectsClient from "@/components/ProjectsClient";

export const revalidate = 60;

export default async function Page() {
  const projectsRaw = await prisma.project.findMany({
    include: { skills: true },
    orderBy: { order: 'asc' }
  });

  const projects = projectsRaw.map(p => ({
    ...p,
    skills: p.skills.map(s => s.name)
  }))

  return <ProjectsClient projects={projects} />;
}