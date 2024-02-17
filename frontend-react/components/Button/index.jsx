"use client";

import React, { ReactNode, useLayoutEffect, useRef } from "react";

import SplitType from "split-type";
import gsap from "gsap";

// Animations
import { buttonAnimation } from "./animations";
// Lib
import { useGSAP } from "@gsap/react";

// Styles
import "./styles.scss";

const Button = ({ children, href, type, className }) => {
	const componentRef = useRef(null);
	const timeline = useRef(null);

	// useLayoutEffect(() => {
	// 	if (componentRef) return;
	// 	// animationRef = buttonAnimation(componentRef.current)
	// }, [componentRef]);

	// useGSAP(
	// 	(context) => {
	// 		timeline.current = gsap.timeline({ paused: true });
	// 		const label = componentRef.current?.querySelectorAll(".button__label");

	// 		const splitWords = new SplitType(label, { types: "chars" });

	// 		timeline.current
	// 			.to(splitWords.elements, {
	// 				transform: "translateY(-50%)",
	// 				// opacity: (index) => index * 1,
	// 				duration: 0.5,
	// 				ease: "power1.inOut",
	// 				stagger: 0.01,
	// 			}, 'slideUp')
	// 			.to(splitWords.chars, {
	// 				transform: "translateY(-50%)",
	// 				// opacity: 0,
	// 				duration: 0.3,
	// 				ease: "power1.inOut",
	// 				stagger: 0.01,
	// 			}, 'slideUp');
	// 	},
	// 	{ scope: componentRef }
	// );

	useGSAP(() => {
		timeline.current = buttonAnimation(componentRef.current);
	  }, { scope: componentRef });

	// const { playAnimation, reverseAnimation } = useButtonAnimation(componentRef.current);

	const handleHover = (event) => {
		const EVENT_TYPE = {
			mouseenter: () => timeline?.current.play(),
			mouseleave: () => timeline?.current.reverse(),
		};

		EVENT_TYPE[event.type]();
	};

	return (
		<button
			className={`button ${className || ""}`}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			type={type}
			ref={componentRef}
		>
			<span className='button__label'>{children}</span>
			<span className='button__label'>{children}</span>
		</button>
	);
};

export default Button;
