"use client";

// Libs
import type React from "react";
import { useRef } from "react";

// Styles
import styles from "@/styles/AnimatedParagraph.module.css";

// Animations
import { useParagraphAnimation } from "@/utils/animations";

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
