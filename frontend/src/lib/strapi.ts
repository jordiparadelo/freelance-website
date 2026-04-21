// TODO: use env url
const BASE_URL = "http://localhost:1337/api/";

export async function getStrapiData(url: string) {
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
