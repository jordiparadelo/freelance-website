import type { Project } from "@/lib/db/types";
import ProjectItem from "./ProjectItem";
import styles from "./styles.module.css";

const ProjectsList = ({ data }: { data: Project[] }) => {
  return (
    <ul className={styles["projects-list"]}>
      {data.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
