"use server";

import { createNewLead, getLeadByEmail } from "@/lib/db";
import type { Lead } from "@/lib/db/types";

import { leadSchema } from "./config";
import type { CreateNewLeadResult } from "./types";

export const handleLeadSubmit = async (
	input: Lead,
): Promise<CreateNewLeadResult> => {
	const parsed = leadSchema.safeParse(input);

	if (!parsed.success) {
		const firstError = parsed.error.issues[0]?.message ?? "Invalid form data.";
		return { success: false, message: firstError };
	}

	// Honeypot already enforced by `location` refine; strip for DB
	const lead = leadSchema.parse(parsed.data);

	try {
		const existing = await getLeadByEmail(lead.email);
		if (existing !== undefined) {
			return { success: false, message: "User Already Registered" };
		}

		await createNewLead({ data: lead });
		return { success: true, message: "Lead created successfully" };
	} catch {
		return {
			success: false,
			message: "An error occurred while creating the lead",
		};
	}
};
