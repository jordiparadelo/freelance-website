'use client'

import React, { useRef } from "react";
import Lottie from "lottie-react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import './styles.scss'


const SectionLabel = ({ label, animationData }) => {
	const iconRef = useRef(null);

	const [ref, entry] = useIntersectionObserver({
		threshold: 0.5,
		root: null,
		rootMargin: "-150px",
	  });


	const iconProps = {
		animationData: animationData,
		autoplay: true,
		height: 10,
		width: 10,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="section-label" ref={ref} data-active={entry?.isIntersecting}>
			<Lottie
				{...iconProps}
				lottieRef={iconRef}
				className='section-label__icon'
			/>
			<p className='section-label__text'></p>{label}
		</div>
	);
};

export default SectionLabel;
