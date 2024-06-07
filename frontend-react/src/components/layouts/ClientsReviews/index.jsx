import React from "react";
import { ReviewsList, SectionLabel } from "@/ui";
import Stars from "@/public/assets/animated-icons/stars.json";
// Constants
import { REVIEWS as reviews } from "@/constants";
// Styles
import "./styles.scss";

const ClientsReviews = async () => {
	const URL_REVIEWS = `http://localhost:3000/api/reviews`;
	// const reviews = await fetch(URL_REVIEWS).then((res) =>
	// 	res.json()
	// );
	return (
		<section
			id='client-reviews'
			className='client-reviews'
		>
			<div className='container'>
				<div className='client-reviews__wrapper'>
					<header className='section-header'>
						<SectionLabel
							label='Reviews'
							animationData={Stars}
						/>
						<h2 className='section-header__title'>Clients have commented</h2>
					</header>
					<ReviewsList reviews={reviews} />
				</div>
			</div>
		</section>
	);
};

export default ClientsReviews;
