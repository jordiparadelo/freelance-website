import type {
	BusinessInfo,
	Project,
	SocialLink,
	StrapiFetchConfig,
	StrapiQueryOptions,
	StrapiResponse,
} from "./types";

function getDataUrl() {
	return process.env.STRAPI_BASE_URL || "http://localhost:1337";
}

// Main Fetch function
export async function getStrapiData<T>(
	url: string,
	params?: { options?: StrapiQueryOptions; config?: StrapiFetchConfig },
): Promise<T> {
	const baseUrl = getDataUrl();
	const query = buildStrapiQuery(params?.options);
	const finalUrl = query ? `${baseUrl}${url}&${query}` : `${baseUrl}${url}`;
	const response = await fetch(finalUrl, {
		next: {
			revalidate: params?.config?.revalidate ?? 86400,
			tags: params?.config?.tags ?? [],
		},
	});
	if (!response.ok) {
		throw new Error(
			`Network response was not ok: ${response.status} ${response.statusText} ${response.url}`,
		);
	}
	const payload = (await response.json()) as StrapiResponse<T>;
	return payload.data;
}

// Utility functions
function buildStrapiQuery(options?: StrapiQueryOptions): string {
	if (!options) return "";

	const params = new URLSearchParams();

	options.filters?.forEach((filter) => {
		if (filter.operator === "$in") {
			const values = Array.isArray(filter.value)
				? filter.value
				: [filter.value];
			values.forEach((v, i) => {
				params.append(`filters[${filter.field}][$in][${i}]`, String(v));
			});
			return;
		}

		const value = Array.isArray(filter.value) ? filter.value[0] : filter.value;
		if (value !== undefined) {
			params.append(
				`filters[${filter.field}][${filter.operator}]`,
				String(value),
			);
		}
	});

	options.sort?.forEach((s, i) => {
		params.append(`sort[${i}]`, `${s.field}:${s.order ?? "desc"}`);
	});

	if (options.pagination) {
		options.pagination.page &&
			params.append("pagination[page]", String(options.pagination.page));
		options.pagination.pageSize &&
			params.append(
				"pagination[pageSize]",
				String(options.pagination.pageSize),
			);
		options.pagination.limit &&
			params.append("pagination[limit]", String(options.pagination.limit));
		options.pagination.start &&
			params.append("pagination[start]", String(options.pagination.start));
	}

	if (options.extraParams) {
		Object.entries(options.extraParams).forEach(([key, value]) => {
			params.append(key, String(value));
		});
	}
	const serializedQuery = params.toString();
	// #region agent log
	fetch("http://127.0.0.1:7646/ingest/10420757-d96e-4bdf-bc87-50b7f563a505", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"X-Debug-Session-Id": "ff43b3",
		},
		body: JSON.stringify({
			sessionId: "ff43b3",
			runId: "pre-fix",
			hypothesisId: "H3",
			location: "frontend/src/lib/db/index.ts:buildStrapiQuery",
			message: "Serialized Strapi query options",
			data: {
				options,
				serializedQuery,
			},
			timestamp: Date.now(),
		}),
	}).catch(() => {});
	// #endregion

	return serializedQuery;
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
export async function getSocialLinks(options: StrapiQueryOptions) {
	const params = new URLSearchParams();
	params.append("[fields][0]", "displayName");
	params.append("[fields][1]", "href");
	params.append("fields[2]", "type");
	// Status published
	params.append("status", "published");

	const query = `/api/social-links?${params.toString()}`;

	const links = options
		? await getStrapiData(query, {
				options,
				config: { tags: ["social-links"] },
			})
		: await getStrapiData(query, { config: { tags: ["social-links"] } });

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

	const businessInfo = await getStrapiData(query, {
		config: { tags: ["business-info"] },
	});
	return businessInfo as BusinessInfo;
}
// GET: PROJECTS
export async function getProjects(options?: StrapiQueryOptions) {
	// const { limit, sortOrder = "desc", filter } = options || {};
	const params = new URLSearchParams();

	// Sort by year (default desc)
	params.append("sort[0]", `details.year:desc`);

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

	const query = `/api/projects?${params.toString()}`;

	const projects = options
		? await getStrapiData(query, {
				options,
				config: { tags: ["projects"] },
			})
		: await getStrapiData(query, { config: { tags: ["projects"] } });

	return projects as Project[];
}
// GET: PROJECT BY ID
export async function getProjectByNameID(nameID: string) {
	const project = await getProjects({
		filters: [
			{
				value: nameID,
				operator: "$eq",
				field: "nameID",
			},
		],
	});
	return project[0] as Project;
}

// GET: HERO SECTION
export async function getHeroData() {
	const query =
		"/api/hero-section?fields[0]=subtitle&fields[1]=title&fields[2]=description&fields[3]=cta_text&populate[fields][0]=id&populate[social_link][fields][0]=href&status=published&locale[0]=en";
	const content = await getStrapiData(query, {
		config: { tags: ["hero-section"] },
	});

	return content;
}

// GET: GALLERY IMAGES
export async function getGalleryImages() {
	const query =
		"/api/gallery-section?fields[0]=id&populate[images][populate][src][fields][0]=url&populate[images][populate][src][fields][1]=width&populate[images][populate][src][fields][2]=height&populate[images][populate][src][fields][3]=alternativeText&status=published";
	const images = await getStrapiData(query, {
		config: { tags: ["gallery-section"] },
	});

	return images;
}
