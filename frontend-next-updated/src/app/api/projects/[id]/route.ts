import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/actions";
import { toProjectJson } from "../serialize";

export const dynamic = "force-static";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const project = await getProjectById(id);

  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ data: toProjectJson(project) });
}
