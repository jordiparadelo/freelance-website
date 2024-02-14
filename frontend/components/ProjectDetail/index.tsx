"use client";
import React, { Suspense } from "react";
import useFetchProjects from "@/hooks/useFetchProjects";
import Image from "next/image";
import "./styles.scss";

const ProjectDetail = ({ id }: { id: string }) => {
	const project: ProjectsType | any = useFetchProjects(id);

	return (
		project && (
			<article className='project-detail'>
				<header className='project-detail__header'>
					<div className='container'>
						<h2 className='project-detail__title'>{project?.title}</h2>
						<p className='project-detail__details'>{project?.details}</p>
					</div>
				</header>
				<div className='container'>
					<div className='project-detail__wrapper'>
						<div className='project-detail__image'>
							<Image
								src={project?.image.src}
								alt={project?.image.alt}
							/>
						</div>

						<div className='project-detail__content'>
							<p className='project-detail__description'>
								let me introduce you to Segment - the ultimate Framer template
								that will take your online presence to the next level of
								awesomeness! Whether you are a seasoned designer with years of
								experience or just starting out on your design journey, Segment
								is the perfect foundation you need to create a stunning
								portfolio website with ease. With its sleek and versatile
								design, Segment offers you endless possibilities to showcase
								your creativity and skills to the world. And the best part? You
								don't need to be a tech genius to make it happen! This template
								is so user-friendly that even your grandma could create a
								website with it (well, maybe not your grandma, but you get the
								point). So, if you're ready to wow your audience with a website
								that is both visually stunning and easy to use, Segment is the
								way to go. Trust us, your competitors will be green with envy
								when they see the masterpiece you've created with this template.
							</p>
							<aside className='project-detail__aside'>
								<h4>Likes {project?.likes}</h4>
							</aside>
						</div>
					</div>
				</div>
			</article>
		)
	);
};
 
export default ProjectDetail;
