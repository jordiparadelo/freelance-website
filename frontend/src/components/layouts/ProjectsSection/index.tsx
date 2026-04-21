import { Button, Container, Section } from "@/components/ui";
import { PROJECTS } from "@/lib/constants";
import ProjectsList from "./ProjectsList";
import styles from "./styles.module.css";

const ProjectsSection = () => {
	return (
		<Section className={styles["projects-section"]} id="selected-works">
			<Container>
				<div className={styles["projects-section_layout"]}>
					<h2 className={styles["projects-section_title"]}>Selected Works</h2>
					<ProjectsList data={PROJECTS.slice(0, 5)} />
					{/* <div className={styles["projects-section_actions"]}>
						<Button href="/projects">See more projects</Button>
					</div> */}
				</div>
			</Container>
		</Section>
	);
};

export default ProjectsSection;
