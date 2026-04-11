"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import { type RefObject, useLayoutEffect, useRef } from "react";

import { useCapabilities } from "./context";

export const animateHeaderDetails = (
	selector: RefObject<HTMLElement | null>,
) => {
	const { activeCapability } = useCapabilities();
	const timeline = useRef<gsap.core.Timeline | null>(null);
	const splitRef = useRef<SplitText | null>(null);

	useGSAP(
		() => {
			const elements = {
				default: selector.current?.querySelector(
					"[data-target='header-details-default']",
				),
				active: selector.current?.querySelector(
					"[data-target='header-details-active']",
				),
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

			if (!splitRef.current && elements.default) {
				splitRef.current = SplitText.create(elements.default, {
					type: "words",
				});
			}

			if (splitRef.current && elements.default && elements.active) {
				timeline.current
					.to(splitRef.current?.words, {
						yPercent: -100,
						opacity: 0,
						filter: "blur(10px)",
						stagger: 0.025,
					})
					.addLabel("activeDetail")
					.fromTo(
						elements.active,
						{ yPercent: 100, opacity: 0 },
						{ yPercent: 0, opacity: 1 },
						"-=0.5",
					);
			}
		},
		{ scope: selector },
	);

	useLayoutEffect(() => {
		if (activeCapability !== null) {
			timeline.current?.play();
		} else {
			timeline.current?.reversed(!timeline.current?.reversed());
		}
	}, [activeCapability]);
};
