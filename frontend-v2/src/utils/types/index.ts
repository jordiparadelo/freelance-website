export interface Project {
	id: string;
	title: string;
	description: string;
	cover?: string;
	images?: string[];
	link?: string;
	github?: string;
	categories?: string[];
	technologies?: string[];
	featured?: boolean;
	createdAt?: string;
}
