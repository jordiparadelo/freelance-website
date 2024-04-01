import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectsAnimation = (element) => {
	const listItems = Array.from(element.children);

	// Timeline
	const masterTl = gsap.timeline();

	// Animations

	listItems.forEach((item, index) => {
		let animation = gsap.timeline();

		animation.from(item, {
			opacity: 0.5,
			scale: 0.8,
		}).to(item, {
			scale: 0.8,
		})

		ScrollTrigger.create({
			id: `list-timeline-${index}`,
			animation: animation,
			trigger: item,
			start: `top-=${window.innerHeight} center`,
			end: `bottom+=${window.innerHeight} center`,
			scrub: true,
		});

		masterTl.add(animation)
	});
	
	return masterTl;
};
