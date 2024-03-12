import Image from "next/image";
import Link from "next/link";
// Data
import { SERVICES } from "@/constants";
// Components
import { SectionLabel } from "@/components";
// Assets
import Box from "@/public/animated-icons/services.json";
// Styles
import "./styles.scss";

const Services = () => {
	return (
		<section
			className='services'
			id='services'
		>
			<div className='container'>
				<div className='products__wrapper'>
					<header className='section-header --horizontal'>
						<div className='section-header__wrapper'>
							<SectionLabel
								label='Services'
								animationData={Box}
							/>

							<h2 className='section-header__title'>
								A breakdown of what we do
							</h2>
						</div>
						<p className='section-header__subtitle'>
							Your go-to solution for web and mobile apps, like many founders,
							startups, and agencies do.
						</p>
					</header>

					<div className='services__list'>
						{SERVICES.map((service) => (
							<ServiceCard
								service={service}
								key={service.id}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;

export const ServiceCard = ({ service }) => {
	return (
		<figure
			className='service-card'
			data-type={service.type}
		>
			<figcaption className='service-card__details'>
				<div className='service-card__title-wrapper'>
					<SectionLabel
						label=''
						animationData={Box}
					/>
					<h3 className='service-card__title'>{service.title}</h3>
				</div>
				<p className='service-card__description'>{service.description}</p>
			</figcaption>
			<div className='service-card__image-container'>
				{service.gallery.map((image) => (
					<Image
						src={image.src}
						alt={image.alt}
						width={image.width}
						height={image.height}
						key={image.alt}
						className='service-card__image'
					/>
				))}
			</div>
		</figure>
	);
};
