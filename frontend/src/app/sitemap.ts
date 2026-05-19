import { ROUTES } from "@/lib/constants";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.BASE_URL;

	// Define your static routes
	const routes = ROUTES.map((route) => route.url);

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: route === "/" ? 1 : 0.8,
	}));
}
