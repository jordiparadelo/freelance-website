export interface Project {
	id: string;
	href?: string;
	image: {
		src: string;
		alt?: string;
		width?: number;
		height?: number;
	};
	title: string;
	details?: {
		brief: string;
		blob: string;
		client: string;
		type: string[];
		industries: string[];
		year: string;
		roles: string[];
		collaboration: string[];
	};
	challenge?: string;
	services?: string[];
	preview?: string;
	categories?: string[];
	gallery?: Array<{
		src: string;
		alt: string;
		width: number;
		height: number;
	}>;
}

export interface NavItem {
	href: string;
	label: string;
	icon?: React.ComponentType<{ className?: string }>;
}

export interface SectionProps {
	className?: string;
	children: React.ReactNode;
}

export interface LayoutProps {
	children: React.ReactNode;
}

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "ghost";
	size?: "sm" | "md" | "lg";
	isLoading?: boolean;
}

export interface Tags {
	id: number;
	label: string;
	group: string[];
}

export interface Capability {
	group: "All" | "Frontend" | "Design" | "Animation";
}
