"use client";

// Components
// Styles
import styles from "./styles.module.scss";
// Context
import { HeroProvider } from "@/context/HeroContext";
// Components
import TopBar from "./TopBar";
import SideNav from "./SideNav";
import Frame from "./Frame";

const Hero = () => {
	return (
		<HeroProvider>
			<header
				className={styles["hero"]}
				id='hero'
			>
				<div className={styles["hero__frame"]}>
					<TopBar />
					<div className={styles["hero__frame-container-wrapper"]}>
						<SideNav />
						<Frame />
					</div>
				</div>
			</header>
		</HeroProvider>
	);
};

export default Hero;
