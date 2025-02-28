"use client";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
// Styles
import styles from "./styles.module.scss";
// Components
import { SectionLabel } from "@/components/ui";
// Assets
import Box from "@/assets/animated-icons/services.json";
// Constants
import { PROCESS } from "@/lib/constants";
// Libs
import { useGSAP } from "@gsap/react";
// Animations
import { processAnimations } from "./animations";
import useMediaQuery from "@/hooks/useMediaQuery";

interface ProcessItemProps {
	id: string;
	category: string;
	title: string;
	description: string;
	cover: {
		src: StaticImageData;
		alt: string;
		width: number;
		height: number;
	};
}

/**
 * LargeDevices component - Renders the process section for larger screens
 * Displays a side navigation with process steps and corresponding images
 */
const LargeDevices: React.FC = () => {
	const processItems = PROCESS as ProcessItemProps[];
	
	return (
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
					{processItems.map((item) => (
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
					))}
				</ul>
			</div>
			<ul className={styles["process__image-container"]}>
				{processItems.map((item) => (
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
				))}
			</ul>
		</div>
	);
};

/**
 * SmallDevices component - Renders the process section for mobile screens
 * Displays a vertical list of process steps with inline images
 */
const SmallDevices: React.FC = () => {
	const processItems = PROCESS as ProcessItemProps[];
	
	return (
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
					{processItems.map((item) => (
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
					))}
				</ul>
			</div>
		</div>
	);
};

/**
 * Process component - Main process section of the website
 * Handles responsive layout switching and animations based on screen size
 * @returns {JSX.Element} Process section with responsive layout
 */
const Process: React.FC = () => {
	const processRef = useRef<HTMLElement | null>(null);
	const isSmallDevice = useMediaQuery("only screen and (max-width: 769px)");

	useGSAP(
		() => {
			if (!isSmallDevice) {
				processAnimations(processRef?.current);
			}
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
