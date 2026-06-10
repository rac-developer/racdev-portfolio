import prisma from "@/database/client";
import ProjectsClient from "@/components/ProjectsClient";

export const revalidate = 60;

export default async function Page() {
  const projectsRaw = await prisma.project.findMany({
    include: { skills: true },
    orderBy: { order: 'asc' }
  });

  const projects = projectsRaw.map((p: any) => ({
    ...p,
    skills: p.skills.map((s: any) => s.name)
  }))

  return <ProjectsClient projects={projects} />;
}