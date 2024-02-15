"use client";

import React, { useRef } from "react";

// Libs
import { useGSAP } from "@gsap/react";

// Animations
import { paragraphAnimation } from "./animations";

// Styles
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
				className ? `animated-paragraph ${className}` : "animated-paragraph" 
			}
			ref={componentRef}
			aria-label={children}
		>
			{children}
		</p>
	);
};

export default AnimatedParagraph;
