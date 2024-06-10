"use client";

// Components
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";
// Context
import { HeroProvider } from "@/context/HeroContext";
// Components
import HeroTopBar from "./HeroTopBar";
import HeroSideNav from "./HeroSideNav";
import HeroFrameContainer from "./HeroFrameContainer";

const Hero = () => {
	return (
		<header
			className={styles["hero"]}
			id='hero'
		>
			<HeroProvider>
				<div className={styles["hero__frame"]}>
					{/* TOP BAR */}
					<HeroTopBar />

					{/* FRAME CONTAINER */}
					<div className={styles["hero__frame-container-wrapper"]}>
						<HeroSideNav />
						<HeroFrameContainer />
					</div>
				</div>
			</HeroProvider>
		</header>
	);
};

export default Hero;
