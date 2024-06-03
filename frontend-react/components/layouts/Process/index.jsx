"use client";
import { useRef } from "react";
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";
// Components
import { SectionLabel } from "@/ui";
// Assets
import Box from "@/public/animated-icons/services.json";
// Constants
import { PROCESS } from "@/constants";
// Libs
import { useGSAP } from "@gsap/react";
// Animations
import { processAnimations } from "./animations";
const Process = () => {
	const processRef = useRef(null);

	useGSAP(
		() => {
			processAnimations(processRef?.current);
		},
		{ scope: processRef }
	);

	return (
		<section
			id='process'
			className={styles["process"]}
			ref={processRef}
		>
			<div className={styles["process__container"]}>
				<div className={styles["process__layout"]}>
					<div className={styles["process__aside"]}>
						<div
							className={styles["process__header"]}
							data-component='aside-header'
						>
							<SectionLabel
								label='Process'
								animationData={Box}
							/>
							<h2> The journey of every successful project begins with...</h2>
						</div>

						<ul className={styles["process__nav-list"]}>
							{PROCESS.map((item) => {
								return (
									<li
										className={styles["process__nav-list__item"]}
										key={item.id}
										data-component='process-nav-item'
									>
										<div className={styles["process__nav-list__category"]}>
											<span>{item.category}</span>
										</div>
										<div
											className={styles["process__nav-list__content"]}
											data-component='process-content'
										>
											<div
												className={styles["process__nav-list__content-heading"]}
											>
												<h3>{item.title}</h3>
												<p>{item.description}</p>
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<div className={styles["process__image-container"]}>
						<ul className={styles["process__image-container__list"]}>
							{PROCESS.map((item) => {
								return (
									<li
										key={item.id}
										className={styles["process__image-container__item"]}
										data-component='process-cover'
									>
										<Image
											unoptimized
											src={item.cover.src}
											alt={item.cover.alt}
											width={item.cover.width}
											height={item.cover.height}
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
