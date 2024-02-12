"use client";
import React from "react";
import useFetchProjects from "@/hooks/useFetchProjects";

const ProjectDetail = ({ id }: { id: string }) => {
	const project = useFetchProjects(id);

	return (
		project && (
			<section className='product-detail'>
				<h2 className='product-detail__title'>{project?.title}</h2>
				<p className='product-detail__description'>{project?.details}</p>
			</section>
		)
	);
};

export default ProjectDetail;
