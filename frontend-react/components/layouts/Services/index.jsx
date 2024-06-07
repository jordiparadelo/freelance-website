"use client";

import { useRef } from "react";
// Data
import { SERVICES } from "@/constants";
// Components
import { SectionLabel, ServiceCard } from "@/ui";
// Assets
import Box from "@/public/animated-icons/services.json";
// Styles
import styles from "./styles.module.scss";
// Libs
import { useGSAP } from "@gsap/react";
// Animations
import { serviceAnimation } from "./animations.js";

const Services = () => {
	let componentRef = useRef(null);

	useGSAP(
		() => {
			serviceAnimation(componentRef.current);
		},
		{ scope: componentRef.current }
	);

	return (
		<section
			className={styles["services"]}
			id='services'
			ref={componentRef}
		>
			<div className='padding-global --section-large'>
				<div className={`'container' ${styles["services__container"]}`}>
					<div className={styles["services__wrapper"]}>
						<header className={styles["services__header"]}>
							<SectionLabel
								label='Services'
								animationData={Box}
							/>

							<h2 className={styles["section-header__title"]}>
								A breakdown of what we do
							</h2>
							<p className={styles["section-header__subtitle"]}>
								Your go-to solution for web and mobile apps, like many founders,
								startups, and agencies do.
							</p>
						</header>

						<div className={styles["services__list"]}>
							{SERVICES?.map((service) => (
								<ServiceCard
									service={service}
									key={service.id}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
