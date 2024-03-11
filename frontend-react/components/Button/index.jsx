"use client";

import React, { useRef } from "react";

// Animations
import { buttonAnimation } from "./animations";
// Lib
import { useGSAP } from "@gsap/react";

// Styles
import "./styles.scss";

const Button = ({ children, href, type = 'button', className = '', ...props })  => {
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

	const buttonProps = {
        className: `button ${className}`,
        onMouseEnter: handleHover,
        onMouseLeave: handleHover,
        ref: componentRef,
        ...props
    };

	return href ? (
		<a
			href={href}
			{...buttonProps}
		>
			<span className='button__label'>{children}</span>
			<span className='button__label'>{children}</span>
		</a>
	) : (
		<button
			type={type}
			{...buttonProps}
		>
			<span className='button__label' aria-label={children}>{children}</span>
			<span className='button__label' aria-hidden='true'>{children}</span>
		</button>
	);
};

export default Button;
