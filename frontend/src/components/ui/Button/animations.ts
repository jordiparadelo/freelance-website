"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import SplitType from "split-type";

// Animation constants
const BUTTON_ANIMATION = {
	defaults: {
		ease: "var(--anim-easing)",
		duration: 0.5,
		stagger: 0.01,
	},
} as const;

// Animation hook
export const useButtonAnimation = (
	elementRef: React.RefObject<HTMLElement | null>
) => {
	const timeline = gsap.timeline({
		paused: true,
	});

	useGSAP(
		() => {
			if (!elementRef.current) return;

			const labels =
				elementRef.current.querySelectorAll<HTMLElement>(".button__label");

			console.log({ labels });

			labels.forEach((label, index) => {
				const splitChars = new SplitType(label, { types: "chars" });

				if (index === 0) {
					timeline
						.to(
							splitChars.chars,
						{
							...BUTTON_ANIMATION.defaults,
							transform: "translateY(-100%)",
							opacity: 0,
						},
						"slideUp"
					);
				} else {
					timeline.from(
						splitChars.chars,
						{
							...BUTTON_ANIMATION.defaults,
							transform: "translateY(100%)",
							opacity: 0,
						},
						"slideUp"
					);
				}
			});
		},
		{ scope: elementRef }
	);

	return {
		onHoverEnter: () => timeline.play(),
		onHoverLeave: () => timeline.reverse(),
	};
};
