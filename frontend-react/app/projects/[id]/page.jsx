import React from "react";

async function getProjects(projectId) {
	const res = await fetch(`http://localhost:3000/api/projects/${projectId}`);
	return res.json();
}

// export async function generateMetadata({params})  {

// }

export async function generateMetadata({ params, searchParams }) {
	// read route params
	const id = params.id;

	// fetch data
	const project = await getProjects(id);

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = project.images.src

	return {
		title: project.title,
    description: project.details
	};
}

const ProjectPage = async ({ params }) => {
	const project = await getProjects(params.id);
	return (
		<section>
			<h1>{params.id}</h1>
			<h1>{project.title}</h1>
      <p>{project.details}</p>
		</section>
	);
};

export default ProjectPage;
