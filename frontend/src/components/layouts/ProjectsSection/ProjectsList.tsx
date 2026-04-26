import type { StrapiProject } from "@/lib/types";
import ProjectItem from "./ProjectItem";
import styles from "./styles.module.css";

const ProjectsList = ({ data }: { data: StrapiProject[] }) => {
  return (
    <ul className={styles["projects-list"]}>
      {data.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
