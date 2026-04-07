import { NextResponse } from "next/server";
import { getProjects } from "@/lib/actions";
import { toProjectJson } from "./serialize";

export const dynamic = "force-static";

export async function GET() {
  const { data, error } = await getProjects();

  if (error || !data) {
    return NextResponse.json(
      { error: error ?? "Failed to get projects" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    data: data.map(toProjectJson),
  });
}
