"use client";

import { useRef } from "react";
import type { StrapiProject } from "@/lib/types";
import useListAnimation from "./animations";
import ProjectItem from "./ProjectItem";
import styles from "./styles.module.css";

const ProjectsList = ({ data }: { data: StrapiProject[] }) => {
  const componentRef = useRef(null);

  useListAnimation(componentRef);

  return (
    <ul className={styles["projects-list"]} ref={componentRef}>
      {data.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
