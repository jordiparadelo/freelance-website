import { Container, Section } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";
import ProjectsList from "./ProjectsList";
import styles from "./styles.module.css";

const ProjectsSection = () => {
	return (
		<Section className={styles["projects-section"]} id="selected-works">
			<Container>
				<div className={styles["projects-section__layout"]}>
					<h2 className={styles["projects-section__title"]}>Selected Works</h2>
					<ProjectsList data={PROJECTS} />
				</div>
			</Container>
		</Section>
	);
};

export default ProjectsSection;
