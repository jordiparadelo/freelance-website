"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useLayoutEffect, useMemo, useState } from "react";
import { Button, CloseModalButton, ProjectDetailsList } from "@/components/ui";
// Lib
import { getProjectById, type Project } from "@/lib/actions";
import type { ProjectGalleryItem } from "@/lib/types";
import { splitArray } from "@/lib/utils";
// Styles
import "./styles.scss";

// Separate interface for ProjectGallery props
interface ProjectGalleryProps {
	gallery: Project["gallery"];
	numOfColumns?: number;
}

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

	if (!id) {
		return <div className="project-detail">Invalid project ID</div>;
	}

	if (!project) {
		return <div className="project-detail">Loading...</div>;
	}

	return (
		<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
			<h2 id="modal-title">{project.title}</h2>
			<div className="container">
				<div className="project__header">
					<div className="project__heading-wrapper">
						<h3 className="project__title">{project.title}</h3>
					</div>
					<div className="action_wrapper">
						{project.preview && (
							<Button href={project.preview} rel="noopener noreferrer">
								Live view
							</Button>
						)}
						<CloseModalButton>Close</CloseModalButton>
					</div>
				</div>
				<div className="project-detail__wrapper">
					<div className="project-detail__content-wrapper">
						<div className="project-detail__content">
							{project.details?.blob && (
								<p className="project-detail__description">
									{project.details.blob}
								</p>
							)}
						</div>

						<aside className="project-detail__aside">
							{project.challenge && (
								<div className="project-detail__aside__block">
									<h4>Challenge</h4>
									<p>{project.challenge}</p>
								</div>
							)}
							{project.services && project.services.length > 0 && (
								<div className="project-detail__aside__block">
									<h4>Services</h4>
									<ul className="project__categories">
										{project.services.map((service) => (
											<li className="project__category" key={service}>
												{service}
											</li>
										))}
									</ul>
								</div>
							)}
						</aside>
					</div>

					{project.image && (
						<div className="project-detail__image">
							<Image
								unoptimized
								src={project.image.src}
								alt={project.image.alt}
								width={project.image.width}
								height={project.image.height}
								priority={true}
							/>
						</div>
					)}

					{project.details && <ProjectDetailsList details={project.details} />}

					{project.gallery && <ProjectGallery gallery={project.gallery} />}
				</div>
			</div>
		</div>
	);
};

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
	gallery,
	numOfColumns = 2,
}) => {
	const galleryByColumns = useMemo(
		() => splitArray(gallery, numOfColumns),
		[gallery, numOfColumns],
	);

	if (!gallery || gallery.length === 0) return null;

	return (
		<div
			className="project-detail__gallery"
			style={{ "--columns": numOfColumns } as React.CSSProperties}
		>
			{galleryByColumns?.map((galleryColumn, columnIndex) => (
				<ul key={columnIndex} className="project-detail__gallery-column">
					{galleryColumn.map(
						(galleryItem: ProjectGalleryItem, index: number) => (
							<li
								key={`${columnIndex}-${index}`}
								className="project-detail__gallery-item"
							>
								<Image
									unoptimized
									src={galleryItem.src}
									alt={galleryItem.alt}
									width={galleryItem.width}
									height={galleryItem.height}
								/>
							</li>
						),
					)}
				</ul>
			))}
		</div>
	);
};

export default ProjectModal;
