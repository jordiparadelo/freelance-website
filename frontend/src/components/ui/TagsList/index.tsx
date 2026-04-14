"use client";

import type { FC } from "react";
import type { Tags } from "@/types";
import styles from "./styles.module.scss";

interface TagsListProps {
	tags: Tags[];
	className?: string;
}

const TagsList: FC<TagsListProps> = ({ tags, className = "" }) => {
	return (
		<ul className={`${styles.tagsList} ${className}`}>
			{tags.map((tag) => (
				<button
					type="button"
					key={tag.id}
					className={`${styles.tag} .button button--secondary`}
				>
					{tag.label}
				</button>
			))}
		</ul>
	);
};

export default TagsList;
