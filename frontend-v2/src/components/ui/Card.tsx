"use client";

import { useRef } from "react";
import styles from "@/styles/Card.module.css";
import { useCardAnimation } from "@/utils/animations";

interface CardProps {
	children: React.ReactNode;
	className?: string;
	corners?: "small" | "medium" | "large";
	href?: string;
}

const Card = ({ children, className, corners = "medium", href }: CardProps) => {
	const componentRef = useRef<HTMLAnchorElement | null>(null);
	// Props for the card
	const props = {
		className: `${styles["card"]} ${className}`,
		href: href ? href : undefined,
		"data-corners": corners,
		ref: componentRef,
	};

	// Animations
	useCardAnimation(componentRef);

	const content = () => (
		<div className={styles["card__layout"]}>{children}</div>
	);

	return href ? (
		<a {...props}>{content()}</a>
	) : (
		<figure {...props}>{content()}</figure>
	);
};

export default Card;
