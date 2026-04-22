"use client";

import { useRef } from "react";
import type { Project } from "@/types";
import useListAnimation from "./animations";
import ProjectItem from "./ProjectItem";
import styles from "./styles.module.css";

const ProjectsList = ({ data }: { data: Project[] }) => {
  const componentRef = useRef(null);

  useListAnimation(componentRef);

  return (
    <ul className={styles["projects-list"]} ref={componentRef}>
      {data.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
