"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import SplitText from "gsap/SplitText";

import { useCallback, useRef, useState } from "react";

gsap.registerPlugin(DrawSVGPlugin);

const processAnimation = (
	componentRef: React.RefObject<HTMLDivElement | null>,
) => {
	gsap.registerPlugin(useGSAP);
	const timeline = useRef<gsap.core.Timeline | null>(null);
	const [activeStep, setActiveStep] = useState<number>(0);
	const [previousStep, setPreviousStep] = useState<number | null>(null);
	const circleRef = useRef<SVGCircleElement | null>(null);
	const totalStep = useRef<number>(0);

	const goToStep = (index: number) => {
		if (index === activeStep) return;
		setPreviousStep(activeStep);
		setActiveStep(index);
	};

	const circleDraw = useCallback((): gsap.DrawSVGTarget => {
		if (!circleRef.current || totalStep.current === 0) return "0";
		const willComplete =
			previousStep === totalStep.current - 1 && activeStep === 0;
		const progress = 75 + (100 / totalStep.current) * activeStep;

		return willComplete ? `75% 255%` : `75% ${progress}%`;
	}, [activeStep, previousStep]);

	useGSAP(
		() => {
			if (!timeline.current) return;

			timeline.current

				.addLabel("previous-start")
				.to('[data-previous="true"] [data-target="step"] > h3', {
					yPercent: 20,
					opacity: 0,
					filter: "blur(5px)",
				})
				.to(
					'[data-previous="true"] [data-target="step"] .word',
					{
						opacity: 0,
						yPercent: 20,
						stagger: 0.01,
					},
					"<",
				)
				.to('[data-previous="true"]', {
					opacity: 0,
					duration: 0,
				})
				.addLabel("previous-end")
				.to(
					"[data-target='path']",
					{
						drawSVG: circleDraw(),
						ease: "power2.inOut",
						duration: 1,
					},
					"previous-start",
				)
				.to(
					"circle[data-selected='true']",
					{
						fill: "currentColor",
						keyframes: {
							r: [5, 4],
						},
						ease: "power2.inOut",
					},
					"-=0.25",
				)
				.set(
					"circle[data-selected='false']",
					{
						fill: "var(--background-color)",
					},
					"<",
				)
				.fromTo(
					'[data-active="true"]',
					{ opacity: 0 },
					{ opacity: 1, duration: 0 },
					"previous-end",
				)
				.fromTo(
					'[data-active="true"] [data-target="step"] > h3',
					{
						yPercent: 20,
						opacity: 0,
						filter: "blur(5px)",
					},
					{
						yPercent: 0,
						opacity: 1,
						filter: "blur(0px)",
					},
					"<",
				)
				.fromTo(
					'[data-active="true"] [data-target="step"] .word',
					{
						opacity: 0,
						yPercent: 20,
					},
					{
						opacity: 1,
						yPercent: 0,
						stagger: 0.01,
					},
					"<",
				);

			timeline.current.play();
		},
		{ scope: componentRef, dependencies: [activeStep] },
	);

	useGSAP(
		() => {
			if (!timeline.current) {
				timeline.current = gsap.timeline({
					paused: true,
					defaults: {
						duration: 0.5,
						ease: "power3.inOut",
					},
				});
			}

			circleRef.current = componentRef.current?.querySelector("circle") || null;
			totalStep.current =
				componentRef.current?.querySelectorAll("li").length || 0;

			new SplitText("figure p", {
				type: "words",
				wordsClass: "word",
				smartWrap: true,
			});

			if (circleRef.current) {
				gsap.set(circleRef.current, {
					drawSVG: "75% 75%",
				});
			}
			gsap.set("[data-active='false']", {
				opacity: 0,
			});
		},
		{ scope: componentRef },
	);

	return {
		activeStep,
		setActiveStep,
		previousStep,
		setPreviousStep,
		goToStep,
	};
};

export default processAnimation;
