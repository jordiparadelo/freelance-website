"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
	children: React.ReactNode;
	href?: string;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, type = 'button', className = '', ...props }) => {
	return href ? (
		<a
			href={href}
			className={cn("button", className)}
		>
			<span className="button__label">{children}</span>
		</a>
	) : (
		<button
			type={type}
			className={cn("button", className)}
			{...props}
		>
			<span className="button__label">{children}</span>
		</button>
	);
};

export default Button;
