"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
// Hooks
import useFetchProjects from "@/hooks/useFetchProjects";
// Styles
import "./styles.scss";
import { Button } from "..";

const ProjectModal = () => {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

	const project = useFetchProjects(id);

	return (
		project && (
			<article className='project-detail'>
				<header className='project-detail__header'>
					<div className='container'>
						<h2 className='project-detail__title'>{project?.title}</h2>
						<p className='project-detail__details'>{project?.details}</p>
						<Button href={project?.preview}>
							Live view
						</Button>
					</div>
				</header>
				<div className='container'>
					<div className='project-detail__wrapper'>
						<div className='project-detail__image'>
							<Image
								src={project?.image?.src}
								alt={project?.image?.alt}
								width={project?.image?.width}
								height={project?.image?.height}
								priority={true}
							/>
						</div>

						<div className='project-detail__content-wrapper'>
							<div className='project-detail__content'>
								<h2>Overview</h2>
								<p className='project-detail__description'>
									let me introduce you to Segment - the ultimate Framer template
									that will take your online presence to the next level of
									awesomeness! Whether you are a seasoned designer with years of
									experience or just starting out on your design journey,
									Segment is the perfect foundation you need to create a
									stunning portfolio website with ease. With its sleek and
									versatile design, Segment offers you endless possibilities to
									showcase your creativity and skills to the world. And the best
									part? You don't need to be a tech genius to make it happen!
									This template is so user-friendly that even your grandma could
									create a website with it (well, maybe not your grandma, but
									you get the point). So, if you're ready to wow your audience
									with a website that is both visually stunning and easy to use,
									Segment is the way to go. Trust us, your competitors will be
									green with envy when they see the masterpiece you've created
									with this template.
								</p>
							</div>
							<aside className='project-detail__aside'>
								<div className="project-detail__aside__block">
								<h4>Responsibilities</h4>
								</div>
								<div className="project-detail__aside__block">
								<h4>Technology</h4>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</article>
		)
	);
};

export default ProjectModal;
