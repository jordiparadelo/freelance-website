"use client";

import React, { useRef } from "react";

// Animations
import { buttonAnimation } from "./animations";
// Lib
import { useGSAP } from "@gsap/react";

// Styles
import "./styles.scss";

const Button = ({ children, href, type, className }) => {
	const componentRef = useRef(null);
	const timeline = useRef(null);

	useGSAP(
		() => {
			timeline.current = buttonAnimation(componentRef.current);
		},
		{ scope: componentRef }
	);

	const handleHover = (event) => {
		const EVENT_TYPE = {
			mouseenter: () => timeline?.current.play(),
			mouseleave: () => timeline?.current.reverse(),
		};

		EVENT_TYPE[event.type]();
	};

	return href ? (
		<a
			href={href}
			className={`button ${className || ""}`}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			type={type}
			ref={componentRef}
		>
			<span className='button__label'>{children}</span>
			<span className='button__label'>{children}</span>
		</a>
	) : (
		<button
			className={`button ${className || ""}`}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			type={type}
			ref={componentRef}
		>
			<span className='button__label' aria-label={children}>{children}</span>
			<span className='button__label' aria-hidden='true'>{children}</span>
		</button>
	);
};

export default Button;
