"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import {
	Draggable,
	InertiaPlugin,
	MotionPathPlugin,
	ScrollTrigger,
} from "gsap/all";

import { useRef } from "react";

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

// TODO: Clean functionality and refactor code
// Animation hook
const useRadialMarquee = (elementRef: React.RefObject<HTMLElement | null>) => {
	const { width } = useWindowSize();

	const rotationTimeline = useRef<gsap.core.Timeline | null>(null);

	useGSAP(
		() => {
			if (!elementRef.current) return;

			const elements = {
				container: elementRef.current,
				path: elementRef.current.querySelector<SVGPathElement>(
					"svg path",
				) as SVGPathElement,
				items: gsap.utils.toArray<HTMLDivElement>("div"),
			};

			const ROTATION_DURATION =
				(elements.items.length / elementRef.current.clientWidth) * 100 + 100;
			const SLOWMO_DURATION = ROTATION_DURATION * 2;

			const displayItems = () => {
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
				});
			};

			displayItems();

			// Single timeline for rotation - enables pause/resume and timeScale control
			rotationTimeline.current = gsap.timeline({ repeat: -1, paused: true });

			rotationTimeline.current
				.to(elements.container, {
					rotation: "+=360",

					ease: "none",
				})
				.duration(ROTATION_DURATION);

			const setRotationSpeed = (timescale: number) => {
				rotationTimeline.current?.duration(timescale);
			};

			const enterSlowMo = () => setRotationSpeed(SLOWMO_DURATION);
			const exitSlowMo = () => setRotationSpeed(ROTATION_DURATION);

			Draggable.create(elements.container, {
				type: "rotation",
				inertia: true,
				onDragStart: () => {
					rotationTimeline.current?.pause();
					console.log("drag start", rotationTimeline.current?.paused());
				},
				onThrowComplete: () => {
					rotationTimeline.current?.paused();
				},
			});

			// Slow-mo on mouse enter/leave - container mouseleave ensures we exit when leaving any item
			elements.container.addEventListener("mouseleave", exitSlowMo);
			elements.items.forEach((item) => {
				item.addEventListener("mouseenter", () => {
					enterSlowMo();
					gsap.to("body section:not(:hover)", {
						filter: "blur(10px)",
						duration: 0.5,
						ease: "power2.out",
					});
					gsap.to(item, {
						scale: 1.125,
						duration: 0.5,
						ease: "power2.out",
					});
				});
				item.addEventListener("mouseleave", () => {
					gsap.to("body section", {
						filter: "blur(0px)",
						duration: 0.5,
						ease: "power2.out",
						clearProps: true,
					});
					gsap.to(item, {
						scale: 1,
						duration: 0.5,
						ease: "power2.out",
					});
				});
			});

			// ScrollTrigger: pause when leaving viewport, resume when entering
			ScrollTrigger.create({
				trigger: elements.container.parentElement ?? elements.container,
				start: "top-=50% bottom",
				end: "bottom+=50% top",
				// markers: true,
				onLeave: () => rotationTimeline.current?.pause(),
				onEnterBack: () => rotationTimeline.current?.resume(),
				onEnter: () => rotationTimeline.current?.resume(),
				onLeaveBack: () => rotationTimeline.current?.pause(),
				onRefresh: (self) => {
					if (self.isActive) rotationTimeline.current?.resume();
				},
			});
		},
		{ scope: elementRef, dependencies: [width] },
	);
};

export default useRadialMarquee;
