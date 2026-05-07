"use client";

import { useTransitionPage } from "@/lib/context/TransitionPageContext";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import TextPlugin from "gsap/TextPlugin";

import { type RefObject, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(MotionPathPlugin, TextPlugin);

export function loadingAnimation(selector: RefObject<HTMLElement | null>) {
	const timeline = useRef<gsap.core.Timeline | null>(null);

	const { setIsTransitioning } = useTransitionPage();

	useGSAP(
		() => {
			timeline.current?.kill();

			if (!timeline.current) {
				timeline.current = gsap.timeline({
					paused: true,
					onStart: () => setIsTransitioning(true),
					onComplete: () => {
						setIsTransitioning(false);
					},
					defaults: {
						duration: 5,
						ease: "power3.inOut",
					},
				});
			}

			timeline.current
				.from("[data-target='progress-circle'] #progress-path", {
					drawSVG: 0,
				})
				.to(
					"[data-target='progress-number']",
					{
						text: {
							value: "100",
							delimiter: "",
						},
					},
					"<",
				)
				.to(
					"[data-target='avatar']",
					{
						backgroundPositionX: "100%",
						ease: "steps(20)",
					},
					"<",
				)
				.to(selector.current, {
					yPercent: -100,
				});

			timeline.current.totalDuration(4);
		},
		{ scope: selector },
	);

	useLayoutEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		timeline.current?.play();
	}, []);
}
