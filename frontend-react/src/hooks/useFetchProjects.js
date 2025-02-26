import { useState, useEffect, useCallback } from "react";

const useFetchProjects = (id) => {
	const [projects, setProject] = useState(null);
	const URL_PROJECTS = id
		? `${window.location.href}api/projects?id=${id}`
		: `${window.location.href}api/projects`;

	const fetchData = useCallback(async () => {
		try {
			const res = await fetch(URL_PROJECTS);
			const data = await res.json();
			setProject(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}, [URL_PROJECTS]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return projects;
};

export default useFetchProjects;
