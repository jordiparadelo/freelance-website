import { useState, useEffect } from "react";

const useFetchProjects = (id) => {
	const [project, setProject] = useState(null);
	const URL_PROJECTS = `http://localhost:3000/api/projects/${id}`;

	const fetchData = async () => {
		try {
			const res = await fetch(URL_PROJECTS);
			const project = await res.json();
			// const selectedProject = data.find((project) => project.id === id);
			setProject({ ...project });
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		if (!id) return;

		fetchData();
	}, [id]);

	return project;
};

export default useFetchProjects;
