"use client";

import Lenis from "@studio-freight/lenis";

import React, { createContext, useContext, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext(null);

export const useScroll = () => {
	return useContext(ScrollContext);
};

const EASING_FN = {
	lenisDefault: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
};

const lenisConfig = {
	limitCallbacks: true,
	duration: 1.2,
	easing: EASING_FN.lenisDefault,
};

const ScrollProvider = ({ children }) => {
	let lenis = useRef(null);

	useEffect(() => {
		// Initialize Lenis
		lenis.current = new Lenis({
			...lenisConfig,
		});

		// Animation frame function to update Lenis
		function raf(time) {
			lenis.current.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
		lenis.current.on("scroll", ScrollTrigger.update); // Update ScrollTrigger on Lenis scroll

		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value) {
				return arguments.length ? lenis.current.scrollTo(value) : lenis.current.scroll;
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

		ScrollTrigger.addEventListener("refresh", () => lenis.current.resize());
		ScrollTrigger.refresh();

		// Clean up Lenis on component unmount
		return () => {
			lenis.current.destroy();
			ScrollTrigger.removeEventListener("refresh", () => lenis.current.resize());
			console.log("Lenis destroyed");
		};
	}, [lenis]);

	// Scroll to function
	const scrollTo = (target, options) => {
		lenis.current.scrollTo(target, options);
	};

	return (
		<ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>
	);
};

export default ScrollProvider;
