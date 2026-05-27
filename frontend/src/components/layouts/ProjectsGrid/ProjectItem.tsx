"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { formatStrapiMediaUrl } from "@/lib/db";
import type { Project } from "@/lib/db/types";
import { useCardAnimation } from "./animations";
import styles from "./styles.module.css";

const ProjectItem = ({ project }: { project: Project }) => {
	const componentRef = useRef<HTMLElement | null>(null);
	const { title, image, details } = project;
	const imageSrc = formatStrapiMediaUrl(image.url);

	useCardAnimation(componentRef);

	return (
		<li className={styles["projects-list__item"]}>
			<figure className={styles["project-card"]} ref={componentRef}>
				<Link
					href={`/projects/${project.nameID}`}
					target="_blank"
					rel="noopener noreferrer"
					className={styles["project-card_cover"]}
					data-target="cover"
				>
					<Image
						src={imageSrc}
						alt={title}
						width={image.width}
						height={image.height}
						className={styles["project-card_cover_image"]}
						data-target="image"
					/>
					<div className={styles["mouse-cursor"]} data-target="mouse-cursor">
						<span>Preview Project</span>
					</div>
				</Link>
				<div
					className={styles["project-card_description"]}
					data-target="description"
				>
					<div className={styles["project-card_header"]}>
						<div className={styles["project-card_header_headline"]}>
							<h3 className="heading-style-h4">{title}</h3>
							<div className={styles["project-card_details_list"]}>
								{details?.industries?.slice(0, 1).map((industry) => (
									<span key={industry?.label}> {industry?.label}</span>
								))}
							</div>
							<a
								href={details?.preview}
								target="_blank"
								rel="noopener noreferrer"
								className={styles["project-card_preview-link"]}
							>
								Visit Site
							</a>
						</div>
						<div className={styles["project-card_details_block"]}>
							<h4 className={styles["project-card_details_title"]}>Year</h4>
							<span> {details?.year}</span>
						</div>
					</div>
				</div>
			</figure>
		</li>
	);
};

export default ProjectItem;
