import type { Project } from "@/lib/db/types";
import ProjectItem from "./ProjectItem";
import styles from "./styles.module.css";

const ProjectsGrid = ({ data }: { data: Project[] }) => {
  return (
    <ul className={styles["projects-grid"]}>
      {data.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsGrid;
