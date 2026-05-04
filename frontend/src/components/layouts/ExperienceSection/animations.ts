"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

import { type RefObject, useRef } from "react";

import { useWindowSize } from "usehooks-ts";

import { useExperience } from "./ExperienceProvider";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const animateTableScroll = (
	selector: RefObject<HTMLDivElement | null>,
) => {
	const { setActiveExperience } = useExperience();
	const width = useWindowSize();
	const scrollDirection = useRef<number | null>(null);

	useGSAP(
		() => {
			const { current: target } = selector;
			const listEl = target?.querySelector<HTMLDivElement>(
				"[data-target='body']",
			);
			const rowsEl = target?.querySelectorAll<HTMLDivElement>(
				"[data-target='row']",
			);
			if (!rowsEl?.length) return;

			ScrollTrigger?.create({
				id: "list_scroll",
				trigger: listEl,
				start: "top center",
				end: "bottom center",
				onToggle: ({ isActive, direction }) => {
					if (!isActive && direction === -1) {
						setActiveExperience(null);
					}
					scrollDirection.current = direction;
				},
			});

			rowsEl.forEach((row, index) => {
				ScrollTrigger?.create({
					id: "row_scroll",
					trigger: row,
					start: "top center",
					end: "bottom center",
					onEnter: () => setActiveExperience(index),
					onEnterBack: () => setActiveExperience(index),
					onUpdate: ({ progress }) => {
						gsap.to(row, {
							// opacity: progress,
							css: { "--progress": `${progress * 100}` },
						});
					},
					//   markers: true,
				});
			});
		},
		{ scope: selector, dependencies: [width] },
	);
};

export const animateYearsScroll = (
	selector: RefObject<HTMLDivElement | null>,
) => {
	const { activeExperience } = useExperience();
	useGSAP(
		() => {
			const { current: target } = selector;
			const yearsDefault = target?.querySelector<HTMLDivElement>(
				'[data-target="years-default"]',
			);
			if (!yearsDefault) return;

			gsap.to(yearsDefault, {
				yPercent: activeExperience !== null ? -100 : 0,
				opacity: activeExperience !== null ? 0 : 1,
				filter: activeExperience !== null ? "blur(20px)" : "blur(0px)",
				ease: "power3.out",
			});
		},
		{ scope: selector, dependencies: [activeExperience] },
	);
};
