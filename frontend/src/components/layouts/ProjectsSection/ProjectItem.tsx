import Image from "next/image";
import type { Project } from "@/types";
import styles from "./styles.module.css";

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
          <div className={styles["project-card_header"]}>
            <div className={styles["project-card_header_headline"]}>
              <h3 className="heading-style-h4">{project.title}</h3>
              <p className="text-size-small text-color-gray">
                {project.details?.blob}
              </p>
              <a href={project.preview}>Visit Site</a>
            </div>
            <div className={styles["project-card_details_block"]}>
              <h4 className={styles["project-card_details_title"]}>Year</h4>
              <span> {project.details?.year}</span>
            </div>
          </div>
          <div className={styles["project-card_details"]}>
            <div className={styles["project-card_details_block"]}>
              <h4 className={styles["project-card_details_title"]}>
                Industries
              </h4>
              <div className={styles["project-card_details_list"]}>
                {project.details?.industries.map((industry) => (
                  <span key={industry}> {industry}</span>
                ))}
              </div>
            </div>
            <div className={styles["project-card_details_block"]}>
              <h4 className={styles["project-card_details_title"]}>Type</h4>
              <div className={styles["project-card_details_list"]}>
                {project.details?.type.map((type) => (
                  <span key={type}> {type}</span>
                ))}
              </div>
            </div>
            <div className={styles["project-card_details_block"]}>
              <h4 className={styles["project-card_details_title"]}>Roles</h4>
              <div className={styles["project-card_details_list"]}>
                {project.details?.roles.map((rol) => (
                  <span key={rol}> {rol}</span>
                ))}
              </div>
            </div>
            {project.details?.collaboration.length && (
              <div className={styles["project-card_details_block"]}>
                <h4 className={styles["project-card_details_title"]}>
                  Collaborators
                </h4>
                <div className={styles["project-card_details_list"]}>
                  {project.details?.collaboration.map((collaborator) => (
                    <span key={collaborator}> {collaborator}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </figure>
    </li>
  );
};

export default ProjectItem;
