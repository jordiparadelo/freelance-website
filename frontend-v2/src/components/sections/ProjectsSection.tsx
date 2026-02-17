import Image from "next/image";
import { Card, Container, Section } from "@/components/ui";
import styles from "@/styles/ProjectsSection.module.css";
import { PROJECTS } from "@/utils/constants";
import type { Project } from "@/utils/types";

const ProjectsSection = () => {
	return (
		<Section className={styles["projects-section"]}>
			<Container>
				<div className={styles["projects-section__layout"]}>
					<h2 className={styles["projects-section__title"]}>Selected Works</h2>

					<ProjectsList data={PROJECTS} />
				</div>
			</Container>
		</Section>
	);
};

const ProjectsList = ({ data }: { data: Project[] }) => {
	return (
		<ul className={styles["projects-list"]}>
			{data.map((project) => (
				<ProjectItem key={project.id} project={project} />
			))}
		</ul>
	);
};

const ProjectItem = ({ project }: { project: Project }) => {
	return (
		<li className={styles["projects-list__item"]} key={project.id}>
			<div className={styles["project-card"]}>
				<img
					src={project.cover || ""}
					alt={project.title}
					width={100}
					height={100}
					className={styles["project-card__image"]}
				/>
				<h3 className={styles["project-card__title"]}>{project.title}</h3>
			</div>
		</li>
	);
};

export default ProjectsSection;
