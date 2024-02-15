// Libs
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Splitting from "splitting";

export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };
gsap.registerPlugin(ScrollTrigger);


export const paragraphAnimation = (element: Element) => {
	// Splitting({ target: element, by: "words" });

	const scrollTriggerElement = element.closest("section");
	const words = element?.querySelectorAll(".word");

	gsap.set(words, { opacity: 0 });

	const animation = gsap.to(words, {
		opacity: 1,
		delay: (index) => 0.1 * index,
		scrollTrigger: {
			scrub: true,
			trigger: scrollTriggerElement,
			start: "top center",
			end: "bottom center",
		},
	});

	return animation
};