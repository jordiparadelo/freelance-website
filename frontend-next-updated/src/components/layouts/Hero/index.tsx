"use client";

// Context
import { HeroProvider } from "@/context/HeroContext";
import Frame from "./Frame";
import SideNav from "./SideNav";
// Components
// Styles
import styles from "./styles.module.scss";

// Components
// import TopBar from "./TopBar";

const Hero = () => {
	return (
		<HeroProvider>
			<header className={styles["hero"]} id="hero">
				<div className={styles["hero__frame"]}>
					{/* <TopBar /> */}
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
