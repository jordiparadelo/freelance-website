"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import { useEffect, useRef, useState } from "react";

const useTabsAnimation = (
	componentRef: React.RefObject<HTMLDivElement | null>,
) => {
	const [activeTab, setActiveTab] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const previousTabRef = useRef(activeTab);
	const masterTl = useRef<gsap.core.Timeline | null>(null);

	const handleTabChange = (index: number) => {
		previousTabRef.current = activeTab;
		setActiveTab(index);
	};

	const animationTween = (index: number): gsap.core.Timeline | null => {
		if (!componentRef.current) return null;

		const timeline = gsap.timeline({ paused: true });

		const target = componentRef.current.querySelector<HTMLDivElement>(
			`[data-tab-index="${index}"]`,
		);
		if (!target) return null;

		const elements = {
			title: target.querySelector<HTMLDivElement>(".tabs__item-title"),
			description: target.querySelector<HTMLDivElement>(
				".tabs__item-description",
			),
			image: target.querySelector<HTMLDivElement>("[data-tab-image]"),
		};

		const textTargets = [elements.title, elements.description].filter(
			Boolean,
		) as HTMLDivElement[];

		timeline.fromTo(
			textTargets,
			{ opacity: 0, yPercent: 100, filter: "blur(10px)" },
			{ opacity: 1, yPercent: 0, filter: "blur(0px)" },
		);

		if (elements.image) {
			timeline.fromTo(
				elements.image,
				{ opacity: 0, scale: 0.5, filter: "blur(10px)" },
				{ opacity: 1, scale: 1, filter: "blur(0px)" },
				"<",
			);
		}

		return timeline;
	};

	useGSAP(
		() => {
			// TODO: Set Initial State
		},
		{
			scope: componentRef,
		},
	);

	useGSAP(
		() => {
			if (!componentRef.current) return;

			if (!masterTl.current) {
				masterTl.current = gsap.timeline({
					paused: true,
					onStart: () => setIsTransitioning(true),
					onComplete: () => setIsTransitioning((prev) => !prev),
				});
			}

			const previousTween = animationTween(previousTabRef.current);
			const activeTween = animationTween(activeTab);

			if (!previousTween || !activeTween) return;

			masterTl.current
				.add(previousTween.reverse(0))
				.add(activeTween.play(0), "-=0.125")
				.play();
		},
		{
			scope: componentRef,
			dependencies: [activeTab],
			revertOnUpdate: true,
		},
	);

	return {
		activeTab,
		setActiveTab,
		handleTabChange,
		isTransitioning,
	};
};

export default useTabsAnimation;
