"use client";

import React, { useRef, MouseEvent } from "react";

// Animations
import { buttonAnimation } from "./animations";
// Lib
import { useGSAP } from "@gsap/react";

// Styles
import "./styles.scss";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
	children: React.ReactNode;
	href?: string;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, type = 'button', className = '', ...props }) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const anchorRef = useRef<HTMLAnchorElement>(null);
	const timeline = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			const element = href ? anchorRef.current : buttonRef.current;
			if (element) {
				timeline.current = buttonAnimation(element);
			}
		},
		{ scope: href ? anchorRef : buttonRef }
	);

	const handleHover = (event: MouseEvent<HTMLElement>) => {
		const EVENT_TYPE = {
			mouseenter: () => timeline?.current?.play(),
			mouseleave: () => timeline?.current?.reverse(),
		} as const;

		EVENT_TYPE[event.type as keyof typeof EVENT_TYPE]();
	};

	const commonProps = {
		className: `button ${className}`,
		onMouseEnter: handleHover,
		onMouseLeave: handleHover,
	};

	return href ? (
		<a
			href={href}
			ref={anchorRef}
			{...commonProps}
		>
			<span className='button__label'>{children}</span>
			<span className='button__label'>{children}</span>
		</a>
	) : (
		<button
			type={type}
			ref={buttonRef}
			{...commonProps}
			{...props}
		>
			<span className='button__label'>{typeof children === 'string' ? children : undefined}</span>
			<span className='button__label' aria-hidden='true'>{children}</span>
		</button>
	);
};

export default Button;
