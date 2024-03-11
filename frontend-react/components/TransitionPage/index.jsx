"use client";
import React from "react";
// Libs
import { motion } from "framer-motion";
// Styles
import "./styles.scss";

const TransitionPage = ({ children }) => {
	return (
		<>
		{children}
			<motion.div
				className='slide-in'
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
			></motion.div>
			<motion.div
				className='slide-out'
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
			></motion.div>
		</>
	);
};

export default TransitionPage;
