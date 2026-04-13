"use client";
import React, { useRef } from "react";
import animateMarquee from "./animations";
import styles from "./styles.module.css";

const BusinessMarquee = () => {
	const componentRef = useRef(null);
	animateMarquee(componentRef);
	return (
		<div ref={componentRef} className={styles["business-marquee"]}>
			BusinessMarquee
		</div>
	);
};

export default BusinessMarquee;
