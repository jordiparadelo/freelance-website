// use supabese to get data instead constants
import { supabase } from "@/lib/superbase";
import { PROJECTS_ITEMS } from "@/constants";

import { NextResponse } from "next/server";

const ORDER_OPTIONS = {
	asc: true,
	desc: false,
	default: true,
};

export async function POST(request, context) {
	const { body } = await request.json();
	const { data, error } = await supabase.from("projects").insert([body]);

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	return NextResponse.json({ data }, { status: 201 });
}

export async function PATCH(request, context) {
	return NextResponse.json({ message: "PATCH" });
}

export async function DELETE(request, context) {
	return NextResponse.json({ message: "DELETE" });
}

export async function GET(request, context) {
	const { searchParams } = new URL(request.url);
	// get data from supabase
	const { data, error } = await supabase.from("projects").select();

	let projectsData = data;

	const id = searchParams.get("id");
	const limit = searchParams.get("limit");
	const order = searchParams.get("order");

	async function getProjectById(id) {
		const matchFilter = { client_name: id };
		try {
			const { data, error } = await supabase
				.from("projects")
				.select()
				.match(matchFilter);
			// const { data, error } = await supabase.from('projects').select().eq('client_name', id);
			if (error) throw error;
			return data;
		} catch (error) {
			console.error(error.hint);
			return null;
		}
	}

	async function getLimitedProjects(limit) {
		try {
			let { data, error } = await supabase
				.from("projects")
				.select("*")
				.range(0, limit);

			if (error) throw error;
			return data;
		} catch (error) {
			console.error(error.hint);
			return null;
		}
	}

	async function getSortedProjects(order) {
		const orderOption = ORDER_OPTIONS[order] || ORDER_OPTIONS.default;

		try {
			const { data, error } = await supabase
				.from("projects")
				.select()
				.order("details->year", { ascending: false });
			if (error) throw error;
			return data;
		} catch (error) {
			console.error(error.hint);
			return null;
		}
	}

	// projectsData = PROJECTS_ITEMS;

	id && (projectsData = await getProjectById(id));
	limit && (projectsData = await getLimitedProjects(limit));
	order && (projectsData = await getSortedProjects(order));

	// return NextResponse.json(data);
	return NextResponse.json(projectsData);
}
