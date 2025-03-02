"use client";

import { cn } from "@/lib/utils";

import React, { useRef } from "react";

import { useButtonAnimation } from "./animations";
import "./styles.scss";

interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref"> {
	children: React.ReactNode;
	href?: string;
	type?: "button" | "submit" | "reset";
	className?: string;
	variant?: "primary" | "secondary";
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	href,
	type = "button",
	className = "",
	variant = "primary",
	onClick,
	...props
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const anchorRef = useRef<HTMLAnchorElement>(null);
	const { onHoverEnter, onHoverLeave } = useButtonAnimation(href ? anchorRef : buttonRef);

	const commonProps = {
		className: cn("button", className, `button--${variant}`),
		onMouseEnter: onHoverEnter,
		onMouseLeave: onHoverLeave,
	};

	return href ? (
		<a
			href={href}
			ref={anchorRef}
			{...commonProps}
		>
			<span className='button__label'>{children}</span>
		</a>
	) : (
		<button
			type={type}
			ref={buttonRef}
			{...commonProps}
			{...props}
			{...onClick}
		>
			<span className='sr-only'>{children}</span>
			<span className='button__label' aria-hidden>{children}</span>
			<span className='button__label' aria-hidden>{children}</span>
		</button>
	);
};

export default Button;
