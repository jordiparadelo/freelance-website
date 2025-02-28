import { animate } from "framer-motion";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion"


gsap.registerPlugin(ScrollTrigger, Draggable);

export function reviewAnimation(element) {
    const target = element
	const wrapper = target.querySelector(".reviews-list__wrapper");
	const children = Array.from(wrapper.children);
	const timeline = gsap.timeline({ paused: true });

	const xDisplacement = element.clientWidth - wrapper.clientWidth;

	// timeline.to(wrapper, {
	// 	x: xDisplacement,
	// });

    // ScrollTrigger.create({
    //     trigger: target,
    //     start: `top bottom`,
    //     end: `bottom+=${window.innerHeight}px bottom`,
    //     animation:timeline, 
    //     markers: true,
	// 	scrub: 1,
    //   });

    initDraggable(wrapper, target, timeline)

	return timeline;
}

function initDraggable(dragElement, bounds, animation) {
	if (!dragElement) return;

	const options = {
		type: "x",
		bounds: bounds,
		inertia: true,
		// onDrag: function (e) {
        //     const seekProgression = e.x / bounds.clientWidth
        //     console.log({seekProgression, e});
		// 	animation.progress(seekProgression);
		// },
	};

    Draggable.create(dragElement, options);
}