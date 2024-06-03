"use client";

import { Button, CloseModalButton, ProjectDetailsList } from "@/ui";
import { splitArray } from "@/utils";

import { Suspense, useLayoutEffect, useMemo, useState } from "react";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
// Lib
import { getProjectById } from "@/lib/actions";
// Styles
import "./styles.scss";

const ProjectModal = () => {
	const [project, setProject] = useState(null);
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	useLayoutEffect(() => {
		const fetchData = async () => {
			const data = await getProjectById(id);
			return data;
		};

		fetchData().then((data) => {
			setProject(...data);
		});
	}, [id]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<article className='project-detail'>
				<div className='container'>
					<div className='project__header'>
						<div className='project__heading-wrapper'>
							<h3 className='project__title'>{project?.title}</h3>
						</div>
						<div className='action_wrapper'>
							<Button
								href={project?.preview}
								target='_blank'
							>
								Live view
							</Button>
							<CloseModalButton>Close</CloseModalButton>
						</div>
					</div>
					<div className='project-detail__wrapper'>
						<div className='project-detail__content-wrapper'>
							<div className='project-detail__content'>
								<p className='project-detail__description'>
									{project?.details?.blob}
								</p>
							</div>

							<aside className='project-detail__aside'>
								<div className='project-detail__aside__block'>
									<h4>Challenge</h4>
									<p>{project?.challenge}</p>
								</div>
								<div className='project-detail__aside__block'>
									<h4>Services</h4>
									<ul className='project__categories'>
										{project?.services?.map((service) => (
											<li
												className='project__category'
												key={service}
											>
												{service}
											</li>
										))}
									</ul>
								</div>
							</aside>
						</div>

						<div className='project-detail__image'>
							<Image
							unoptimized
								src={project?.image?.src}
								alt={project?.image?.alt}
								width={project?.image?.width}
								height={project?.image?.height}
								priority={true}
							/>
						</div>

						<ProjectDetailsList details={project?.details} />

						{project?.gallery && <ProjectGallery gallery={project?.gallery} />}
					</div>
				</div>
			</article>
		</Suspense>
	);
};

export default ProjectModal;

export const ProjectGallery = ({ gallery, numOfColumns = 2 }) => {
	// Memoize the splitArray function result to avoid unnecessary recalculations
	const galleryByColumns = useMemo(
		() => splitArray(gallery, numOfColumns),
		[gallery, numOfColumns]
	);

	return (
		<div
			className='project-detail__gallery'
			style={{ "--columns": numOfColumns }}
		>
			{galleryByColumns?.map(
				(
					galleryColumn,
					columnIndex // Added columnIndex to map function
				) => (
					<ul
						key={columnIndex}
						className='project-detail__gallery-column'
					>
						{" "}
						{/* Changed li to ul for better semantics */}
						{galleryColumn.map((galleryItem, index) => (
							<li
								key={index}
								className='project-detail__gallery-item'
							>
								<Image
								unoptimized
									src={galleryItem?.src}
									alt={galleryItem?.alt}
									width={galleryItem?.width}
									height={galleryItem?.height}
								/>
							</li>
						))}
					</ul>
				)
			)}
		</div>
	);
};
