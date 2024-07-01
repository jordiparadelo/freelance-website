"use client";
import { useRef } from "react";
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";
// Components
import { SectionLabel } from "@/ui";
// Assets
import Box from "@/public/assets/animated-icons/services.json";
// Constants
import { PROCESS } from "@/constants";
// Libs
import { useGSAP } from "@gsap/react";
// Animations
import { processAnimations } from "./animations";
import { useMediaQuery } from "@uidotdev/usehooks";

const LargeDevices = () => (
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
								<div className={styles["process__nav-list__content-heading"]}>
									<h3>{item.title}</h3>
									<p className="text-size-regular">{item.description}</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
			<ul className={styles["process__image-container"]}>
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
								priority={true}
								className={styles["process__image"]}
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</li>
					);
				})}
			</ul>
	</div>
);

const SmallDevices = () => (
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
								<div className={styles["process__nav-list__content-heading"]}>
										<h3>{item.title}</h3>
									<div className={styles["process__image-container"]}>

										<Image
											unoptimized
											src={item.cover.src}
											alt={item.cover.alt}
											width={item.cover.width}
											height={item.cover.height}
											priority={true}
											className={styles["process__image"]}
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										/>
									</div>
									<p className="text-size-medium">{item.description}</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	</div>
);
const Process = () => {
	const processRef = useRef(null);
	const isSmallDevice = useMediaQuery("only screen and (max-width: 769px)");

	useGSAP(
		() => {
			!isSmallDevice && processAnimations(processRef?.current);
		},
		{ scope: processRef, dependencies: [isSmallDevice] }
	);

	return (
		<section
			id='process'
			className={styles["process"]}
			ref={processRef}
		>
			<div className='padding-global --section-large'>
				<div className={`${styles["process__container"]} container`}>
					{isSmallDevice ? <SmallDevices /> : <LargeDevices />}
				</div>
			</div>
		</section>
	);
};

export default Process;
