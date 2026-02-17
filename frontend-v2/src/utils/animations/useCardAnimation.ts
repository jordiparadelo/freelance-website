"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type React from "react";
import { useState } from "react";

import { useEventListener } from "usehooks-ts";

const useCardAnimation = (
	componentRef: React.RefObject<HTMLElement | null>,
) => {
	const [inView, setInView] = useState<boolean>(false);

	// Methods
	const handleMouseMove = (event: MouseEvent) => {
		const target = componentRef.current as HTMLElement;

		const { clientX, clientY } = event;
		const { width, left, top } = target.getBoundingClientRect();
		const glowSize = width / 2;

		const moveX = clientX - left - glowSize;
		const moveY = clientY - top - glowSize;

		gsap.to(target, {
			"--x": moveX,
			"--y": moveY,
			duration: 0.1,
		});
	};

	// Mouse Event
	useEventListener("mousemove", handleMouseMove);
};

export default useCardAnimation;
