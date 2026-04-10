import Image from "next/image";
import { Container, Section } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";
import type { Project } from "@/types";
import styles from "./styles.module.css";

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
			<figure className={styles["project-card"]}>
				<div className={styles["project-card_cover"]}>
					<Image
						src={project.image.src || ""}
						alt={project.title}
						width={project.image.width}
						height={project.image.height}
						className={styles["project-card_cover_image"]}
					/>
				</div>
				<div className={styles["project-card_description"]}>
					<h3 className={styles["project-card__title"]}>{project.title}</h3>
					<ul className={styles["project-card_category_list"]}>
						{project.categories?.map((category) => (
							<li
								className={styles["project-card_category_item"]}
								key={category}
							>
								{category}
							</li>
						))}
					</ul>
				</div>
			</figure>
		</li>
	);
};

export default ProjectsSection;
