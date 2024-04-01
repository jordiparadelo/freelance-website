"use client";

import React, { useState } from "react";
// Libs
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
// Styles
import "./styles.scss";

const animationCurtain = {
	initial: {
		y: "100%",
		progress: 0,
	},
	animate: {
		y: "-100%",
		progress: 100,
	},
	transition: {
		duration: 2,
	},
	exit: {
		y: "-100%",
		delay: 5,
		duration: 5,
	},
};
const animation = {
	initial: {
		opacity: 0,
		transition: { delay: 5 },
	},
	animate: {
		opacity: 1,
		transition: { delay: 1.5 },
	},
	exit: {
		opacity: 0,
		transition: { delay: 2.5 },
	},
	// transition: {
	// },
};

const Inner = ({ children }) => {
	const [showChildren, setShowChildren] = useState(false);

	const pathname = usePathname();

	function onComplete() {
		setShowChildren((prevState) => !prevState);
	}

	function onUpdate({ progress }) {
		if (progress >= 50) {
			setShowChildren(true);
		}
	}

	return (
		<>
			<motion.div
				key={pathname}
				{...animation}
				className='animated-page-wrapper'
			>
				{children}
			</motion.div>
			<motion.div
				key={pathname}
				{...animationCurtain}
				onUpdate={onUpdate}
				// onAnimationComplete={onComplete}
				className='animated-page-curtain'
			>
				<p>{pathname}</p>
			</motion.div>
		</>
	);
};

export default Inner;
