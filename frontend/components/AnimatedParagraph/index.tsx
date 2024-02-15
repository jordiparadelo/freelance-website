"use client";

import React, { useRef } from "react";

// Libs
import { useGSAP } from "@gsap/react";

// Animations
import { paragraphAnimation } from "./animations";
import "./styles.scss";

type AnimatedParagraphType = {
	className?: string;
	children: string;
};

const AnimatedParagraph = ({ className, children }: AnimatedParagraphType) => {
	let componentRef = useRef(null);

	useGSAP(() => {
		paragraphAnimation(componentRef?.current!);
	});

	return (
		<p
			className={
				className ? "animated-paragraph" : `animated-paragraph ${className}`
			}
			ref={componentRef}
			aria-label={children}
		>
			{children}
		</p>
	);
};

export default AnimatedParagraph;
