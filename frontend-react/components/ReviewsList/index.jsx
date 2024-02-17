import React from "react";
import Image from "next/image";
import "./styles.scss";

const ReviewsList = ({ reviews }) => {
	return (
		<ul className="reviews-list">
			{reviews?.map((review) => (
				<li key={review.id}>
					<Review review={review} />
				</li>
			))}
		</ul>
	);
};

export default ReviewsList;

const Review = ({ review }) => {
	return (
		<article className='review'>
			<header className='review__header'>
				<Image
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
