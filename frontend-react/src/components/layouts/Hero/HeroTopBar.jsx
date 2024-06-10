import React from "react";
// Styles
import styles from "./styles.module.scss";
// Context
import { useHero } from "@/context/HeroContext";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
// Assets

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
				<path d='M22 12c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06C2 6.375 2 8.251 2 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12m-7.5-8.5v17M19 7h-1.5m1.5 4h-1.5' />
				<path d='m8 10l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L8 14' />
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
				<path d='M2 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 4.06 3.955C5.375 3 7.251 3 11 3h2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C22 6.375 22 8.251 22 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C18.625 21 16.749 21 13 21h-2c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C2 17.625 2 15.749 2 12m7.5-8.5v17M5 7h1.5M5 11h1.5' />
				<path d='m17 10l-1.226 1.057c-.516.445-.774.667-.774.943s.258.498.774.943L17 14' />
			</g>
		)}
	</svg>
);

const HeroTopBar = () => {
	const { isOpen, toggleMenu } = useHero();

	return (
		<div className={styles["hero__frame-top-bar"]}>
			<div className={styles["hero__frame-top-bar__actions"]}>
				<button
					className={styles["hero__frame-top-bar__sidebar-button"]}
					onClick={toggleMenu}
					aria-label='Toggle sidebar'
					aria-expanded={isOpen}
				>
					{/* <MySvg width="32" height="32" /> */}
					<SidebarIcon isOpen={isOpen} />
				</button>
			</div>
			<menu className={styles["hero__frame-top-bar__menu"]}>
				{NAV_LINKS.map(link => (
					<Link key={link.key} href={link.href} className={styles["hero__frame-top-bar__menu-link"]}>{link.label}</Link>
				))}
			</menu>
			<div className={styles["hero__frame-top-bar__about"]}>
				<div className={styles["hero__frame-top-bar__avatar"]}>
					{/* <Avatar /> */}
				</div>
			</div>
		</div>
	);
};

export default HeroTopBar;
