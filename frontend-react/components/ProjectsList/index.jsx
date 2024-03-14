"use client";

import React, { useRef } from "react";

// Next.js
import Link from "next/link";
import Image from "next/image";

// Libs
import { useGSAP } from "@gsap/react";

// Animations
import { projectsAnimation } from "./animations";

// Styles
import "./styles.scss";

const ProjectsList = ({ projects }) => {
	const componentRef = useRef(null);

	useGSAP(() => {
		projectsAnimation(componentRef.current);
	}, { scope: componentRef });

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
			<header className='project__header'>
				<div className='project__heading-wrapper'>
					<Link
						href={`?modal=true&type=project&id=${project.id}`}
						scroll={false}
						rel='preload'
					>
						<h3 className='project__title'>{project.title}</h3>
					</Link>
				</div>

				<p className='project__description'>{project.details}</p>

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
			</header>
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
