"use client";

// Libs
import { useGSAP } from "@gsap/react";
import type React from "react";
import { useRef } from "react";

// Animations
import { paragraphAnimation } from "./animations";

// Styles
import "./styles.scss";

interface AnimatedParagraphProps {
	className?: string;
	children: React.ReactNode;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
	className,
	children,
}) => {
	const componentRef = useRef<HTMLParagraphElement | null>(null);

	useGSAP(
		() => {
			paragraphAnimation(componentRef?.current);
		},
		{ scope: componentRef },
	);

	return (
		<p
			className={
				className ? `animated-paragraph ${className}` : "animated-paragraph"
			}
			ref={componentRef}
		>
			{children}
		</p>
	);
};

export default AnimatedParagraph;
