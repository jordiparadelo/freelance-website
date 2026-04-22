// TODO: use env url
// const BASE_URL = getDataUrl();

function getDataUrl() {
	return process.env.STRAPI_BASE_URL;
	// return process.env.STRAPI_BASE_URL || "http://localhost:1337";
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

// import "server-only";

// const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL;
// const isProduction = process.env.NODE_ENV === "production";

// function getStrapiBaseUrl() {

// 	if (!STRAPI_BASE_URL) {
// 		if (isProduction) {
// 			throw new Error("Missing STRAPI_BASE_URL in production");
// 		}
// 		return "http://localhost:1337";
// 	}

// 	return STRAPI_BASE_URL;
// }

// export async function getStrapiData<T>(path: string): Promise<T> {
// 	const baseUrl = getStrapiBaseUrl();
// 	const response = await fetch(`${baseUrl}${path}`, {
// 		// optional: Next cache controls
// 		// next: { revalidate: 60 },
// 	});

// 	if (!response.ok) {
// 		throw new Error(
// 			`Strapi request failed: ${response.status} ${response.statusText}`,
// 		);
// 	}

// 	return (await response.json()) as T;
// }
