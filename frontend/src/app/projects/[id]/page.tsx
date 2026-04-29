import { redirect } from "next/navigation";
import { ProjectPage, ProjectsPage } from "@/components/pages";
import { getProjectByNameID, getProjects } from "@/lib/db";

export async function generateStaticParams() {
	const projects = await getProjects();

	return projects.map((project) => {
		return { id: project.nameID };
	});
}

async function Page({ params }: { params: { id: string } }) {
	const { id } = await params;
	const project = await getProjectByNameID(id);
	if (!project) {
		redirect("/projects");
	}

	return <ProjectPage project={project} />;
}

export default Page;
