import React, { Suspense, lazy } from "react";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
// Components
import { Button } from "@/ui";
import { Banner } from "@/layouts";
const HeroBackground = lazy(() => import("./HeroBackground")); 

const HeroFrameContainer = () => {
	return (
		<div className={styles["hero__frame-container"]}>
			<Suspense fallback={<div>Loading...</div>}>
				<HeroBackground className={styles["hero__background"]} />
			</Suspense>
			<div className={styles["hero__layout"]}>
				<div className={styles["hero__heading-wrapper"]}>
					<div className={styles["hero__label"]}>Design & Dev freelancer</div>
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
	);
};

export default HeroFrameContainer;
