import React from "react";
import Image from "next/image";
import { Button } from "@/components";
import { SOCIAL_LINKS } from "@/constants";
import "./styles.scss";

const Footer = () => {
	return (
		<footer className='footer'>
				<div className='footer__wrapper'>
					<ul className='footer__social-links'>
						{SOCIAL_LINKS.map((link) => (
							<li
								key={link.href}
								className='footer__social-links__item'
							>
								<a
									href={link.href}
									target='_blank'
								>
									<div className='footer__social-links__item-avatar'>
										<Image
											src={link.icon.src}
											width={link.icon.width}
											height={link.icon.height}
											alt={link.title}
										/>
									</div>
									<div className='footer__social-links__item-title'>
										{link.title}
									</div>
								</a>
							</li>
						))}
						<li className='footer__social-links__item'>
							<button>Book a Meeting</button>
						</li>
					</ul>
					<div className='divider'></div>
					<div className='footer__contact'>
						<h2 className='footer__contact__title'>Let’s collaborate</h2>
						<Button className='footer__contact__button'>Start Now</Button>
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
					<button className='footer__back-to-top'>back to top</button>
				</div>
		</footer>
	);
};

export default Footer;
