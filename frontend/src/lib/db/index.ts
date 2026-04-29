import type { BusinessInfo, Project } from "./types";

function getDataUrl() {
	return process.env.STRAPI_BASE_URL || "http://localhost:1337";
}

// GET: STRAPI DATA
type StrapiFetchOptions = {
	tags?: string[];
	revalidate?: number;
};

export async function getStrapiData(url: string, options?: StrapiFetchOptions) {
	const BASE_URL = getDataUrl();

	const response = await fetch(`${BASE_URL}${url}`, {
		next: {
			revalidate: options?.revalidate ?? 86400, // long cache, webhook refreshes earlier
			tags: options?.tags ?? [],
		},
	});

	if (!response.ok) {
		throw new Error(`Network response was not ok: ${response.statusText}`);
	}

	return response.json();
}

export function formatStrapiMediaUrl(imageUrl?: string | null): string {
	if (!imageUrl) return "";
	// Already absolute URL (CDN/external)
	if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
		return imageUrl;
	}
	const baseUrl =
		process.env.NEXT_PUBLIC_STRAPI_BASE_URL ??
		process.env.STRAPI_BASE_URL ??
		"http://localhost:1337";
	const normalizedPath = imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;
	return `${baseUrl}${normalizedPath}`;
}

// GET: SOCIAL LINKS
type FilterName = "equal" | "notEqual" | "inList";
type StrapiFilterOperator = "$eq" | "$ne" | "$in";

const FILTER_OPERATOR_MAP: Record<FilterName, StrapiFilterOperator> = {
	equal: "$eq",
	notEqual: "$ne",
	inList: "$in",
};

type SocialLinksFilter = {
	operator: FilterName;
	value: string | string[];
	field?: "displayName" | "href" | "type";
};

type GetSocialLinksParams = {
	filter?: SocialLinksFilter; // optional
};

export interface SocialLink {
	displayName: string;
	href: string;
	type: string;
}

export async function getSocialLinks({ filter }: GetSocialLinksParams = {}) {
	const params = new URLSearchParams();
	params.append("[fields][0]", "displayName");
	params.append("[fields][1]", "href");
	params.append("fields[2]", "type");
	// Status published
	params.append("status", "published");

	// Only add filter params if filter is provided
	if (filter) {
		const { operator, value, field = "displayName" } = filter;
		const strapiOperator = FILTER_OPERATOR_MAP[operator];

		if (strapiOperator === "$in") {
			const values = Array.isArray(value) ? value : [value];
			values.forEach((item, index) => {
				params.append(`filters[${field}][${strapiOperator}][${index}]`, item);
			});
		} else {
			const singleValue = Array.isArray(value) ? (value[0] ?? "") : value;
			params.append(`filters[${field}][${strapiOperator}]`, singleValue);
		}
	}

	const query = `/api/social-links?${params.toString()}`;
	const { data: links } = await getStrapiData(query, {
		tags: ["social-links"],
	});
	return links as SocialLink[];
}

