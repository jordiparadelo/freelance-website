"use client";

import React, { useState } from "react";
// Components
import { TagsList } from "@/components/ui";
// Styles
import styles from "../styles.module.scss";
// Types
import { Tags, Capability } from "@/types";
// Context
import { useCapability } from "@/context/CapabilityContext";

const TAGS = [
	{ id: 1, label: "Webflow", group: ["Design"] },
	{ id: 2, label: "Figma", group: ["Design"] },
	{ id: 3, label: "React", group: ["Frontend"] },
	{ id: 4, label: "TypeScript", group: ["Frontend"] },
	{ id: 5, label: "Next.js", group: ["Frontend"] },
	{ id: 6, label: "Framer Motion", group: ["Frontend", "Animation"] },
	{ id: 7, label: "GSAP", group: ["Frontend", "Animation", "Design"] },
	{ id: 8, label: "Lenis", group: ["Frontend", "Animation", "Design"] },
];

const groups = [...new Set(TAGS.map((tag) => tag.group).flat())];

const Capabilities = () => {
	const {  setCapability } = useCapability();
	const [selectedGroup, setSelectedGroup] = useState<Tags[]>(TAGS);

	const handleFilter = (group: string) => {
		const groupSelected: Tags[] = TAGS
			.filter((tag) => tag.group.includes(group))
			.map((tag) => tag);

		setCapability(group as Capability["group"]);

		if (group.toLowerCase().includes("all")) {
			setSelectedGroup(TAGS);
		} else {
			setSelectedGroup(groupSelected);
		}
	};

	return (
		<section className={styles["about-content__section"]}>
			<div className={styles["about-content__section-header"]}>
				<h2 className={styles["about-content__heading"]}>Capabilities</h2>
				<select onChange={(e) => handleFilter(e.target.value)} className={styles["about-content__select"]}>
					<option defaultValue='all'>
						For All
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
