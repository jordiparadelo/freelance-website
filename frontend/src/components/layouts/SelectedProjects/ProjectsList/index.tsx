"use client";

import React, { useRef } from "react";
// Libs
import { useGSAP } from "@gsap/react";
import type { Project } from "@/lib/actions";

// Animations
import { projectsAnimation } from "./animations";

// Styles
import styles from "./styles.module.scss";

// Components
import ProjectItem from "./ProjectItem";

interface ProjectsListProps {
	projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
	const componentRef = useRef(null);

	useGSAP(
		() => {
			if (componentRef.current) {
				projectsAnimation(componentRef.current);
			}
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
