/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatedParagraph, Container, Curves, Section } from "@/components/ui";
import processAnimation from "./animations";
import { PROCESS_STEPS, type ProcessSteps } from "./data";
import styles from "./styles.module.css";

const ApproachSection = () => {
	return (
		<Section id="approach" className={styles["approach-section"]}>
			<Curves fill="var(--background-color--base)" orientation="top" />
			<Container>
				<div className={styles["approach-section_layout"]}>
					<span className="heading-style-uppercase">My Process</span>
					<div className={styles["approach-section_content"]}>
						<AnimatedParagraph className="heading-style-h2">
							I follow a systematic process that stat by understanding the DNA
							of your company, the designing its considered identity by using
							design as a solution
						</AnimatedParagraph>
						<ProcessApproach steps={PROCESS_STEPS} />
					</div>
				</div>
			</Container>
			<Curves fill="var(--background-color--base)" orientation="bottom" />
		</Section>
	);
};

const ProcessApproach = ({ steps }: { steps: ProcessSteps[] }) => {
	const componentRef = useRef(null);

	const { activeStep, goToStep, previousStep } = processAnimation(componentRef);

	return (
		<div className={styles["process"]} ref={componentRef}>
			<div className={styles["process_content"]}>
				<span className="heading-style-uppercase">Process</span>
				<ul className={styles["process_list"]}>
					{steps.map((step, index) => (
						<li
							className={styles["process_list_item"]}
							data-active={activeStep === index}
							data-previous={previousStep === index}
							key={step.id}
						>
							<figure
								className={styles["process_step"]}
								// {...(previousStep === index ? { "data-previous": true } : {})}
								onClick={() => goToStep(index)}
								onKeyDown={() => goToStep(index)}
								data-target="step"
							>
								<h3>{step.title}</h3>
								{step.icon && (
									<Image
										src={step.icon}
										width="80"
										height="80"
										alt={step.title}
									/>
								)}
								<p> {step.description}</p>
							</figure>
						</li>
					))}
				</ul>
			</div>
			<svg width="100%" viewBox="0 0 300 300">
				<title>Process Circle</title>
				<circle
					cx="150"
					cy="150"
					r="110"
					fill="none"
					stroke="#ccc"
					strokeWidth="1"
				/>
				{steps.map((step, idx) => {
					const radius = 110;
					const centerX = 150;
					const centerY = 150;
					const angle = (2 * Math.PI * idx) / steps.length - Math.PI / 2; // Start from top
					const x = centerX + radius * Math.cos(angle);
					const y = centerY + radius * Math.sin(angle);

					return (
						<g key={step.id}>
							<circle
								onClick={() => goToStep(idx)}
								cx={x}
								cy={y}
								r="4"
								fill="inherit"
								stroke="#333"
								strokeWidth="1"
							/>
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default ApproachSection;
