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
