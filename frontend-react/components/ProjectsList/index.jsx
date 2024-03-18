"use client";

import React, { useRef } from "react";

// Next.js
import Link from "next/link";
import Image from "next/image";

// Libs
import { useGSAP } from "@gsap/react";

// Animations
import { projectsAnimation } from "./animations";

// Components
import { ProjectModal } from "@/components";

// Styles
import "./styles.scss";

const ProjectsList = ({ projects }) => {
	const componentRef = useRef(null);

	useGSAP(
		() => {
			projectsAnimation(componentRef.current);
		},
		{ scope: componentRef }
	);

	return (
		<ul
			className='projects-list'
			ref={componentRef}
		>
			{projects?.map((project, index) => (
				<li key={project.title + "-" + index}>
					<Project
						project={project}
						key={index}
					/>
				</li>
			))}
		</ul>
	);
};

export default ProjectsList;

export const Project = ({ project }) => {
	return (
		<article
			className='project'
			key={project.title}
		>
			<div className='project__header'>
				<div className='project__heading-wrapper'>
					<h3 className='project__title'>{project.title}</h3>
					<ul className='project__categories'>
						{project.categories?.map((category) => (
							<li
								className='project__category'
								key={category}
							>
								<span>{category}</span>
							</li>
						))}
					</ul>
				</div>

				{/* <ProjectModal/> */}

				<ButtonInfo id={project.id}/>
			</div>
			<Link
				href={`?modal=true&type=project&id=${project.id}`}
				scroll={false}
				className='project__image-link'
				rel='preload'
				// onClick={handleClick}
			>
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

export const ButtonInfo = ({id}) => {
	return (
		<Link
			href={`?modal=true&type=project&id=${id}`}
			scroll={false}
			rel='preload'
		>
			info
		</Link>
	);
};
