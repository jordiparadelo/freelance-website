// hooks/useLenis.js
import Lenis from "@studio-freight/lenis";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASING_FN = {
	lenisDefault: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
};

const lenisConfig = {
    limitCallbacks: true,
    duration: 1.2,
    easing: EASING_FN.lenisDefault,
};

const useLenis = () => {
	useEffect(() => {
		const lenis = new Lenis({
			...lenisConfig
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		lenis.on("scroll", ScrollTrigger.update); // Update ScrollTrigger on Lenis scroll

		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value) {
				return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
		});

		ScrollTrigger.addEventListener("refresh", () => lenis.resize());
		ScrollTrigger.refresh();

		return () => {
			lenis.destroy();
			ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
		};
	}, []);
};

export default useLenis;
