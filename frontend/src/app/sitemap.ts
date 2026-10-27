import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/db";
import { SITE_URL } from "./seo.config";

const staticRoutes = ["/", "/projects", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const projects = await getProjects();
  const routes = [
    ...staticRoutes,
    ...projects
      .map((project) => project.nameID)
      .filter((nameID): nameID is string => Boolean(nameID))
      .map((nameID) => `/projects/${nameID}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified,
  }));
}