// GET: BUSINESS DATA
export async function getBusinessInfo() {
	const params = new URLSearchParams();

	// Fields and populates
	params.append("fields[0]", "legalName");
	params.append("fields[1]", "country");
	params.append("fields[2]", "city");
	params.append("fields[3]", "timezone");
	params.append("fields[4]", "isAvailable");

	// Status published
	params.append("status", "published");

	params.append("populate[social_links][fields][0]", "displayName");
	params.append("populate[social_links][fields][1]", "nameID");
	params.append("populate[social_links][fields][2]", "href");
	params.append("populate[social_links][fields][3]", "type");

	params.append("populate[avatar][fields][0]", "url");
	params.append("populate[avatar][fields][1]", "width");
	params.append("populate[avatar][fields][2]", "height");
	params.append("populate[avatar][fields][3]", "alternativeText");

	params.append("populate[cv][fields][0]", "url");
	params.append("populate[cv][fields][1]", "alternativeText");

	const query = `/api/business-info?${params.toString()}`;

	const { data: businessInfo } = await getStrapiData(query, {
		tags: ["business-info"],
	});
	return businessInfo as BusinessInfo;
}
// GET: PROJECTS
export async function getProjects(options?: {
	limit?: number;
	sortOrder?: "asc" | "desc";
}) {
	const { limit, sortOrder = "desc" } = options || {};
	const params = new URLSearchParams();

	// Sort by year (default desc)
	params.append("sort[0]", `details.year:${sortOrder}`);

	// Fields and populates
	params.append("fields[0]", "nameID");
	params.append("fields[1]", "title");
	params.append("fields[2]", "challenge");

	// Status published
	params.append("status", "published");

	params.append("populate[image][fields][0]", "alternativeText");
	params.append("populate[image][fields][1]", "width");
	params.append("populate[image][fields][2]", "height");
	params.append("populate[image][fields][3]", "url");

	params.append("populate[details][fields][0]", "brief");
	params.append("populate[details][fields][1]", "blob");
	params.append("populate[details][fields][2]", "client");
	params.append("populate[details][fields][3]", "year");
	params.append("populate[details][fields][4]", "preview");
	params.append("populate[details][populate][type][fields][0]", "label");
	params.append("populate[details][populate][industries][fields][0]", "label");
	params.append(
		"populate[details][populate][collaboration][fields][0]",
		"label",
	);
	params.append("populate[details][populate][roles][fields][0]", "label");

	// Apply result limit if provided
	if (limit !== undefined) {
		params.append("pagination[page]", "1");
		params.append("pagination[pageSize]", limit.toString());
	}

	const query = `/api/projects?${params.toString()}`;

	const { data: projects } = await getStrapiData(query, {
		tags: ["projects"],
	});
	return projects as Project[];
}

export async function getProjectByNameID(nameID: string) {
	const params = new URLSearchParams();

	params.append("filters[nameID][$eq]", nameID);
	params.append("fields[0]", "nameID");
	params.append("fields[1]", "title");
	params.append("fields[2]", "challenge");
	params.append("status", "published");

	params.append("populate[image][fields][0]", "alternativeText");
	params.append("populate[image][fields][1]", "width");
	params.append("populate[image][fields][2]", "height");
	params.append("populate[image][fields][3]", "url");

	params.append("populate[gallery][fields][0]", "alternativeText");
	params.append("populate[gallery][fields][1]", "width");
	params.append("populate[gallery][fields][2]", "height");
	params.append("populate[gallery][fields][3]", "url");

	params.append("populate[details][fields][0]", "brief");
	params.append("populate[details][fields][1]", "blob");
	params.append("populate[details][fields][2]", "client");
	params.append("populate[details][fields][3]", "year");
	params.append("populate[details][fields][4]", "preview");
	params.append("populate[details][populate][type][fields][0]", "label");
	params.append("populate[details][populate][industries][fields][0]", "label");
	params.append(
		"populate[details][populate][collaboration][fields][0]",
		"label",
	);
	params.append("populate[details][populate][roles][fields][0]", "label");

	params.append("pagination[page]", "1");
	params.append("pagination[pageSize]", "1");

	const query = `/api/projects?${params.toString()}`;
	const { data } = await getStrapiData(query, {
		tags: ["projects"],
	});
	const project = data[0];
	return project as Project;
}

// GET: HERO SECTION
export async function getHeroData() {
	const query =
		"/api/hero-section?fields[0]=subtitle&fields[1]=title&fields[2]=description&fields[3]=cta_text&populate[fields][0]=id&populate[social_link][fields][0]=href&status=published&locale[0]=en";
	const { data } = await getStrapiData(query, {
		tags: ["hero-section"],
	});

	return data;
}

// GET: GALLERY IMAGES
export async function getGalleryImages() {
	const query =
		"/api/gallery-section?fields[0]=id&populate[images][populate][src][fields][0]=url&populate[images][populate][src][fields][1]=width&populate[images][populate][src][fields][2]=height&populate[images][populate][src][fields][3]=alternativeText&status=published";
	const {
		data: { images },
	} = await getStrapiData(query, {
		tags: ["gallery-section"],
	});

	return images;
}
