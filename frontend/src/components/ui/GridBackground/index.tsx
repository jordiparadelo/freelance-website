"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface GridBackgroundProps {
	className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className }) => {
	return (
		<div className={`${styles["grid-background"]} ${className || ''}`}>
			<Image
				src="/assets/images/grid-background.svg"
				alt="grid-background"
				fill
				sizes="100vw"
				quality={100}
				priority
			/>
		</div>
	);
};

export default GridBackground;
