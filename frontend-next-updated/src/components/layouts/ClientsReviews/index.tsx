import React from "react";
import { ReviewsList, SectionLabel } from "@/components/ui";
import Stars from "@/assets/animated-icons/stars.json";
// Constants
import { REVIEWS as reviews } from "@/lib/constants";
// Styles
import "./styles.scss";

const ClientsReviews = async () => {
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
