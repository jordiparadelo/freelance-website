"use client";

import React, { useEffect } from "react";
// Styles
import styles from "../styles.module.scss";
// Context
import { useHero } from "@/context/HeroContext";
import { useScroll } from "@/context/ScrollContext";
import { useColorTheme } from "@/hooks/useColorTheme";
// Constants
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants";

const SideNav = () => {
	const { isOpen, setIsOpen } = useHero();
	const scrollTo = useScroll();
	const [theme, setColorTheme] = useColorTheme();

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				setIsOpen(false);
			} else if (
				isOpen &&
				NAV_LINKS[0].sections.some((link, index) => index + 1 === Number(e.key))
			) {
				const index = Number(e.key) - 1;
				scrollTo(NAV_LINKS[0].sections[index].href);
			}
		};

		if (isOpen) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, setIsOpen, scrollTo]);

	return (
		<aside
			className={styles["hero__frame-nav-wrapper"]}
			data-expanded={isOpen}
		>
			<nav className={styles["hero__frame-nav"]}>
				<div className={styles["hero__frame-nav__block"]}>
					<h2 className={styles["hero__frame-nav__title"]}>Navigation</h2>
					<ul className={styles["hero__frame-nav__list"]}>
						{NAV_LINKS[0].sections?.map((link, index) => {
							return (
								<li
									className={styles["hero__frame-nav__list-item"]}
									key={`nav-link-${link.key}`}
								>
									<a
										href={link.href}
										className={styles["hero__frame-nav__link"]}
										aria-label='Scroll to top'
										onClick={() => scrollTo(link.href)}
									>
										<span className={styles["hero__frame-nav__link-label"]}>
											{link.label}
										</span>
										<span className={styles["hero__frame-nav__link-index"]}>
											{index + 1}
										</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={styles["hero__frame-nav__block"]}>
					<h2 className={styles["hero__frame-nav__title"]}>Stay in Touch</h2>
					<ul className={styles["hero__frame-nav__list"]}>
						{SOCIAL_LINKS?.map((link) => {
							return (
								<li
									className={styles["hero__frame-nav__list-item"]}
									key={`nav-link-${link.id}`}
								>
									<a
										href={link.href}
										className={styles["hero__frame-nav__link"]}
									>
										<span>{link.title}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={styles["hero__frame-nav__block--switch-theme"]}>
					<button
						className={styles["hero__frame-nav__switch-button"]}
						onClick={() => setColorTheme("dark")}
						aria-label="Change to Dark theme"
						data-selected={theme === "dark"}
					>
						Dark
					</button>
					<button
						className={styles["hero__frame-nav__switch-button"]}
						onClick={() => setColorTheme("light")}
						aria-label="Change to Light theme"
						data-selected={theme === "light"}
					>
						Light
					</button>
				</div>
			</nav>
		</aside>
	);
};

export default SideNav;
