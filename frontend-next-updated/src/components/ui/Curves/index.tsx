"use client";

// Libs
import { useGSAP } from "@gsap/react";
import type React from "react";
import { useRef } from "react";
// Animation
import { curveAnimation } from "./animations";
import styles from "./styles.module.css";

interface CurvesProps {
	className?: string;
	orientation?: "top" | "bottom";
	fill?: string;
}

const Curves: React.FC<CurvesProps> = ({ className, orientation, fill }) => {
	const componentRef = useRef<SVGSVGElement | null>(null);

	curveAnimation(componentRef);

	return (
		<svg
			viewBox="0 0 1440 55"
			fill={fill || "currentColor"}
			xmlns="http://www.w3.org/2000/svg"
			className={`${styles.curve}${className ? ` ${className}` : ""}`}
			ref={componentRef}
			data-orientation={orientation}
		>
			<title>curve</title>
			<path
				data-curve="wavy"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M720 55C447 55 197 46 0 30V0H1440V30C1440 30 960.145 55 720 55Z"
			/>
			<path
				data-curve="flat"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M720 30H0V0H1440V30H720Z"
				opacity={0}
				aria-hidden
			/>
		</svg>
	);
};

export default Curves;
