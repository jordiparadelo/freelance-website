import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/lib/types";

const useFetchProjects = (id?: string) => {
  const [projects, setProject] = useState<Project | Project[] | null>(null);
  const URL_PROJECTS = id
    ? `${window.location.href}api/projects?id=${id}`
    : `${window.location.href}api/projects`;

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(URL_PROJECTS);
      const data = await res.json();
      setProject(data);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error instanceof Error ? error.message : error,
      );
    }
  }, [URL_PROJECTS]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return projects;
};

export default useFetchProjects;
