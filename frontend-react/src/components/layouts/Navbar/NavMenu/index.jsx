'use client'

import Link from "next/link";
// Libs
import useMediaQuery  from "@/hooks/useMediaQuery";
// Constants
import { NAV_LINKS } from "@/lib/constants";
// Styles
import styles from "./styles.module.scss";

const DesktopMenu = () => (
	<menu className={styles["navbar-menu"]}>
		{NAV_LINKS.map((link) => (
			<Link
				key={link.key}
				href={link.href}
				className={styles["navbar-menu__link"]}
			>
				{link.label}
			</Link>
		))}
	</menu>
);
const MobileMenu = () => <menu className={styles["navbar-menu"]}>Menu</menu>;

const NavMenu = () => {
	const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)")

	// return <DesktopMenu />

	return isSmallDevice ? <MobileMenu /> : <DesktopMenu />;
};

export default NavMenu;
