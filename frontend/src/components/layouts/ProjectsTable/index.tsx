"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { formatStrapiMediaUrl } from "@/lib/db";
import type { Project } from "@/lib/db/types";
import { projectsTableAnimations } from "./animations";
import styles from "./styles.module.css";

const ProjectsTable = ({ projects }: { projects: Project[] }) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  projectsTableAnimations(componentRef);

  return (
    <div className={styles["projects-table"]} ref={componentRef}>
      <div className={styles["table_header"]}>
        <div className={styles["list_row"]}>
          {["Title", "Industries", "Collaborator", "Year"].map((label) => (
            <div key={label} className={styles["list_cell"]}>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles["table_body"]}>
        <figure className={styles["projects-card"]} data-target="card">
          {projects
            .filter((project) => project.id === selected)
            .map((project) => {
              const imageSrc = formatStrapiMediaUrl(
                project.image.url as string,
              );
              return (
                <Image
                  key={project.id}
                  src={imageSrc}
                  alt={project.title}
                  width={200}
                  height={400}
                />
              );
            })}
        </figure>
        <ul className={styles["list"]}>
          {projects.map((project) => (
            <li
              key={project.id}
              className={styles["list_item"]}
              data-target="listItem"
            >
              <Link
                href={`/projects/${project.nameID}`}
                className={styles["list_row"]}
                onMouseEnter={() => setSelected(project.id)}
              >
                <div className={styles["list_cell"]}>
                  <h3 className="heading-style-h4">{project.title}</h3>
                </div>
                {/* <div className={styles["list_cell"]}>
													<p>{project.challenge}</p>
												</div> */}
                <div className={styles["list_cell"]}>
                  <div className="details-group">
                    {project.details?.industries.map((industry) => (
                      <p key={industry.label}>{industry.label}</p>
                    ))}
                  </div>
                </div>
                <div className={styles["list_cell"]}>
                  <div className="details-group">
                    {project.details?.collaboration.map((collaborator) => (
                      <p key={collaborator.label}>{collaborator.label}</p>
                    ))}
                  </div>
                </div>
                <div className={styles["list_cell"]}>
                  <p>{project.details?.year}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsTable;
