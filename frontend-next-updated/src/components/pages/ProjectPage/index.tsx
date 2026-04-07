import Image from "next/image";
import type React from "react";
import type { Project } from "@/lib/actions";
import styles from "./styles.module.scss";

interface ProjectPageProps {
	project: Project | null;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
	if (project)
		return (
			<article className={styles["project-page"]}>
				<div className="padding-global">
					<header className={styles["project-page__header"]}>
						<div className={styles["project-page__header__image-container"]}>
							<Image
								src={project.image.src}
								width={project.image.width}
								height={project.image.height}
								alt={project.image.alt}
								placeholder="blur"
							/>
						</div>
						<a href={project.preview}>See the Site</a>
					</header>
					<div className="padding-global --section-small">
						<div className="container">
							<div className="project-page__details">
								<h1 className="heading-style-1">{project.title}</h1>
								<p>{project.details?.brief}</p>
								<p>{project.details?.blob}</p>
								<p>{project.details?.client}</p>
								{project.details?.type.map((type, index) => (
									<p key={`type-${index}`}>{type}</p>
								))}
								{project.details?.industries.map((industry, index) => (
									<p key={`industry-${index}`}>{industry}</p>
								))}
								{project.details?.roles.map((role, index) => (
									<p key={`role-${index}`}>{role}</p>
								))}
								{project.details?.collaboration.map((collaborator, index) => (
									<p key={`collaborator-${index}`}>{collaborator}</p>
								))}
								<p>{project.details?.year}</p>
								<p>{project.challenge}</p>
								<p>{project.preview}</p>
								<p>{project.categories}</p>
								{project.categories.map((category, index) => (
									<p key={`category-${index}`}>{category}</p>
								))}
								{project.gallery.map((image, index) => (
									<Image
										key={`gallery-${index}`}
										src={image.src}
										width={image.width}
										height={image.height}
										alt={image.alt || `Project gallery image ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</article>
		);
};

export default ProjectPage;
