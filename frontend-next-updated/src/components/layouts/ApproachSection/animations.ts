"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

import { useCallback, useRef, useState } from "react";

gsap.registerPlugin(DrawSVGPlugin);

const processAnimation = (
	componentRef: React.RefObject<HTMLDivElement | null>,
) => {
	gsap.registerPlugin(useGSAP);
	const timeline = useRef<gsap.core.Timeline | null>(null);
	const splitRef = useRef<SplitText | null>(null);
	const [activeStep, setActiveStep] = useState<number>(0);
	const [previousStep, setPreviousStep] = useState<number | null>(null);
	const circleRef = useRef<SVGCircleElement | null>(null);
	const totalStep = useRef<number>(0);

	const goToStep = (index: number) => {
		if (index === activeStep) return;
		setPreviousStep(activeStep);
		setActiveStep(index);
	};

	const circleProgress = useCallback(() => {
		if (!circleRef.current || totalStep.current === 0) return 0;
		const totalLength = circleRef.current.getTotalLength();
		const progress =
			(totalLength - (totalLength / totalStep.current) * activeStep) %
				totalLength || 0;

		console.log({ totalLength, progress, totalStep: totalStep.current });
		return progress;
	}, [activeStep]);

	useGSAP(
		() => {
			if (!timeline.current) return;

			timeline.current
				.to('[data-previous="true"]', {
					opacity: 0,
				})
				.to(
					'[data-previous="true"] [data-target="step"] > *',
					{
						yPercent: 100,
						opacity: 0,
						stagger: 0.05,
					},
					"<",
				)
				.to(circleRef.current, {
					drawSVG: `75% ${75 + (100 / totalStep.current) * activeStep}%`,
				})
				.fromTo('[data-active="true"]', { opacity: 0 }, { opacity: 1 })
				.fromTo(
					'[data-active="true"] [data-target="step"] > *',
					{
						yPercent: 100,
						opacity: 0,
					},
					{
						yPercent: 0,
						opacity: 1,
						stagger: 0.05,
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
