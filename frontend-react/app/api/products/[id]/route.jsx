import { NextResponse } from "next/server";
import { PRODUCTS_ITEMS } from "../../../../constants";

export async function GET(request, context) {
	const { params } = context;
	const data = PRODUCTS_ITEMS;
	const { id } = params;
	const project = data.find((project) => project.id === id);
	return NextResponse.json(project);
}
