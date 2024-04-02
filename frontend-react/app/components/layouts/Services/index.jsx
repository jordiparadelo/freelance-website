
// Data
import {SERVICES}  from "@/constants";
// Components
import { SectionLabel, ServiceCard } from "@/ui";
// Assets
import Box from "@/public/animated-icons/services.json";
// Styles
import styles from "./styles.module.scss";

const Services = async () => {
	return (
		<section
			className={styles['services']}
			id='services'
		>
			<div className='container'>
				<div className={styles['services__wrapper']}>
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
						<p className={styles['section-header__subtitle']}>
							Your go-to solution for web and mobile apps, like many founders,
							startups, and agencies do.
						</p>
					</header>

					<div className={styles['services__list']}>
						{SERVICES?.map((service) => (
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
