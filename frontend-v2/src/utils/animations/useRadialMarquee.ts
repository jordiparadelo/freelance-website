"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import GSDevTools from "gsap/GSDevTools";

import { useCallback, useEffect, useRef, useState } from "react";

import { useDebounceCallback, useWindowSize } from "usehooks-ts";

// Animation hook
const useRadialMarquee = (elementRef: React.RefObject<HTMLElement | null>) => {
	const [isTransitioning, setIsTransitioning] = useState(true);
	const [elementWidth, setElementWidth] = useState(
		elementRef?.current?.offsetWidth ?? 0,
	);
	const timeline = useRef<gsap.core.Timeline | null>(null);
	const { width: windowWidth } = useWindowSize();

	gsap.registerPlugin(GSDevTools);

	const elements = {
		items: [] as HTMLElement[],
	};

	const config = {
		offset: 10,
		duration: 120,
	};

	// Methods
	const pause = useCallback(() => {
		if (!timeline.current) return;
		timeline.current.pause();
		console.log("paused");
	}, []);

	const resume = useCallback(() => {
		if (!timeline.current) return;
		timeline.current.play();
		console.log("resumed");
	}, []);

	const setupItems = useCallback(() => {
		if (!elementRef.current?.children.length) return;

		const items = Array.from(elementRef.current.children);

		const itemLength = items.length;
		const radian = (Math.PI * 2) / itemLength;
		// Circle diameter = window width, radius = half of that
		const radius: number = elementRef?.current?.offsetWidth / 2 || 0;
		const centerAxis = elementRef?.current?.clientWidth / 2;

		// Wrapper gets positioning; inner card uses CSS to counter-rotate (stay facing front)
		// Rotation follows the arc: tangent angle = position angle + 90° (perpendicular to radius)
		gsap.set(items, {
			"--card-index": (index: number) => index + 1,
			"--card-length": (index: number) => itemLength,
			"--x": (index: number) =>
				Math.round(centerAxis + radius * Math.cos(index * radian)),
			"--y": (index: number) =>
				Math.round(centerAxis + radius * Math.sin(index * radian)),
			rotation: (index: number) => (index * 360) / itemLength - 90,
			left: (index: number) => centerAxis + radius * Math.cos(index * radian),
			top: (index: number) => centerAxis + radius * Math.sin(index * radian),
			xPercent: -50,
			yPercent: -50,
		});
	}, [elementRef]);

	const debouncedSetupItems = useDebounceCallback(() => {
		console.log("debouncedSetupItems");
		setupItems();
	}, 500);

	// Go to the next item
	const goToNextItem = useCallback(
		(index: number) => {
			if (!timeline.current || timeline.current?.duration() > 0) return;

			let nextIndex = index || undefined;

			if (index === elements.items.length - 1) {
				nextIndex = (index + 1) % elements.items.length;
			} else {
				nextIndex = timeline.current?.progress() + 1;
			}

			console.log("nextIndex", nextIndex);

			timeline.current?.progress(nextIndex / elements.items.length, true);
		},
		[elements.items.length],
	);

	const goToPreviousItem = useCallback(
		(index: number) => {
			if (!timeline.current || timeline.current?.duration() > 0) return;
			const previousIndex =
				(index - 1 + elements.items.length) % elements.items.length;
			timeline.current?.progress(previousIndex / elements.items.length, true);
		},
		[elements.items.length],
	);

	// Init

	useGSAP(
		() => {
			if (!elementRef.current) return;

			timeline.current = gsap.timeline({
				// onStart: () => setIsTransitioning(true),
				paused: true,
				defaults: {
					// repeat: -1,
					ease: "linear",
					duration: config.duration / elements.items.length,
				},
				id: "master-tl",
			});

			timeline.current
				.from(
					elementRef.current,
					{
						rotation: "-=20deg",
						width: "50vw",
						duration: 2,
						ease: "power2.inOut",
						onUpdate: () => {
							setupItems();
						},
					},
					"start",
				)
				.to(
					elementRef.current,
					{
						rotation: "+=360deg",
						duration: config.duration,
						ease: "linear",
						repeat: -1,
						onComplete: () => setIsTransitioning(false),
					},
					"-=0.25",
				)
				.play();

			GSDevTools.create({
				animation: timeline.current,
				label: "radial-marquee",
			});

			return () => {
				timeline.current?.kill();
			};
		},
		{ scope: elementRef, dependencies: [elementRef] },
	);

	// useEffect(() => {
	// 	setupItems();
	// }, [setupItems]);
	// Re-run setupItems when window size changes
	// biome-ignore lint/correctness/useExhaustiveDependencies: we need to re-run setupItems when window size changes
	useEffect(() => {
		if (!elementRef.current) return;
		setElementWidth(
			(
				document.querySelector(
					'[data-component="radial-marquee"]',
				) as HTMLElement
			)?.offsetWidth || 0,
		);
		debouncedSetupItems();
	}, [windowWidth]);

	return {
		timeline,
		pause,
		isTransitioning,
		resume,
		goToNextItem,
		goToPreviousItem,
	};
};

export default useRadialMarquee;
