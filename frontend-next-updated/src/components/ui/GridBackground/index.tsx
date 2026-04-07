"use client";
import Image from "next/image";
import type React from "react";
import styles from "./styles.module.scss";

interface GridBackgroundProps {
	className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className }) => {
	return (
		<div className={`${styles["grid-background"]} ${className || ""}`}>
			<Image
				src="/assets/images/grid-background.svg"
				alt="grid-background"
				fill
				sizes="100vw"
				priority
			/>
		</div>
	);
};

export default GridBackground;
