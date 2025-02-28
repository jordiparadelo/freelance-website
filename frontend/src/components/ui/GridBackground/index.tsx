"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const GridBackground: React.FC = () => {
	return (
		<div className={styles["grid-background"]}>
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
