import React from "react";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
// Context
import { useHero } from "@/context/HeroContext";
// Constants
import { NAV_LINKS } from "@/lib/constants";
// Components
import { AvatarDropdown } from "@/components/ui";


const SidebarIcon = ({ isOpen }) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		{isOpen ? (
			<g
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
				color='currentColor'
			>
				<path
					fill='currentColor'
					d='M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM18 5h-8v14h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1'
				/>
			</g>
		) : (
			<g
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
				color='currentColor'
			>
				<path
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16'
				/>
			</g>
		)}
	</svg>
);

{
	/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM18 5h-8v14h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16"/></svg> */
}

const HeroTopBar = () => {
	const { isOpen, toggleMenu } = useHero();

	return (
		<div className={styles["hero__frame-top-bar"]}>
			<div className={styles["hero__frame-top-bar__actions"]}>
				<button
					className={styles["hero__frame-top-bar__sidebar-button"]}
					onClick={toggleMenu}
					aria-label='Toggle sidebar'
					data-expanded={isOpen}
				>
					{/* <MySvg width="32" height="32" /> */}
					<SidebarIcon isOpen={isOpen} />
				</button>
			</div>
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
			<div className={styles["hero__frame-top-bar__about"]}>
				<AvatarDropdown/>
			</div>
		</div>
	);
};

export default HeroTopBar;
