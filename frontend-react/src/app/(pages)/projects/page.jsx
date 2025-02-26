import React from "react";
import ProjectsList from "@/components/layouts/SelectedProjects/ProjectsList";
import { getProjects } from "@/lib/actions";

const Projects = async () => {
	const { data: projects } = await getProjects();
	return (
		<section>
			<div className='padding-global'>
				<div className='container'>
					<ProjectsList projects={projects} />
				</div>
			</div>
		</section>
	);
};

export default Projects;
