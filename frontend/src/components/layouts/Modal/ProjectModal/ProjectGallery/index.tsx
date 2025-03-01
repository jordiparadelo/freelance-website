import { useMemo } from "react";
import Image from "next/image";
// Utils
import { splitArray } from "@/lib/utils";
// Types
import { type Project } from "@/lib/actions";
// Styles
import styles from "../styles.module.scss";

interface ProjectGalleryProps {
	gallery: Project['gallery'];
	numOfColumns?: number;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ gallery, numOfColumns = 2 }) => {
	// Memoize the splitArray function result to avoid unnecessary recalculations
	const galleryByColumns = useMemo(
		() => splitArray(gallery, numOfColumns),
		[gallery, numOfColumns]
	);

	if (!gallery || gallery.length === 0) return null;

	return (
		<div
			className={styles["project-detail__gallery"]}
			style={{ "--columns": numOfColumns } as React.CSSProperties}
		>
			{galleryByColumns?.map((galleryColumn: Project['gallery'], columnIndex: number) => (
				<ul
					key={columnIndex}
					className={styles["project-detail__gallery-column"]}
				>
					{galleryColumn.map((galleryItem: Project['gallery'][number], index: number) => (
						<li
							key={`${columnIndex}-${index}`}
							className={styles["project-detail__gallery-item"]}
						>
							<Image
								unoptimized
								src={galleryItem.src}
								alt={galleryItem.alt}
								width={galleryItem.width}
								height={galleryItem.height}
							/>
						</li>
					))}
				</ul>
			))}
		</div>
	);
};

export default ProjectGallery;