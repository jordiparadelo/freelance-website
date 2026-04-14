import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import styles from "./styles.module.scss";

interface Project {
	id: string;
	href: string;
	image: { src: string; alt: string; width: number; height: number };
	title: string;
	details: { brief: string };
}

const ProjectsList = () => {
	return (
		<div className={styles["projects-list"]}>
			{PROJECTS.map((project) => (
				<a
					className={styles["project-card"]}
					key={project.id}
					href={project.href}
				>
					<Image
						src={project.image.src}
						alt={project.title}
						width={48}
						height={48}
						className={styles["project-card__image"]}
					/>

					<div className={styles["project-card__content"]}>
						<h3 className={styles["project-card__content-title"]}>
							{project.title}
						</h3>
						<p className={styles["project-card__content-description"]}>
							{project.details?.brief}
						</p>
					</div>
				</a>
			))}
		</div>
	);
};

export default ProjectsList;
