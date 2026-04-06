"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import {
	Draggable,
	InertiaPlugin,
	MotionPathPlugin,
	ScrollTrigger,
} from "gsap/all";

import { useCallback, useRef, useState } from "react";

import { useWindowSize } from "usehooks-ts";

// Register plugin once
if (typeof window !== "undefined") {
	gsap.registerPlugin(
		MotionPathPlugin,
		Draggable,
		InertiaPlugin,
		ScrollTrigger,
	);
}

// Animation hook
const useRadialMarquee = (elementRef: React.RefObject<HTMLElement | null>) => {
	const { width } = useWindowSize();

	const [radialReady, setRadialReady] = useState(false);

	const rotationTween = useRef<gsap.core.Tween | null>(null);
	const mouseEventAnimation = useRef<gsap.core.Timeline | null>(null);

	const displayItemsRadial = useCallback(() => {
		if (!elementRef.current) return;

		const elements = {
			path: elementRef.current.querySelector<SVGPathElement>(
				"svg path",
			) as SVGPathElement,
			items:
				elementRef.current.querySelectorAll<HTMLDivElement>(
					`[data-target="item"]`,
				),
		};

		return gsap.set(elements.items, {
			perspectiveOrigin: "center",
			perspective: 100,
			motionPath: {
				path: elements.path,
				align: elements.path,
				alignOrigin: [0.5, 0.5],
				end: (index: number) => index / elements.items.length,
				autoRotate: 180,
			},
			onStart: () => setRadialReady(false),
			onComplete: () => setRadialReady(true),
		});
	}, [elementRef]);

	// User Events
	const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
		const target = event.currentTarget;
		const notParentSection = document.querySelectorAll<HTMLElement>(
			"section:not(section:hover)",
		);

		// mouseEventAnimation.current?.kill();

		mouseEventAnimation.current = gsap.timeline({
			paused: true,
			defaults: { duration: 0.5, ease: "power3.inOut" },
		});

		mouseEventAnimation.current
			.fromTo(
				notParentSection,
				{
					filter: "blur(0px)",
				},
				{
					filter: "blur(10px)",
				},
			)
			.fromTo(
				target,
				{
					delay: 0.25,
					scale: 1,
				},
				{
					scale: 1.125,
				},
				"<",
			);

		mouseEventAnimation.current?.play();
		rotationTween.current?.timeScale(0.35);
	};

	const handleMouseLeave = () => {
		mouseEventAnimation.current.reverse();

		rotationTween.current?.timeScale(1);
	};

	// Adapt the radial when window size changes
	useGSAP(
		() => {
			if (!elementRef.current) return;

			displayItemsRadial();
		},
		{ dependencies: [width] },
	);

	// Run the radial animation
	useGSAP(
		() => {
			if (!elementRef.current || !radialReady) return;

			rotationTween.current = gsap.to(elementRef.current, {
				rotation: `+=360`,
				ease: "none",
				duration: 30,
				repeat: -1,
			});

			// rotationTimeline.current.play();
		},
		{ dependencies: [elementRef, radialReady] },
	);

	// Init Draggable
	useGSAP(() => {
		Draggable.create(elementRef.current, {
			type: "rotation",
			inertia: true,
			onDragStart: () => {
				setRadialReady(false);
			},
			onThrowComplete: () => {
				setRadialReady(true);
			},
		});
	}, [elementRef]);

	return {
		handleMouseEnter,
		handleMouseLeave,
	};
};

export default useRadialMarquee;
