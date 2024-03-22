import { useState, useEffect } from "react";

const useFetchProjects = (id) => {
	const [projects, setProject] = useState(null);
	const URL_PROJECTS = id
		? `${window.location.href}api/projects?id=${id}`
		: `${window.location.href}api/projects`;

	const fetchData = async () => {
		try {
			const res = await fetch(URL_PROJECTS);
			const data = await res.json();
			setProject(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [id]);

	return projects;
};

export default useFetchProjects;
