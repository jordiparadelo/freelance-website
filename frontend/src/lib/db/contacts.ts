import type { Contact, ContactInsert } from "./types";

/**
 * In-process stand-in for `public.contacts`.
 * A dev-server restart clears it. Later, these functions become
 * `getSupabase().from("contacts")` select/insert calls.
 */
const contacts: Contact[] = [];

export class ContactEmailTakenError extends Error {
  constructor(email: string) {
    super(`Contact already exists for ${email}`);
    this.name = "ContactEmailTakenError";
  }
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

/** `.from("contacts").select("*").eq("email", email).maybeSingle()` */
export async function getContactByEmail(
  email: string,
): Promise<Contact | null> {
  const normalized = normalizeEmail(email);
  return (
    contacts.find((row) => normalizeEmail(row.email) === normalized) ?? null
  );
}

/** `.from("contacts").insert(input).select().single()` */
export async function createContact(input: ContactInsert): Promise<Contact> {
  const email = normalizeEmail(input.email);
  const existing = await getContactByEmail(email);

  if (existing) {
    throw new ContactEmailTakenError(email);
  }

  const row: Contact = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    email,
    message: input.message,
    created_at: new Date().toISOString(),
  };

  contacts.push(row);
  return row;
}
