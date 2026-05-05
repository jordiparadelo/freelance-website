/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";

import { useRef } from "react";
import { formatStrapiMediaUrl } from "@/lib/db";
import type { Processes } from "@/lib/db/types";
import processAnimation from "./animations";
import styles from "./styles.module.css";

const ProcessApproach = ({ steps }: { steps: Processes[] }) => {
	const componentRef = useRef(null);

	const { activeStep, goToStep, previousStep } = processAnimation(componentRef);

	return (
		<div className={styles["process"]} ref={componentRef}>
			<div className={styles["process_content"]}>
				<span className="heading-style-uppercase text-color-alternative">
					Process
				</span>
				<ul className={styles["process_list"]}>
					{steps.map((step, index) => {
						const imageSrc = formatStrapiMediaUrl(step.image.url);
						return (
							<li
								className={styles["process_list_item"]}
								data-active={activeStep === index}
								data-previous={previousStep === index}
								key={step.id}
							>
								<figure className={styles["process_step"]} data-target="step">
									<h3>{step.name}</h3>
									{imageSrc && (
										<img
											className={styles["process_step_image"]}
											src={imageSrc}
											width="40"
											height="40"
											alt={step.name}
										/>
									)}
									<p> {step.description}</p>
								</figure>
							</li>
						);
					})}
				</ul>
			</div>

			<svg
				width="100%"
				height="100%"
				viewBox="0 0 300 300"
				className={styles["process-circle"]}
			>
				<title>Process Circle</title>
				<circle
					cx="150"
					cy="150"
					r="140"
					fill="none"
					stroke="currentColor"
					strokeWidth="1"
					className={styles["process-circle_path"]}
					strokeLinecap="round"
					data-target="path"
				/>
				<circle
					cx="150"
					cy="150"
					r="140"
					fill="none"
					stroke="currentColor"
					strokeWidth="1"
					strokeLinecap="round"
					style={{ opacity: 0.1 }}
				/>
				{steps.map((step, idx) => {
					const radius = 140;
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
								fill="var(--background-color, currentColor)"
								stroke="currentColor"
								strokeWidth="1"
								data-selected={idx === activeStep}
								className={styles["process-circle_dot"]}
							/>
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default ProcessApproach;
