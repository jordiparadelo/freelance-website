"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type React from "react";

import { useEventListener } from "usehooks-ts";

const useCardAnimation = (
	componentRef: React.RefObject<HTMLElement | null>,
) => {
	// Methods
	const handleMouseMove = (event: MouseEvent) => {
		const target = componentRef.current as HTMLElement;

		const { clientX, clientY } = event;
		const { width, left, top } = target.getBoundingClientRect();
		const glowSize = width / 2;

		const moveX = clientX - left - glowSize;
		const moveY = clientY - top - glowSize;

		console.log({ target, clientX, clientY, moveX, moveY });

		gsap.to(target, {
			"--x": moveX,
			"--y": moveY,
			// "--x": clientX - centerX,
			// "--y": clientY - centerX,
			duration: 0.1,
		});
	};

	// Mouse Event
	useEventListener("mousemove", handleMouseMove, document);

	useGSAP(
		() => {
			if (!componentRef.current) return;
			console.log(componentRef.current);
		},
		{ scope: componentRef },
	);
};

export default useCardAnimation;
