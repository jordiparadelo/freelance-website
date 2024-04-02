// use supabese to get data instead constants
import { getProjects, getProjectById, getLimitedProjects, getSortedProjects } from "@/lib/actions";

import { NextResponse } from "next/server";

// export async function POST(request, context) {
// 	const { body } = await request.json();
// 	const { data, error } = await supabase.from("projects").insert([body]);

// 	if (error) {
// 		return NextResponse.json({ error: error.message }, { status: 500 });
// 	}

// 	return NextResponse.json({ data }, { status: 201 });
// }

// export async function PATCH(request, context) {
// 	return NextResponse.json({ message: "PATCH" });
// }

// export async function DELETE(request, context) {
// 	return NextResponse.json({ message: "DELETE" });
// }

export async function GET(request, context) {
	const { searchParams } = new URL(request.url);
	// get data from supabase
	const {data: projects} = await getProjects();

	let projectsData = projects;

	const id = searchParams.get("id");
	const limit = searchParams.get("limit");
	const order = searchParams.get("order");


	id && (projectsData = await getProjectById(id));
	limit && (projectsData = await getLimitedProjects(limit));
	order && (projectsData = await getSortedProjects(order));

	// return NextResponse.json(data);
	return NextResponse.json(projectsData);
}
