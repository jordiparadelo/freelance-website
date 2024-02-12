import React from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/constants";
import "./styles.scss";

const Gallery = () => {
	return (
		<section
			id='gallery'
			className='gallery'
		>
			<svg
				viewBox='0 0 1440 55'
				fill='currentColor'
				xmlns='http://www.w3.org/2000/svg'
				className='gallery__top-shape'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M1440 30.2502C1242.59 45.7375 992.086 55 719.5 55C447.374 55 197.257 45.7688 0 30.3286L0 0H1440V30.2502Z'
				/>
			</svg>

			<div className='gallery__slideshow'>
				{GALLERY_IMAGES.map((image) => (
					<figure className='gallery__slide'>
						<Image
							key={image.key}
							src={image.src}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					</figure>
				))}
			</div>

			<svg
				viewBox='0 0 1440 55'
				fill='currentColor'
				xmlns='http://www.w3.org/2000/svg'
				className='gallery__bottom-shape'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M1440 30.2502C1242.59 45.7375 992.086 55 719.5 55C447.374 55 197.257 45.7688 0 30.3286L0 0H1440V30.2502Z'
				/>
			</svg>
		</section>
	);
};

export default Gallery;
