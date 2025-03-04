"use client";

import gsap from "gsap";

import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import React, { createContext, useContext, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface LenisOptions {
	duration?: number;
	easing?: (t: number) => number;
}

interface ScrollContextType {
	lenis: Lenis | null;
	scrollTo: (target: string | number | HTMLElement, options?: LenisOptions) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error("useScroll must be used within a ScrollProvider");
	}
	return context;
};

const EASING_FN = {
	lenisDefault: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
};

const lenisConfig = {
	limitCallbacks: true,
	duration: 1.2,
	easing: EASING_FN.lenisDefault,
};

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
	const lenis = useRef<Lenis | null>(null);

	useEffect(() => {
		// Initialize Lenis
		lenis.current = new Lenis({
			...lenisConfig,
			smoothWheel: true,
		});

		// Animation frame function to update Lenis
		function raf(time: number) {
			if (lenis.current) {
				lenis.current.raf(time);
				requestAnimationFrame(raf);
			}
			ScrollTrigger.update();
		}

		requestAnimationFrame(raf);
		// lenis.current.on("scroll", ScrollTrigger.update); // Update ScrollTrigger on Lenis scroll

		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value: number | undefined) {
				return arguments.length ? lenis.current?.scrollTo(value || 0) : lenis.current?.scroll;
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

		ScrollTrigger.addEventListener("refresh", () => lenis.current?.resize());
		ScrollTrigger.refresh();

		// Clean up Lenis on component unmount
		return () => {
			if (lenis.current) {
				lenis.on
					ScrollTrigger.removeEventListener("refresh", () => lenis.current?.resize());
				lenis.current.destroy();
			}
		};
	}, []); // Remove lenis.current from dependencies

	// Scroll to function
	const scrollTo = (target: string | number | HTMLElement, options?: LenisOptions) => {
		if (lenis.current) {
			lenis.current.scrollTo(target, options);
		}
	};

	return (
		<ScrollContext.Provider value={{ lenis: lenis.current, scrollTo }}>
			{children}
		</ScrollContext.Provider>
	);
};

export default ScrollProvider;
