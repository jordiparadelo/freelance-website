import React from "react";
import "./styles.scss";

const ProjectsList = ({projects}: {projects: ProjectsType[]}) => {

	return (
		<ul className='projects-list'>
			{projects?.map((project: ProjectsType) => (
				<Project project={project} />
			))}
		</ul>
	);
};

export default ProjectsList;

const Project = ({ project }: { project: ProjectsType }) => {

	return (
		<article>
			<h3>{project.title}</h3>
		</article>
	);
};
