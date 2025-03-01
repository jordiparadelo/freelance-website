import { PROJECTS, PRODUCTS } from "@/lib/constants";

import { StaticImageData } from "next/image";

interface Image {
	src: StaticImageData;
	alt: string;
	width: number;
	height: number;
}

interface Comment {
	id: number;
	comment: string;
}

export interface ProjectDetails {
	brief: string;
	blob: string;
	client: string;
	type: string[];
	industries: string[];
	year: string;
	roles: string[];
	collaboration: string[];
}

export interface Project {
	id: string;
	href: string;
	image: Image;
	title: string;
	details: ProjectDetails;
	challenge: string;
	services: string[];
	preview: string;
	categories: string[];
	gallery: Image[];
}

export interface Product {
	id: string;
	href: string;
	image: Image;
	category: string;
	title: string;
	details: string;
	preview: string;
	formats: string[];
	likes: number;
	comments: Comment[];
	price: number;
}

interface Pagination {
	page: number;
	pageSize: number;
	total: number;
}

interface Response<T> {
	data: T[] | null;
	error: string | null;
}

interface PaginatedResponse<T> {
	data: T[];
	pagination: Pagination;
}

export async function getProjects(): Promise<Response<Project>> {
	const response = PROJECTS ? {
		data: PROJECTS,
		error: null,
	} : {
		data: null,
		error: "Failed to get projects",
	};

	return response;
}

export async function getProjectById(id: string): Promise<Project | null> {
	try {
		const { data, error } = await getProjects();
		if (error || !data) throw error;

		const projectById = data.find((project) => project.id === id);
		return projectById || null;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getLimitedProjects(limit: number): Promise<PaginatedResponse<Project> | null> {
	try {
		const { data, error } = await getProjects();
		if (error || !data) throw error;

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

		return {
			data: projectsByPage,
			pagination,
		};
	} catch (error) {
		console.error(error instanceof Error ? error.message : error);
		return null;
	}
}

export async function getSortedProjects(order: 'asc' | 'desc' | 'default'): Promise<Project[] | null> {
	const ORDER_OPTIONS = {
		asc: true,
		desc: false,
		default: true,
	} as const;

	const orderOption = ORDER_OPTIONS[order];

	try {
		const { data, error } = await getProjects();
		if (error || !data) throw error;

		const getYear = (project: Project) => JSON.parse(project.details.year);

		return data.sort((a, b) => {
			return orderOption ? getYear(a) - getYear(b) : getYear(b) - getYear(a);
		});
	} catch (error) {
		console.error(error instanceof Error ? error.message : error);
		return null;
	}
}

// PRODUCTS
export async function getProducts(): Promise<Response<Product>> {
	const response = PRODUCTS ? {
		data: PRODUCTS,
		error: null,
	} : {
		data: null,
		error: "Failed to get products",
	};

	return response;
}

export async function getProductById(id: string): Promise<Product | null> {
	try {
		const { data, error } = await getProducts();
		if (error || !data) throw error;

		const productById = data.find((product) => product.id === id);
		return productById || null;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function getLimitedProducts(limit: number): Promise<PaginatedResponse<Product> | null> {
	try {
		const { data, error } = await getProducts();
		if (error || !data) throw error;

		const productsByLimit = data.slice(0, limit);

		const page = 1;
		const pageSize = limit;
		const offset = (page - 1) * pageSize;

		const productsByPage = productsByLimit.slice(offset, offset + pageSize);
		const pagination = {
			page,
			pageSize,
			total: data.length,
		};

		return {
			data: productsByPage,
			pagination,
		};
	} catch (error) {
		console.error(error instanceof Error ? error.message : error);
		return null;
	}
}

export async function getSortedProducts(order: 'asc' | 'desc' | 'default'): Promise<Product[] | null> {
	const ORDER_OPTIONS = {
		asc: true,
		desc: false,
		default: true,
	} as const;

	const orderOption = ORDER_OPTIONS[order];

	try {
		const { data, error } = await getProducts();
		if (error || !data) throw error;

		const getYear = (product: Product): number => {
			try {
				const details = product.details;
				return typeof details === 'string' ? parseInt(details, 10) || 0 : 0;
			} catch {
				return 0;
			}
		};

		return data.sort((a, b) => {
			return orderOption ? getYear(a) - getYear(b) : getYear(b) - getYear(a);
		});
	} catch (error) {
		console.error(error instanceof Error ? error.message : error);
		return null;
	}
}