import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages";
import { METADATA, SITE_URL } from "../seo.config";

const title = "Selected Web Design & Development Projects";
const description =
  "Selected web design and development projects by Jordi Paradelo, covering Webflow, React, and Next.js sites built for clients.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: new URL("/projects", SITE_URL).toString(),
  },
  openGraph: {
    ...METADATA.openGraph,
    title,
    description,
    url: new URL("/projects", SITE_URL).toString(),
  },
};

const Projects = () => {
  return <ProjectsPage />;
};

export default Projects;
