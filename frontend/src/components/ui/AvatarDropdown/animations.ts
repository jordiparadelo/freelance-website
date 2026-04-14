"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import { type RefObject, useRef } from "react";

type ButtonSize = {
	width: number;
	height: number;
};

const useDropdownAnimation = (selector: RefObject<HTMLElement | null>) => {
	gsap.registerPlugin(useGSAP);
	const timeline = useRef<gsap.core.Timeline | null>(null);
	const buttonSize = useRef<ButtonSize | null>(null);

	useGSAP(
		() => {
			const elements = {
				button: selector.current?.querySelector("[data-target='button']"),
				menu: selector.current?.querySelector("[data-target='menu']"),
			};

			if (!timeline.current) {
				timeline.current = gsap.timeline({
					paused: true,
					defaults: {
						duration: 0.5,
						ease: "power3.inOut",
					},
				});
			}

			if (!elements.button || !elements.menu) return;

			if (buttonSize.current === null) {
				buttonSize.current = {
					width: elements.button.clientWidth,
					height: elements.button.clientHeight,
				};
			}

			timeline.current
				.fromTo(
					elements.button,
					{
						minWidth: `${buttonSize.current.width}px`,
					},
					{
						minWidth: `${elements.menu.clientWidth}px`,
					},
				)
				.fromTo(
					selector.current,
					{
						"--background-size": `${buttonSize.current.height}px`,
					},
					{
						"--background-size": `${buttonSize.current.height + elements.menu.clientHeight}px`,
					},
					"-=0.125",
				)
				.from(
					elements.menu.children,
					{
						yPercent: -50,
						opacity: 0,

						stagger: 0.05,
					},
					"<",
				);
		},
		{
			scope: selector,
		},
	);

	const openMenu = () => {
		timeline.current && timeline.current.play();
	};
	const closeMenu = () => {
		timeline.current && timeline.current.reverse();
	};

	return {
		openMenu,
		closeMenu,
	};
};

export default useDropdownAnimation;
