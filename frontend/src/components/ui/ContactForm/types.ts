import type { Lead } from "@/lib/db/types";

export type ContactFormProps = {
	className?: string;
	props?: React.HTMLAttributes<HTMLDivElement>;
};

export type formFields = {
	name: string;
	email: string;
	message: string;
	location?: string; // Honeypot decoy
};

export type FormStatus = {
	success?: boolean | null;
	message?: string;
	value?: Lead;
};

export type CreateNewLeadResult = {
	success: boolean;
	message: string;
};
