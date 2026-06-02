import type { ContactLeadRequestBody } from "@/lib/types/contact-lead";

import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX_LENGTH = 2_000;
const NAME_MAX_LENGTH = 120;
const EMAIL_MAX_LENGTH = 254;

function normalizeValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function getStringOrEmpty(value: unknown) {
  return typeof value === "string" ? value : "";
}

function sanitizeLeadBody(input: unknown): ContactLeadRequestBody | null {
  if (!input || typeof input !== "object") return null;

  const maybeRecord = input as Record<string, unknown>;
  const source =
    maybeRecord.data && typeof maybeRecord.data === "object"
      ? (maybeRecord.data as Record<string, unknown>)
      : maybeRecord;

  const name = normalizeValue(getStringOrEmpty(source.name)).slice(
    0,
    NAME_MAX_LENGTH,
  );
  const email = normalizeValue(getStringOrEmpty(source.email))
    .toLowerCase()
    .slice(0, EMAIL_MAX_LENGTH);
  const message = normalizeValue(getStringOrEmpty(source.message)).slice(
    0,
    MESSAGE_MAX_LENGTH,
  );

  return {
    data: {
      name,
      email,
      message,
    },
  };
}

export async function POST(request: Request) {
  let parsedBody: unknown;

  try {
    const body = await request.json();
    // const sanitized = sanitizeLeadBody(body);

    const strapiUrl =
      process.env.STRAPI_LOCAL_URL?.replace(/\/$/, "") +
      (process.env.STRAPI_LEADS_ENDPOINT || "/api/contacts");

    const response = await fetch(strapiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    console.log({ body, strapiUrl, response });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: errorText || "Failed to submit lead." },
        { status: 500 },
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Unexpected error submitting lead." },
      { status: 500 },
    );
  }
}
