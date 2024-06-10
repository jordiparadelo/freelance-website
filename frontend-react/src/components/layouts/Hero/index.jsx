"use client";

import Link from "next/link";
// Components
import { Button } from "@/ui";
import { Banner } from "@/layouts";
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";
// Components
import HeroBackground from "./HeroBackground";
// Animations

const Hero = () => {
	return (
		<header
			className={styles["hero"]}
			id='hero'
		>
			<div className={styles["hero__frame"]}>
				{/* TOP BAR */}
				<div className={styles["hero__frame-top-bar"]}>
					<div className={styles["hero__frame-top-bar__actions"]}>
						<div className={styles["hero__frame-top-bar__dots"]}>
							<span className={styles["hero__frame-top-bar__dot"]}></span>
							<span className={styles["hero__frame-top-bar__dot"]}></span>
							<span className={styles["hero__frame-top-bar__dot"]}></span>
						</div>
					</div>
					<div className={styles["hero__frame-top-bar__about"]}>
						<div className={styles["hero__frame-top-bar__avatar"]}>
							{/* <Image 
							/> */}
						</div>
					</div>
				</div>

				{/* FRAME CONTAINER */}
				<div className={styles["hero__frame-container"]}>
					<HeroBackground className={styles["hero__background"]} />
					<div className={styles["hero__layout"]}>
						<div className={styles["hero__heading-wrapper"]}>
							<div className={styles["hero__label"]}>
								Design & Dev freelancer
							</div>
							<div className={styles["hero__title-wrapper"]}>
								<h1
									className={styles["hero__title"]}
									aria-label='digital design on demand'
								>
									Web Design for growing companies
								</h1>
							</div>
						</div>
						<p className={styles["hero__details-text"]}>
							Launch your next project in <strong>no-time.</strong>{" "}
						</p>
						<div className={styles["hero__actions"]}>
							<Link href='/projects'>
								<Button className='button--primary'>Start a new Project</Button>
							</Link>
						</div>
					</div>

					<Banner />
				</div>
			</div>
		</header>
	);
};

export default Hero;
