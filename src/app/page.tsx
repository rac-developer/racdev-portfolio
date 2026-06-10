import prisma from "@/database/client";
import HomeClient from "@/components/HomeClient";

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
  const work = workRaw.map(w => ({
    ...w,
    skills: w.skills.map(s => s.name)
  }))

  const projectsRaw = await prisma.project.findMany({
    include: { skills: true },
    orderBy: { order: 'asc' },
  });
  
  const projects = projectsRaw.map(p => ({
    ...p,
    skills: p.skills.map(s => s.name)
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
