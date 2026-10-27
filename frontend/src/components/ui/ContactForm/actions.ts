"use server";

import {
  ContactEmailTakenError,
  createContact,
  getContactByEmail,
} from "@/lib/db";

import { leadSchema } from "./config";
import type { CreateNewLeadResult } from "./types";

export const handleLeadSubmit = async (
  input: unknown,
): Promise<CreateNewLeadResult> => {
  const parsed = leadSchema.safeParse(input);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid form data.";
    return { success: false, message: firstError };
  }

  const lead = parsed.data;

  try {
    const existing = await getContactByEmail(lead.email);
    if (existing) {
      return { success: false, message: "User Already Registered" };
    }

    await createContact(lead);
    return { success: true, message: "Lead created successfully" };
  } catch (error) {
    if (error instanceof ContactEmailTakenError) {
      return { success: false, message: "User Already Registered" };
    }

    return {
      success: false,
      message: "An error occurred while creating the lead",
    };
  }
};
