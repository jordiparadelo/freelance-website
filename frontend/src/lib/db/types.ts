type ProjectDetailsItem = {
	label: string;
};
export type Project = {
	id: string;
	nameID: string;
	title: string;
	image: {
		url: string;
		width: number;
		height: number;
	};
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
