"use client";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function curveAnimation(component: React.RefObject<SVGElement | null>) {
	gsap.registerPlugin(ScrollTrigger, useGSAP, MorphSVGPlugin);

	useGSAP(
		() => {
			gsap.from("[data-curve='wavy']", {
				morphSVG: "[data-curve='flat']",
				scrollTrigger: {
					trigger: component.current,
					start: "top-=100% bottom",
					end: "bottom+=100% center",
					scrub: 1,
				},
			});
		},
		{
			scope: component,
		},
	);
}

// <svg width="1440" height="55" viewBox="0 0 1440 55" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M720 30H0V0H1440V30H720Z" fill="white" style="fill:white;fill-opacity:1;"/>
// </svg>
