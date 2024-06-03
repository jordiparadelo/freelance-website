"use client";

import React, { useRef } from "react";
// Next.js
import Image from "next/image";
// Libs
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll } from "framer-motion"

// Animations
import { reviewAnimation } from "./animations";
// Styles
import "./styles.scss";

// TODO: Fix drag event

const ReviewsList = ({ reviews }) => {
	const componentRef = useRef(null);
	const animation = useRef(null);
	const size = useWindowSize();
	const { scrollY } = useScroll({
		container: componentRef,
		offset: ["start end", "end end"]
	})


	useGSAP(() => {
		animation.current = reviewAnimation(componentRef.current);
	},{ dependencies: [size] , scope: componentRef});

	function handleSlider(event) {
		const scrubValue = event.target.value;
		animation.current?.seek(scrubValue);
	}

	return (
		<div className='reviews-list' ref={componentRef}>
			<motion.ul
				className='reviews-list__wrapper'
				style={{transform: `translateX(-${scrollY}px)`}}
			>
				{reviews?.map((review) => (
					<li key={review.id} className='reviews-list__item'>
						<Review review={review} />
					</li>
				))}
			</motion.ul>
		</div>
	);
};

export default ReviewsList;

const Review = ({ review }) => {
	return (
		<article className='review'>
			<header className='review__header'>
				<Image
				unoptimized
					className='review__image'
					src={review.image.src}
					width={review.image.width}
					height={review.image.height}
					alt={`${review.title} company logo`}
				/>
				<h3 className='review__title'>{review.title}</h3>
			</header>
			<p className='review__description'>{review.description}</p>
		</article>
	);
};
