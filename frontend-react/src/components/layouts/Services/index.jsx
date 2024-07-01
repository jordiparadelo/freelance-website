"use client";

import { useRef } from "react";
// Data
import { SERVICES } from "@/constants";
// Components
import { SectionLabel } from "@/ui";
import  ServiceCard  from "./ServiceCard";
// Assets
import Box from "@/public/assets/animated-icons/services.json";
// Styles
import styles from "./styles.module.scss";
// Libs
import { useGSAP } from "@gsap/react";
import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";
// Animations
import { serviceAnimation } from "./animations.js";

const Services = () => {
	let componentRef = useRef(null);
	const {width: windowWidth} = useWindowSize();
	const isLargeDevice = useMediaQuery("only screen and (min-width: 991px)");

	useGSAP(
		() => {
			isLargeDevice && serviceAnimation(componentRef.current);
		},
		{ scope: componentRef.current, dependencies: [windowWidth, isLargeDevice]}
	);

	return (
		<section
			className={styles["services"]}
			id='services'
			ref={componentRef}
		>
			<div className='padding-global --section-medium'>
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
							<p className="text-size-medium">
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
