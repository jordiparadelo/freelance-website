import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ProjectPage } from "@/components/pages";
import { getProjectByNameID, getProjects } from "@/lib/db";
import { SITE_URL } from "../../seo.config";

type ProjectRouteProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectByNameID(id);

  if (!project) {
    return {};
  }

  const description = (project.challenge ?? project.title)
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155);
  const canonical = new URL(`/projects/${project.nameID}`, SITE_URL).toString();

  return {
    title: project.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description,
      url: canonical,
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => {
    return { id: project.nameID };
  });
}

async function Page({ params }: ProjectRouteProps) {
  const { id } = await params;
  const project = await getProjectByNameID(id);

  if (!project) {
    redirect("/projects");
  }

  return <ProjectPage project={project} />;
}

export default Page;
