"use client";

import React, { useRef } from "react";

// Next.js
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import {ProjectModal} from "@/components";

// Styles
import "./styles.scss";

const ProjectsList = ({ projects }) => {
	const componentRef = useRef(null);

	return (
		<ul
			className='projects-list'
			ref={componentRef}
		>
			{projects?.map((project, index) => (
				<li key={project.title + '-' + index}>
					<Project project={project} key={index}/>
				</li>
			))}
		</ul>
	);
};

export default ProjectsList;

const Project = ({ project }) => {
	const {openModal} = useModal(<ProjectModal/>);

	const handleClick = () => {
		setModalComponent(<ProjectModal/>);
		openModal();
	}

	return (
		<article className='project' key={project.title}>
			<header className='project__header'>
				<div className='project__heading-wrapper'>
					<Link
						href={`?modal=true&type=project&id=${project.id}`}
						scroll={false}
						rel="preload"
						// onClick={handleClick}
					>
						<h3 className='project__title'>{project.title}</h3>
					</Link>
					<p className='project__details'>{project.details}</p>
				</div>

				<p className='project__description'>{project.details}</p>

				<ul className='project__categories'>
					{project.categories?.map((category) => (
						<li className='project__category' key={category}>
							<span>{category}</span>
						</li>
					))}
				</ul>
			</header>
			<Link
				href={`?modal=true&type=project&id=${project.id}`}
				scroll={false}
				className='project__image-link'
				rel="preload"
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
