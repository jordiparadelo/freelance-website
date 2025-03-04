"use client";

import React, { useState } from "react";
import { TagsList } from "@/components/ui";
import styles from "../styles.module.scss";
import { Tags } from "@/types";

const tags = [
	{ id: 1, label: "Webflow", group: ["Frontend", "Design"] },
	{ id: 2, label: "Figma", group: ["Frontend", "Design"] },
	{ id: 3, label: "React", group: ["Frontend"] },
	{ id: 4, label: "TypeScript", group: ["Frontend"] },
	{ id: 5, label: "Next.js", group: ["Frontend"] },
	{ id: 6, label: "Framer Motion", group: ["Frontend", "Animation"] },
	{ id: 7, label: "GSAP", group: ["Frontend", "Animation"] },
];

const groups = [...new Set(tags.map((tag) => tag.group).flat())];

const Capabilities = () => {
	const [selectedGroup, setSelectedGroup] = useState<Tags[]>(tags);

	const handleFilter = (group: string) => {
		const groupSelected: Tags[] = tags
			.filter((tag) => tag.group.includes(group))
			.map((tag) => tag);

		if (group === "all") {
			setSelectedGroup(tags);
		} else {
			setSelectedGroup(groupSelected);
		}
	};

	return (
		<section className={styles["about-content__section"]}>
			<div className={styles["about-content__section-header"]}>
				<h2 className={styles["about-content__heading"]}>Capabilities</h2>
				<select onChange={(e) => handleFilter(e.target.value)} className={styles["about-content__select"]}>
					<option value='all' selected>
						By Group
					</option>
					{groups.map((group) => (
						<option
							key={group}
							value={group}
						>
							For {group}
						</option>
					))}
				</select>
			</div>

			<TagsList tags={selectedGroup} />
		</section>
	);
};

export default Capabilities;
