import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles.scss";

const ProjectsList = ({ projects }: { projects: ProjectsType[] }) => {
	return (
		<ul className='projects-list'>
			{projects?.map((project: ProjectsType) => (
				<li key={project.id}>
					<Project project={project} />
				</li>
			))}
		</ul>
	);
};

export default ProjectsList;

const Project = ({ project }: { project: ProjectsType }) => {
	return (
		<article className='project' >
			<header className='project__header'>
				<div className='project__heading-wrapper'>
					<Link href={`?modal=true&id=${project.id}`} scroll={false}>
						<h3 className='project__title'>{project.title}</h3>
					</Link>
					<p className='project__details'>{project.details}</p>
				</div>

				<p className='project__description'>{project.details}</p>

				<ul className='project__categories'>
					{project.categories?.map((category) => (
						<li className='project__category'><span>{category}</span></li>
					))}
				</ul>
			</header>
			<Link href={`?modal=true&id=${project.id}`} scroll={false}>
				<div className='project__image'>
					<Image
						src={project.image.src}
						alt={project.image.alt}
					/>
				</div>
			</Link>
		</article>
	);
};
