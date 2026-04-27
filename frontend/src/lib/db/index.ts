function getDataUrl() {
	return process.env.STRAPI_BASE_URL || "http://localhost:1337";
}

export async function getStrapiData(url: string) {
	const BASE_URL = getDataUrl();
	try {
		const response = await fetch(`${BASE_URL}${url}`);
		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`);
		}
		return await response.json();
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
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
	const { data: links } = await getStrapiData(query);
	return links as SocialLink[];
}
