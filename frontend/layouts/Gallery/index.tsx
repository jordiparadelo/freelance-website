"use client";

import React, {useRef} from "react";
import Image from "next/image";

// Components
import { Curves } from "@/components";

// Libs
import { useGSAP } from "@gsap/react";

// Constants
import { GALLERY_IMAGES } from "@/constants";

// Animations
import { galleryAnimations } from "./animations";

// Styles
import "./styles.scss";

const Gallery = () => {
	const componentRef = useRef(null)
	
	useGSAP(() => {
		galleryAnimations(componentRef?.current!);
	});

	// const handleAnimation = () => {
	// 	galleryAnimations(componentRef?.current!);
	// };

	return (
		<section
			id='gallery'
			className='gallery'
			ref={componentRef}
		>
			<Curves fill="white" className="gallery__curves--top"/>

			<div className='gallery__slideshow'>
				{GALLERY_IMAGES.map((image) => (
					<figure className='gallery__slide' key={image.key}>
						<Image
							src={image.src}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					</figure>
				))}
			</div>

			<Curves fill="white" className="gallery__curves--bottom"/>
		</section>
	);
};

export default Gallery;
