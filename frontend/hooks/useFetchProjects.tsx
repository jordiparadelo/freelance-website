import { useState, useEffect } from "react";

const useFetchProjects = (id: string) => {
  const [project, setProject] = useState(null);
  const URL_PROJECTS = `http://localhost:3000/api/projects`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(URL_PROJECTS);
        const data = await res.json();
        const selectedProject = data.find((project: ProjectsType) => project.id === id);
        setProject(selectedProject);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return project;
};

export default useFetchProjects;