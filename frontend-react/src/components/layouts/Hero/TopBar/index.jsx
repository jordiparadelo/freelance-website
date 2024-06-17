import React from "react";
import Link from "next/link";
// Styles
import styles from "../styles.module.scss";
// Assets
import SidebarOpen from "@/public/assets/sidebar-open.svg";
import SidebarClose from "@/public/assets/sidebar-close.svg";
// Libs
import { useMediaQuery } from "@uidotdev/usehooks";
// Context
import { useHero } from "@/context/HeroContext";
// Constants
import { NAV_LINKS } from "@/lib/constants";
// Components
import { AvatarDropdown } from "@/components/ui";

const DesktopMenu = () => (
	<menu className={styles["hero__frame-top-bar__menu"]}>
		{NAV_LINKS.map((link) => (
			<Link
				key={link.key}
				href={link.href}
				className={styles["hero__frame-top-bar__menu-link"]}
			>
				{link.label}
			</Link>
		))}
	</menu>
);
const MobileMenu = () => (
	<menu className={styles["hero__frame-top-bar__menu"]}>Menu</menu>
);

const TopBar = () => {
	const { isOpen, toggleMenu } = useHero();
	const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

	return (
		<div className={styles["hero__frame-top-bar"]}>
			<div className={styles["hero__frame-top-bar__actions"]}>
				<button
					className={styles["hero__frame-top-bar__sidebar-button"]}
					onClick={toggleMenu}
					aria-label='Toggle sidebar'
					data-expanded={isOpen}
				>
					{/* <SidebarIcon isOpen={isOpen} /> */}
					{isOpen ? <SidebarOpen/> : <SidebarClose/>}
				</button>
			</div>

			{isSmallDevice ? <MobileMenu /> : <DesktopMenu />}

			<div className={styles["hero__frame-top-bar__about"]}>
				<AvatarDropdown />
			</div>
		</div>
	);
};

export default TopBar;
