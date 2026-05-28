"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { formatStrapiMediaUrl } from "@/lib/db";
import type { Project } from "@/lib/db/types";
import styles from "./styles.module.css";

const ProjectItem = ({ project }: { project: Project }) => {
	const { title, image, details } = project;
	const imageSrc = formatStrapiMediaUrl(image.url);

	function handlePreviewClick() {
		posthog.capture("project_preview_clicked", {
			project_title: title,
			project_url: details.preview,
			year: details?.year,
		});
	}

	return (
		<li className={styles["projects-list__item"]} key={project.id}>
			<figure className={styles["project-card"]}>
				<Link
					href={`										/projects/${project.nameID}`}
					target="_blank"
					rel="noopener noreferrer"
					className={styles["project-card_cover"]}
					onClick={handlePreviewClick}
				>
					<Image
						src={imageSrc}
						alt={title}
						width={image.width}
						height={image.height}
						className={styles["project-card_cover_image"]}
					/>
				</Link>
				<div className={styles["project-card_description"]}>
					<div className={styles["project-card_header"]}>
						<div className={styles["project-card_header_headline"]}>
							<h3 className="heading-style-h4">{title}</h3>
							<p
								className={
									`text-size-small text-color-gray` +
									styles["project-card_header_brief"]
								}
							>
								{details?.brief}
							</p>
							<a
								href={details?.preview}
								target="_blank"
								rel="noopener noreferrer"
								className={styles["project-card_preview-link"]}
								onClick={handlePreviewClick}
							>
								Visit Site
							</a>
						</div>
						<div className={styles["project-card_details_block"]}>
							<h4 className={styles["project-card_details_title"]}>Year</h4>
							<span> {details?.year}</span>
						</div>
					</div>
					<div className={styles["project-card_details"]}>
						<div className={styles["project-card_details_block"]}>
							<h4 className={styles["project-card_details_title"]}>
								Industries
							</h4>
							<div className={styles["project-card_details_list"]}>
								{details?.industries?.map((industry) => (
									<span key={industry?.label}> {industry?.label}</span>
								))}
							</div>
						</div>
						<div className={styles["project-card_details_block"]}>
							<h4 className={styles["project-card_details_title"]}>Type</h4>
							<div className={styles["project-card_details_list"]}>
								{details?.type?.map((type) => (
									<span key={type.label}> {type.label}</span>
								))}
							</div>
						</div>
						<div className={styles["project-card_details_block"]}>
							<h4 className={styles["project-card_details_title"]}>Roles</h4>
							<div className={styles["project-card_details_list"]}>
								{details?.roles?.map((rol) => (
									<span key={rol.label}> {rol.label}</span>
								))}
							</div>
						</div>
						{details?.collaboration?.length && (
							<div className={styles["project-card_details_block"]}>
								<h4 className={styles["project-card_details_title"]}>
									Collaborators
								</h4>
								<div className={styles["project-card_details_list"]}>
									{details?.collaboration?.map((collaborator) => (
										<span key={collaborator.label}> {collaborator.label}</span>
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
