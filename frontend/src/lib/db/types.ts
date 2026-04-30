type ProjectDetailsItem = {
	label: string;
};
export type Project = {
	id: string;
	nameID: string;
	title: string;
	challenge: string;
	image: {
		url: string;
		width: number;
		height: number;
	};
	gallery: {
		id: string;
		url: string;
		width: number;
		height: number;
	}[];
	details: {
		brief: string;
		year: string;
		industries: ProjectDetailsItem[];
		type: ProjectDetailsItem[];
		roles: ProjectDetailsItem[];
		collaboration: ProjectDetailsItem[];
		preview: string;
	};
};

export type BusinessInfo = {
	id: 10;
	legalName: string;
	displayName: string;
	country: string;
	city: string;
	timezone: string;
	isAvailable: null | boolean;
	social_links: {
		displayName: string;
		nameID: string;
		href: string;
		type: string;
	}[];
	cv: {
		alternativeText: string;
		url: string;
	};
	avatar: {
		alternativeText: string;
		url: string;
		width: number;
		height: number;
	};
};

export type StrapiFetchOptions = {
	tags?: string[];
	revalidate?: number;
};

export type StrapiFilterOperator = "$eq" | "$in" | "$containsi" | "$ne";

export type StrapiFilter = {
	field: string;
	operator: StrapiFilterOperator;
	value: string | number | Array<string | number>;
};

export type StrapiSort = {
	field: string;
	order?: "asc" | "desc";
};

export type StrapiPagination = {
	page?: number;
	pageSize?: number;
	start?: number;
	limit?: number;
};

export type StrapiQueryOptions = {
	filters?: StrapiFilter[];
	sort?: StrapiSort[];
	pagination?: StrapiPagination;
	// Optional escape hatch for endpoint-specific params
	extraParams?: Record<string, string | number | boolean>;
};

export type StrapiFetchConfig = {
	tags?: string[];
	revalidate?: number;
};
