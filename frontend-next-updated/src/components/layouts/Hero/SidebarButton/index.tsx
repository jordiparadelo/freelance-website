"use client";
import SidebarClose from "@/assets/icons/SidebarClose";
// Assets
import SidebarOpen from "@/assets/icons/SidebarOpen";
// Context
import { useHero } from "@/context/HeroContext";
// Styles
import styles from "../styles.module.scss";

const SidebarButton = () => {
	const { isOpen, toggleMenu } = useHero();

	return (
		<button
			type="button"
			className={styles["hero__frame-top-bar__sidebar-button"]}
			onClick={toggleMenu}
			aria-label="Toggle sidebar"
			data-expanded={isOpen}
		>
			{isOpen ? <SidebarOpen /> : <SidebarClose />}
		</button>
	);
};

export default SidebarButton;
