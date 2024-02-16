"use client";

import React, { ReactNode, useRef } from "react";

// Animations
import { useButtonAnimation } from "./animations";

// Styles
import "./styles.scss";

type ButtonProps = {
	children?: ReactNode;
	secondLabel?: string;
	href?: string;
	type?: "submit" | "reset" | "button" | undefined;
	className?: string | "";
};

const Button = ({ children, href, type, className }: ButtonProps) => {
	const componentRef = useRef(null);
	
	const { playAnimation, reverseAnimation } = useButtonAnimation(componentRef.current!);

	return (
		<button
			className={`button ${className || ""}`}
			onMouseEnter={playAnimation}
			onMouseLeave={reverseAnimation}
			type={type}
			ref={componentRef}
		>
			<span className='button__label'>{children}</span>
			<span className='button__label'>{children}</span>
		</button>
	);
};

export default Button;
