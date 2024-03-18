"use client";

import React, { useRef } from "react";
// Next.js
import Image from "next/image";
import Link from "next/link";
// Libs
import { useGSAP } from "@gsap/react";
// Constants
import { SOCIAL_LINKS } from "@/constants";
// Component
import { Button, CopyToClipboard } from "@/components";
// Hooks
import usePageScroll from "@/hooks/usePageScroll";
// Animations
import { footerAnimation } from "./animations.js";
// Styles
import "./styles.scss";

const Footer = () => {
	const { scrollToElement } = usePageScroll();
	let componentRef = useRef(null);

	useGSAP(() => {
		footerAnimation(componentRef.current);
	}, { scope: componentRef.current });

	return (
		<footer className='footer' ref={componentRef}>
			<div className='footer__wrapper'>
				<div className='footer__contact'>
					<h2 className='footer__contact__title'>Let’s collaborate</h2>
					<Link
						href={"?modal=true&type=contact"}
						scroll={false}
					>
						<Button className='footer__contact__button'>Start Now</Button>
					</Link>
				</div>

				<div className='footer__work-links'>
					<div className='footer__work-links__content'>
						<h3 className='footer__work-links__content-title'>Whenever, wherever. We're meant to work together.</h3>
						<p>
							Get in touch with us for full-time job opportunities, freelance
							projects, design advice, or simply to say hello.
						</p>
					</div>
					<ul className='footer__work-links__list'>
						{SOCIAL_LINKS.map((link) => (
							<li
								key={link.href}
								className='footer__work-links__item'
							>
								<a
									href={link.href}
									target='_blank'
								>
									<div className='footer__work-links__item-avatar'>
										<Image
											src={link.icon.src}
											width={link.icon.width}
											height={link.icon.height}
											alt={link.title}
										/>
									</div>
									<div className='footer__work-links__item-title'>
										{link.title}
									</div>
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className='footer__useful-links'>
					<div className='footer__useful-links__col'>
						<p>Or email me at</p>
						<CopyToClipboard>hello@jordesign.com</CopyToClipboard>
					</div>

					<div className='footer__useful-links__row'>
						<div className='footer__useful-links__col --page-links'>
							<h5>Explore</h5>
							<ul className="footer__useful-links__list">
								<li>
									<Link href='/'>About me</Link>
								</li>
								<li>
									<Link href='/'>Projects</Link>
								</li>
								<li>
									<Link href='/'>Products</Link>
								</li>
							</ul>
						</div>
						<div className='footer__useful-links__col --page-links'>
							<h5>Say Hello!</h5>
							<ul className="footer__useful-links__list">
								<li>
									<Link href='/'>About me</Link>
								</li>
								<li>
									<Link href='/'>Projects</Link>
								</li>
								<li>
									<Link href='/'>Products</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='footer__bottom'>
				<div className='footer__copyright'>© {new Date().getFullYear()}</div>
				<a
					href='#'
					target='_blank'
					className='footer__download'
				>
					Download Design
				</a>
				<button
					className='footer__back-to-top'
					onClick={() => scrollToElement("body")}
				>
					back to top
				</button>
			</div>
		</footer>
	);
};

export default Footer;
