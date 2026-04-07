"use client";

// Libs
import { useGSAP } from "@gsap/react";
import type React from "react";
import { useRef } from "react";
import type { Project } from "@/lib/actions";

// Animations
import { projectsAnimation } from "./animations";
// Components
import ProjectItem from "./ProjectItem";
// Styles
import styles from "./styles.module.scss";

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
		{ scope: componentRef },
	);

	return (
		<ul className={styles["projects-list"]} ref={componentRef}>
			{projects?.map((project) => (
				<li key={project.title}>
					<ProjectItem project={project} />
				</li>
			))}
		</ul>
	);
};

export default ProjectsList;
