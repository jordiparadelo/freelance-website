"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SELECTORS = {
	cover: '[data-target="cover"]',
	image: '[data-target="image"]',
	cursor: '[data-target="mouse-cursor"]',
} as const;

const CURSOR_MOTION = { duration: 0.25, ease: "power3" } as const;
const CURSOR_CONFIG = {
	mouseDistance: 24,
	motion: { duration: 0.25, ease: "power3" },
} as const;
const PARALLAX = { from: 10, to: -10 } as const;

export const useCardAnimation = (
	element: React.RefObject<HTMLElement | null>,
) => {
	useGSAP(
		() => {
			const root = element.current;
			if (!root) return;

			const cover = root.querySelector<HTMLElement>(SELECTORS.cover);
			const image = root.querySelector<HTMLElement>(SELECTORS.image);
			const cursor = root.querySelector<HTMLElement>(SELECTORS.cursor);
			if (!cover || !cursor) return;

			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;

			if (image && !prefersReducedMotion) {
				gsap.fromTo(
					image,
					{ yPercent: PARALLAX.from },
					{
						yPercent: PARALLAX.to,
						scrollTrigger: {
							trigger: root,
							start: "top bottom",
							end: "bottom top",
							scrub: true,
						},
					},
				);
			}

			if (prefersReducedMotion) return;

			gsap.set(cursor, { scale: 0, opacity: 0 });

			const moveX = gsap.quickTo(cursor, "x", CURSOR_CONFIG.motion);
			const moveY = gsap.quickTo(cursor, "y", CURSOR_CONFIG.motion);

			const moveCursor = (e: MouseEvent) => {
				const rect = cover.getBoundingClientRect();
				const w = cursor.offsetWidth;
				const h = cursor.offsetHeight;

				const minX = rect.width - w;
				const minY = rect.height - h;

				const xPos = e.clientX - rect.left + CURSOR_CONFIG.mouseDistance;
				const yPos = e.clientY - rect.top - h / 2;

				const x = gsap.utils.clamp(0, minX, xPos);
				const y = gsap.utils.clamp(0, minY, yPos);

				moveX(x);
				moveY(y);
			};

			const showUpTween = gsap.to(cursor, {
				scale: 1,
				opacity: 1,
				...CURSOR_CONFIG.motion,
				paused: true,
			});

			cover.onmouseenter = () => showUpTween?.play();
			cover.onmousemove = moveCursor;
			cover.onmouseleave = () => showUpTween?.timeScale(1.2).reverse();

			return () => {
				cover.onmouseenter = null;
				cover.onmousemove = null;
				cover.onmouseleave = null;
			};
		},
		{ scope: element },
	);
};
