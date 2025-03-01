// Next.js
import React from "react";
import type { Project } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../styles.module.scss";

// Assets
import LinkIcon from "@/assets/icons/LinkIcon";

interface ProjectItemProps {
	project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
	return (
		<article
			className={styles["project"]}
			key={project.title}
		>
			<div className={styles["project__header"]}>
				<h3 className="heading-style-4">{project.title}</h3>

				<ul className={styles["project__categories"]}>
					{project.categories?.map((category) => (
						<li
							className={styles["project__category"]}
							key={category}
						>
							<span>{category}</span>
						</li>
					))}
				</ul>

				<a
					href={project.preview}
					target='_blank'
					rel='noopener noreferrer'
					className={styles["project__live-link"]}
				>
					<span className={styles["project__live-link__label"]}>Live Site</span>
					<LinkIcon className={styles["project__live-link__icon"]}/>
				</a>
			</div>
			<Link
				href={`/projects/${project.id}`}
				scroll={false}
				className={styles["project__image-link"]}
				rel='preload'
				aria-label="Go to live site"
			>
				<div className={styles["project__image"]}>
					<Image
						unoptimized
						width={800}
						height={600}
						src={project.image.src}
						alt={project.image.alt}
						priority
						quality={100}
						placeholder="blur"
					/>
				</div>
			</Link>
		</article>
	);
};

export default ProjectItem;
