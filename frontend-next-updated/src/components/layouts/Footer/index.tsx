"use client";

import React, { useRef, Suspense, lazy } from "react";
// Libs
import { useGSAP } from "@gsap/react";
// Constants
import { SOCIAL_LINKS, ABOUT } from "@/lib/constants";
// Component
import { ContactButton, CopyToClipboard } from "@/components/ui";
const GridBackground = lazy(() => import("../../ui/GridBackground"));
// Hooks
import usePageScroll from "@/hooks/usePageScroll";
// Animations
import { footerAnimation } from "./animations.js";
// Styles
import styles from "./styles.module.scss";

const Footer = () => {
	const { scrollToElement } = usePageScroll();
	const componentRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			if (componentRef.current) {
				footerAnimation(componentRef.current);
			}
		},
		{ scope: componentRef }
	);

	return (
		<footer
			className={styles["footer"]}
			ref={componentRef}
		>
			<div className='padding-global'>
				<div className='container'>
					<div className={styles["footer__layout"]}>
						{/* Banner */}

						<div className={styles["footer__banner"]}>
							<Suspense>
								<GridBackground className={styles["footer__background"]} />
							</Suspense>

							<div className={styles["footer__banner__layout"]}>
								<h2 className={styles["footer__banner__title"]}>
									Let&apos;s create something great together
								</h2>
								<ContactButton>Get in touch</ContactButton>

								<div className={styles["footer__banner__actions"]}>
									<p className='text-size-small'> Or reach me by email at</p>
									<CopyToClipboard>{ABOUT.contact[0].label}</CopyToClipboard>
								</div>

								{/* Social links */}

								<ul className={styles["footer__social-link-list"]}>
									{SOCIAL_LINKS.map((link) => (
										<li
											key={link.href}
											className={styles["footer__social-link-list-item"]}
										>
											<a
												href={link.href}
												target='_blank'
												className={styles["footer__social-link"]}
											>
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Bottom */}

						<div className={styles["footer__bottom"]}>
							<div className={styles["footer__copyright"]}>
								© {new Date().getFullYear()}
							</div>
							<button
								onClick={() => scrollToElement("body")}
							>
								Back to Top
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
