import { PROJECTS_ITEMS } from "@/constants";

import { NextResponse } from "next/server";

const ORDER_OPTIONS = {
	asc: "asc",
	desc: "desc",
	default: "asc",
};

export async function GET(request, context) {
	const { searchParams } = new URL(request.url);
	let projectsData = [];

	const id = searchParams.get("id");
	const limit = searchParams.get("limit");
	const order = searchParams.get("order");

	function getProjectById(id) {
		const PROJECTS_ITEMS_MAP_BY_YEAR = new Map(
			PROJECTS_ITEMS.map((item) => [item.id, item])
		);
		return PROJECTS_ITEMS_MAP_BY_YEAR.get(id);
	}

	function getLimitedProjects(limit) {
		const limitedProjects = PROJECTS_ITEMS.slice(0, limit);
		return limitedProjects;
	}

	function getSortedProjects(order) {
		const sortOrder = order === ORDER_OPTIONS.desc ? -1 : 1;
		const sortedProjects = PROJECTS_ITEMS.sort((a, b) => {
			const yearA = parseInt(a.details.year);
			const yearB = parseInt(b.details.year);

			return sortOrder * (yearA - yearB);
		});

		return sortedProjects;
	}

    projectsData = PROJECTS_ITEMS;
    
	id && (projectsData = getProjectById(id));
	limit && (projectsData = getLimitedProjects(limit));
	order && (projectsData = getSortedProjects(order));

	return NextResponse.json(projectsData);
}
