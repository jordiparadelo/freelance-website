"use client";

import React, { useRef } from "react";

// Libs
import { useGSAP } from "@gsap/react";

// Animations
import { paragraphAnimation } from "./animations";

// Styles
import "./styles.scss";

interface AnimatedParagraphProps {
	className?: string;
	children: React.ReactNode;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ className, children }) => {
	const componentRef = useRef<HTMLParagraphElement | null>(null);

	useGSAP(() => {
		paragraphAnimation(componentRef?.current);
	}, {scope: componentRef});

	return (
		<p
			className={
				className ? `animated-paragraph ${className}` : "animated-paragraph" 
			}
			ref={componentRef}
			aria-label={typeof children === 'string' ? children : undefined}
		>
			{children}
		</p>
	);
};

export default AnimatedParagraph;
