"use client";

import { Button, CloseModalButton } from "@/components/ui";
import ProjectDetailsList from "./ProjectDetailsList";
import ProjectGallery from "./ProjectGallery";

import { useLayoutEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
// Lib
import { getProjectById, type Project } from "@/lib/actions";
// Styles
import styles from "./styles.module.scss";

const ProjectModal = () => {
	const [project, setProject] = useState<Project | null>(null);
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	useLayoutEffect(() => {
		if (!id) return;

		const fetchData = async () => {
			const data = await getProjectById(id);
			if (data) {
				setProject(data);
			}
		};

		fetchData();
	}, [id]);

	if (!project) {
		return <div className={styles["project-detail"]}>Loading...</div>;
	}

	return (
		<article className={styles["project-detail"]}>
			<div className='container'>
				<div className={styles["project__header"]}>
					<div className={styles["project__heading-wrapper"]}>
						<h3 className={styles["project__title"]}>{project.title}</h3>
					</div>
					<div className='action_wrapper'>
						<Button
							href={project.preview}
							className={styles["project__link"]}
						>
							Live view
						</Button>

						<CloseModalButton>Close</CloseModalButton>
					</div>
				</div>
				<div className={styles["project-detail__wrapper"]}>
					<div className={styles["project-detail__content-wrapper"]}>
						<div className={styles["project-detail__content"]}>
							<p className={styles["project-detail__description"]}>
								{project.details.blob}
							</p>
						</div>

						<aside className={styles["project-detail__aside"]}>
							<div className={styles["project-detail__aside__block"]}>
								<h4 className={styles["project-detail__aside__block-title"]}>
									Challenge
								</h4>
								<p>{project.challenge}</p>
							</div>
							<div className={styles["project-detail__aside__block"]}>
								<h4 className={styles["project-detail__aside__block-title"]}>
									Services
								</h4>
								<ul className={styles["project__categories"]}>
									{project.services.map((service: string) => (
										<li
											className={styles["project__category"]}
											key={service}
										>
											{service}
										</li>
									))}
								</ul>
							</div>
						</aside>
					</div>

					<div className={styles["project-detail__image"]}>
						<Image
							unoptimized
							src={project.image.src}
							alt={project.image.alt}
							width={project.image.width}
							height={project.image.height}
							priority={true}
						/>
					</div>

					<ProjectDetailsList details={project.details} />

					{project.gallery && <ProjectGallery gallery={project.gallery} />}
				</div>
			</div>
		</article>
	);
};

export default ProjectModal;
