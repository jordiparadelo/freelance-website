"use server";
import { Container, Section } from "@/components/ui";
import { getProjects } from "@/lib/db";
import ProjectsList from "./ProjectsList";
import styles from "./styles.module.css";

const ProjectsSection = async () => {
	const PROJECTS = await getProjects({ limit: 5 });

	return (
		<Section className={styles["projects-section"]} id="selected-works">
			<Container>
				<div className={styles["projects-section_layout"]}>
					<h2 className={styles["projects-section_title"]}>Selected Works</h2>
					<ProjectsList data={PROJECTS} />
				</div>
			</Container>
		</Section>
	);
};

export default ProjectsSection;
