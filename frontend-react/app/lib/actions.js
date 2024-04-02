import { PROJECTS } from "@/constants";

export async function getProjects() {
	let response;

	if (PROJECTS) {
		response = {
			data: PROJECTS,
			error: null,
		};
	} else {
		response = {
			data: null,
			error: "Failed to get projects",
		};
	}

	const { data, error } = response;

	return { data, error };
}

export async function getProjectById(id) {
	try {
		const { data, error } = await getProjects();
		const projectById = data.filter((project) => project.id === id);

		if (error) throw error;
		return projectById;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getLimitedProjects(limit) {
	try {
		let { data, error } = await getProjects();

		const projectsByLimit = data.slice(0, limit);

		const page = 1;
		const pageSize = limit;
		const offset = (page - 1) * pageSize;

		const projectsByPage = projectsByLimit.slice(offset, offset + pageSize);
		const pagination = {
			page,
			pageSize,
			total: data.length,
		};

		const response = {
			data: projectsByPage,
			pagination,
		};

		if (error) throw error;
		return response;
	} catch (error) {
		console.error(error.hint);
		return null;
	}
}

export async function getSortedProjects(order) {
	const ORDER_OPTIONS = {
		asc: true,
		desc: false,
		default: true,
	};

	const orderOption = ORDER_OPTIONS[order];

	try {
		const { data, error } = await getProjects();

		if (error) throw error;

		const getYear = (data) => JSON.parse(data.details.year);

		const sortedData = data.sort((a, b) => {
			return orderOption ? getYear(a) - getYear(b) : getYear(b) - getYear(a);
		});

		return sortedData;
	} catch (error) {
		console.error(error.hint);
		return null;
	}
}
