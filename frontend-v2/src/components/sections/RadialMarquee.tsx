"use client";

import { useEffect, useRef } from "react";
import { Section } from "@/components/ui";
import styles from "@/styles/RadialMarquee.module.css";
import { useRadialMarquee } from "@/utils/animations";

const PROJECTS_MOCK = [
	{
		id: 1,
		title: "Project 1",
		description: "Description 1",
		image: "https://via.placeholder.com/150",
	},
	{
		id: 2,
		title: "Project 2",
		description: "Description 2",
		image: "https://via.placeholder.com/150",
	},
	{
		id: 3,
		title: "Project 3",
		description: "Description 3",
		image: "https://via.placeholder.com/150",
	},
	{
		id: 4,
		title: "Project 4",
		description: "Description 4",
		image: "https://via.placeholder.com/150",
	},
	{
		id: 1,
		title: "Project 1",
		description: "Description 1",
		image: "https://via.placeholder.com/150",
	},
	{
		id: 2,
		title: "Project 2",
		description: "Description 2",
		image: "https://via.placeholder.com/150",
	},
	{
		id: 3,
		title: "Project 3",
		description: "Description 3",
		image: "https://via.placeholder.com/150",
	},
	{
		id: 4,
		title: "Project 4",
		description: "Description 4",
		image: "https://via.placeholder.com/150",
	},
];

const RadialMarquee = () => {
	const componentRef = useRef<HTMLDivElement>(null);

	const { pause, resume, isTransitioning } = useRadialMarquee(componentRef);

	return (
		<Section className={styles["reel-section"]}>
			<div
				className={styles["radial-marquee"]}
				ref={componentRef}
				role="application"
				data-transitioning={isTransitioning}
				data-debug="true"
			>
				{[...PROJECTS_MOCK, ...PROJECTS_MOCK].map((project, index) => (
					<div
						key={`${project.id}-${index}`}
						className={styles["radial-marquee__item"]}
						onMouseEnter={() => pause()}
						onMouseLeave={() => resume()}
						role="application"
					>
						<figure className={styles["radial-marquee__card"]}>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</figure>
					</div>
				))}
			</div>
		</Section>
	);
};

export default RadialMarquee;
