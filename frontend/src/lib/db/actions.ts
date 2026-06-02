"use server";

import { getLeadByEmail } from ".";

export type CreateNewLeadResult = {
	success: boolean;
	message: string;
};

export const createNewLead = async (
	data: any,
): Promise<CreateNewLeadResult> => {
	try {
		const isRegistered = await getLeadByEmail(data["email"]);
		if (isRegistered) {
			return {
				success: false,
				message: "User Already Registered",
			};
		}

		// Make API request to actually create the new lead
		const res = await fetch("/api/leads", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (!res.ok) {
			throw new Error("Failed to create the lead");
		}
		return {
			success: true,
			message: "Lead created successfully",
		};
	} catch (error) {
		return {
			success: false,
			message: "An error occurred while creating the lead",
		};
	}
};
