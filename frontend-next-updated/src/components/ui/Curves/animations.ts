import { gsap } from "gsap";

export function curveAnimation(component: SVGSVGElement | null): void {
	if (!component) return;

	const path = component.querySelector("path");
	if (!path) return;

	gsap.to(path, {
		duration: 1,
		ease: "power2.inOut",
		attr: {
			d: "M1450 30c-207 16-458 25-730 25-273 0-523-9-720-25V0h1440v30Z"
		}
	});
} 