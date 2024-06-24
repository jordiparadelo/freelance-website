import { useMemo } from "react";
import { splitArray } from "@/utils";
import Image from "next/image";

// Styles
import styles from "../styles.module.scss";

const ProjectGallery = ({ gallery, numOfColumns = 2 }) => {
	// Memoize the splitArray function result to avoid unnecessary recalculations
	const galleryByColumns = useMemo(
		() => splitArray(gallery, numOfColumns),
		[gallery, numOfColumns]
	);

	return (
		<div
			className={styles["project-detail__gallery"]}
			style={{ "--columns": numOfColumns }}
		>
			{galleryByColumns?.map(
				(
					galleryColumn,
					columnIndex // Added columnIndex to map function
				) => (
					<ul
						key={columnIndex}
						className={styles["project-detail__gallery-column"]}
					>
						{galleryColumn.map((galleryItem, index) => (
							<li
								key={index}
								className={styles["project-detail__gallery-item"]}
							>
								<Image
									unoptimized
									src={galleryItem?.src}
									alt={galleryItem?.alt}
									width={galleryItem?.width}
									height={galleryItem?.height}
								/>
							</li>
						))}
					</ul>
				)
			)}
		</div>
	);
};

export default ProjectGallery;