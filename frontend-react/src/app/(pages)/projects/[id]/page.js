import { getProjectById } from "@/actions";
import { ProjectPage } from "@/pages";


const Project = async ({ params }) => {
	const project = await getProjectById(params.id);

	return (
		<ProjectPage project={project}/>
	);
};

export default Project;
