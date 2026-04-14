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
