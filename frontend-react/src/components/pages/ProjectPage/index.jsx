import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const ProjectPage = ({ project }) => {
	return (
		<article className={styles["project-page"]}>
			<div className='padding-global'>
				<header className={styles["project-page__header"]}>
					<div className={styles["project-page__header__image-container"]}>
						<Image
							src={project.image.src}
							width={project.image.width}
							height={project.image.height}
							alg={project.image.alt}
						/>
					</div>
					<a href={project.preview}>See the Site</a>
				</header>
				<div className='padding-global --section-small'>
					<div className='container'>
						<div className='project-page__details'>
							<h1 className='heading-style-1'>{project.title}</h1>
							<p> {project.details?.brief}</p>
							<p> {project.details?.blob}</p>
							<p> {project.details?.client}</p>
							{project.details?.type.map((type) => (
								<p>{type}</p>
							))}
							{project.details?.industries.map((industry) => (
								<p>{industry}</p>
							))}
							{project.details?.roles.map((role) => (
								<p>{role}</p>
							))}
							{project.details?.collaboration.map((collaborator) => (
								<p>{collaborator}</p>
							))}
							<p> {project.details?.year}</p>
							<p> {project.challenge}</p>
							<p> {project.preview}</p>
							<p> {project.categories}</p>
							{project.categories.map((category) => (
								<p>{category}</p>
							))}
							{project.gallery.map((image) => (
								<Image
									src={image.src}
									width={image.width}
									height={image.height}
									alg={image.alt}
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
