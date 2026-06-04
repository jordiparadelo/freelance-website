import { z } from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(2)
		.max(120)
		.regex(/^[a-zA-Z\s]+$/),
	email: z.email().max(254),
	message: z.string().max(2000),
	location: z
		.string()
		.transform((v) => v.trim())
		.refine((v) => v === "", {
			message: "Invalid submission.",
		}),
});

// Only what you persist
export const leadSchema = contactFormSchema.omit({ location: true });

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type LeadInput = z.infer<typeof leadSchema>;
