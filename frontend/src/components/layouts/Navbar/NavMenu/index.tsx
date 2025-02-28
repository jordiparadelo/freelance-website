'use client'

import Link from "next/link";
// Libs
import useMediaQuery from "@/hooks/useMediaQuery";
// Styles
import styles from "./styles.module.scss";

interface NavLink {
	key: string;
	href: string;
	label: string;
}

interface MenuProps {
	links?: NavLink[];
}

const DesktopMenu: React.FC<MenuProps> = ({ links }) => (
	<menu className={styles["navbar-menu"]}>
		{links?.map((link) => (
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

const MobileMenu: React.FC = () => (
	<menu className={styles["navbar-menu"]}>Menu</menu>
);

const NavMenu: React.FC<MenuProps> = ({ links }) => {
	const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

	// return <DesktopMenu />

	return isSmallDevice ? <MobileMenu /> : <DesktopMenu links={links} />;
};

export default NavMenu;
