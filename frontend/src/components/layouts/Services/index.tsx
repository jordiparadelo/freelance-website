"use client";

import { useRef } from "react";
// Data
import { SERVICES } from "@/lib/constants";
// Components
import { SectionLabel } from "@/components/ui";
import ServiceCard from "./ServiceCard";
// Assets
import Box from "@/assets/animated-icons/services.json";
// Styles
import styles from "./styles.module.scss";
// Libs
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@uidotdev/usehooks";
import useMediaQuery from "@/hooks/useMediaQuery";
// Animations
import { serviceAnimation } from "./animations";

const Services = () => {
	const componentRef = useRef<HTMLElement | null>(null);
	const {width: windowWidth} = useWindowSize();
	const isLargeDevice = useMediaQuery("only screen and (min-width: 991px)");

	useGSAP(
		() => {
			if (isLargeDevice) {
				serviceAnimation(componentRef.current);
			}
		},
		{ scope: componentRef, dependencies: [windowWidth, isLargeDevice]}
	);

	return (
		<section
			className={styles["services"]}
			id='services'
			ref={componentRef}
		>
			<div className='padding-global --section-medium'>
				<div className={`container ${styles["services__container"]}`}>
					<div className={styles["services__wrapper"]}>
						<header className={styles["services__header"]}>
							<SectionLabel
								label='Services'
								animationData={Box}
							/>

							<h2 className={styles["section-header__title"]}>
								A breakdown of what I do
							</h2>
							<p className="text-size-medium">
								Your go-to solution for web and design solutions, like many founders,
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
