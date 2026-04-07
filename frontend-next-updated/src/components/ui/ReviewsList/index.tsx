"use client";

// Libs
import { useGSAP } from "@gsap/react";
import * as motion from "motion/react-client";
// Next.js
import Image from "next/image";
import { useRef } from "react";
import { useWindowSize } from "usehooks-ts";

// Animations
import { reviewAnimation } from "./animations";
// Styles
import "./styles.scss";

interface ReviewImage {
	src: string;
	width: number;
	height: number;
}

interface ReviewData {
	id: string;
	title: string;
	description: string;
	image: ReviewImage;
}

interface ReviewsListProps {
	reviews: ReviewData[];
}

interface ReviewProps {
	review: ReviewData;
}

// TODO: Fix drag event

const ReviewsList = ({ reviews }: ReviewsListProps) => {
	const componentRef = useRef<HTMLDivElement>(null);
	const animation = useRef<gsap.core.Timeline | null>(null);
	const size = useWindowSize();
	const { scrollY } = useScroll({
		container: componentRef,
		offset: ["start end", "end end"],
	});

	useGSAP(
		() => {
			if (componentRef.current) {
				animation.current = reviewAnimation(componentRef.current);
			}
		},
		{ dependencies: [size], scope: componentRef },
	);

	return (
		<div className="reviews-list" ref={componentRef}>
			<motion.ul
				className="reviews-list__wrapper"
				style={{ transform: `translateX(-${scrollY}px)` }}
			>
				{reviews?.map((review) => (
					<li key={review.id} className="reviews-list__item">
						<Review review={review} />
					</li>
				))}
			</motion.ul>
		</div>
	);
};

const Review = ({ review }: ReviewProps) => {
	return (
		<article className="review">
			<header className="review__header">
				<Image
					unoptimized
					className="review__image"
					src={review.image.src}
					width={review.image.width}
					height={review.image.height}
					alt={`${review.title} company logo`}
				/>
				<h3 className="review__title">{review.title}</h3>
			</header>
			<p className="review__description">{review.description}</p>
		</article>
	);
};

export default ReviewsList;
