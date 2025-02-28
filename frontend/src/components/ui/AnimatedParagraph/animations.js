// Libs
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitType from "split-type";

export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };
gsap.registerPlugin(ScrollTrigger);

export const paragraphAnimation = (element) => {
	const splitWords = new SplitType(element, { types: "words" }); // Splitting({ target: element, by: "words" });

	const scrollTriggerElement = element.closest("section");
	// const words = element?.querySelectorAll(".word");

	gsap.set(splitWords.words, { opacity: 0 });

	const animation = gsap.to(splitWords.words, {
		opacity: 1,
		delay: (index) => 0.1 * index,
		scrollTrigger: {
			scrub: true,
			trigger: scrollTriggerElement,
			start: "top center",
			end: "bottom center",
		},
	});

	return animation;
};
