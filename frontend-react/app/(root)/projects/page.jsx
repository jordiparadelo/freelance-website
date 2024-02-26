import React from "react";
// Next.js
import Link from "next/link";
// Components
import { Hero,  About, Gallery, Products, SelectedWork, ClientsReviews } from "@/layouts";
import { Banner } from "@/components";

async function getProjects() {
	const res = await fetch(`http://localhost:3000/api/products`);
	return res.json();
}

const ProjectsPage = async () => {
	const projects = await getProjects();

	return (
		<>
			<Hero />
			<Banner />
			<SelectedWork />
			<section>
				<ul>
					{projects.map((product) => (
						<li key={product.id}>
							<Link href={`/products/${product.id}`}>
								<h1 key={product.id}>{product.title}</h1>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default ProjectsPage;
