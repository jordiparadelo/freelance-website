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

	id && (projectsData = getProjectById(id));
	limit && (projectsData = getLimitedProjects(limit));
	order && (projectsData = getSortedProjects(order));

	// const projects = await res.json(projectsData);

	return NextResponse.json(projectsData);
}

// export async function GET(request, context) {
//   const { params } = context
//   const { id, limit, orderBy } = params

//   let data = PROJECTS_ITEMS

//   const PARAMS_HANDLERS = {
//     id: (id) => {
//       const item = PROJECTS_ITEMS.get(id)
//       data = item ? [item] : []
//     },
//     limit: (limit) => {
//       const limitNumber = parseInt(limit, 10)
//       if (!isNaN(limitNumber) && limitNumber > 0) {
//         data = Array.from(PROJECTS_ITEMS).slice(0, limitNumber).map(item => item[1])
//       }
//     },
//     orderBy: (order) => {
//       const sortOrder = order === 'dec' ? -1 : 1;
//       data = Array.from(PROJECTS_ITEMS)
//         .sort((a, b) => (a[1].year - b[1].year) * sortOrder)
//         .map(item => item[1])
//     },
//   }

//   Object.entries(params).forEach(([key, value]) => {
//     if (key in PARAMS_HANDLERS) {
//       PARAMS_HANDLERS[key](value)
//     }
//   })

//   return NextResponse.json(data)
// }

const PROJECTS_ITEMS_MAP = new Map(
	PROJECTS_ITEMS.map((item) => [item.id, item])
);
