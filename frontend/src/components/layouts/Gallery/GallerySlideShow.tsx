"use client";

import Image from "next/image";
import { useRef } from "react";
import { formatStrapiMediaUrl } from "@/lib/strapi";
import { galleryAnimations } from "./animations";

type GalleryImage = {
	id: number;
	documentId: string;
	url: string;
	width: number;
	height: number;
	alternativeText: string | null;
};

const GallerySlideShow = ({ images }: { images: GalleryImage[] }) => {
	const componentRef = useRef(null);

	galleryAnimations(componentRef);

	return (
		<div className="gallery__slideshow" ref={componentRef}>
			{images.map((image) => {
				const imageSrc = formatStrapiMediaUrl(image.url);
				return (
					<figure className="gallery__slide" key={image.id}>
						<Image
							unoptimized
							src={imageSrc}
							alt={image.alternativeText || ""}
							width={image.width}
							height={image.height}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</figure>
				);
			})}
		</div>
	);
};

export default GallerySlideShow;
