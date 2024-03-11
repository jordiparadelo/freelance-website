import React from "react";
// Styles
import "./styles.scss";

const ServiceCard = (service) => {
	return (
		<article className='service-card'>
			<div className='service-card__label'>{service.label}</div>
			<div className='service-card__cover'>{service.cover}</div>
			<div className='service-card__details'>
				<h3 className='service-card__title'>{service.title}</h3>
			</div>
		</article>
	);
};

export default ServiceCard;
