"use client";
import React, { memo, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import SvgBackground from '@/assets/images/grid-background.svg'


const GridBackground = (props) => {
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
	)
};

export default GridBackground;
