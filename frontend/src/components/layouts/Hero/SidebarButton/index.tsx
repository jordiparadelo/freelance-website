"use client";
// Styles
import styles from "../styles.module.scss";
// Assets
import SidebarOpen from "@/assets/icons/SidebarOpen";
import SidebarClose from "@/assets/icons/SidebarClose";
// Context
import { useHero } from "@/context/HeroContext";

const SidebarButton = () => {
	const { isOpen, toggleMenu } = useHero();
	
	return (
		<button
			className={styles["hero__frame-top-bar__sidebar-button"]}
			onClick={toggleMenu}
			aria-label='Toggle sidebar'
			data-expanded={isOpen}
		>
			
			{isOpen ? (<SidebarOpen />) : (<SidebarClose />)}
		</button>
	);
};

export default SidebarButton;