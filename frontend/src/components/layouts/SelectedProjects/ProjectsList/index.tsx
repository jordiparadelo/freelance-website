"use client";

import React, { useRef } from "react";
// Libs
import { useGSAP } from "@gsap/react";

// Animations
import { projectsAnimation } from "./animations";

// Styles
import styles from "./styles.module.scss";

// Components
import ProjectItem from "./ProjectItem";

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
			className={styles['projects-list']}
			ref={componentRef}
		>
			{projects?.map((project, index) => (
				<li key={project.title + "-" + index}>
					<ProjectItem
						project={project} 
						key={index} 
					/>
				</li>
			))}
		</ul>
	);
};

export default ProjectsList;
