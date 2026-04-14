"use client";

// Libs
import type React from "react";
import { useRef } from "react";
// Animations
import useParagraphAnimation from "./animations";
// Styles
import styles from "./styles.module.css";

interface AnimatedParagraphProps {
	className?: string;
	children: React.ReactNode;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
	className,
	children,
}) => {
	const componentRef = useRef<HTMLParagraphElement | null>(null);

	useParagraphAnimation(componentRef);

	return (
		<p
			className={
				className
					? `${styles["animated-paragraph"]} ${className}`
					: styles["animated-paragraph"]
			}
			ref={componentRef}
		>
			{children}
		</p>
	);
};

export default AnimatedParagraph;
