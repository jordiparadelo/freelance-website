"use client";

import { useState } from "react";
// Next.js
import Link from "next/link";
import Image from "next/image";
// Lib
import { motion, AnimatePresence } from "framer-motion";
// Hooks
import usePageScroll from "@/hooks/usePageScroll";
// Animations
import { animationProps } from "./animations";
// Assets
import crossIcon from "@/public/cross.svg";
import arrowIcon from "@/public/arrow.svg";
// Styles
import "./styles.scss";

const NavMenu = ({navLinks}) => {
	const [isOpen, setIsOpen] = useState(false);
	const { scrollPosition, scrollToElement } = usePageScroll();

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<div className='navmenu'>
			<button
				onClick={handleClick}
				className='navmenu__button'
			>
				<CircleLine
					percentage={scrollPosition}
					size={40}
				/>
			</button>
			<AnimatePresence >
				{isOpen && (
					<motion.menu  className='navmenu__menu-wrapper' key={'navmenu'}>
						<motion.div
							className='navmenu__menu'
							{...animationProps}
						>
							<header className='navmenu__menu-header'>
								<button
									className='navmenu__close-button'
									onClick={() => setIsOpen((current) => !current)}
								>
									<Image
										src={crossIcon}
										alt='Close menu'
										width='1em'
										height='1em'
									/>
									Close
								</button>
							</header>
							<ul className='navmenu__menu-list'>
								{navLinks.map((link, index) => (
									<li
										key={index}
										className='navmenu__menu-list-i'
									>
										<Image
											src={arrowIcon}
											alt='Arrow icon'
											width='1em'
											height='1em'
										/>
										<Link
											href={link.href}
											key={link.label}
											aria-label={`Go to ${link.label} page`}
											onClick={() => setIsOpen((current) => !current)}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
						<div
							className='navmenu__menu-overlay'
							onClick={() => setIsOpen((current) => !current)}
						></div>
					</motion.menu>
				)}
			</AnimatePresence>
		</div>
	);
};

export default NavMenu;

const CircleLine = ({ percentage, size }) => {
	const strokeWidth = 2;
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (percentage / 100) * circumference;

	return (
		<svg
			width={size}
			height={size}
		>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				fill='transparent'
				stroke='currentColor'
				strokeWidth={strokeWidth}
				strokeDasharray={circumference}
				strokeDashoffset={strokeDashoffset}
				strokeLinecap='round'
				shapeRendering='geometricPrecision'
			/>
			<rect
				x={size / 4.375}
				y={size / 2.69}
				width={size / 2}
				height={strokeWidth}
				strokeLinecap='round'
				rx='1'
				fill='currentColor'
			/>
			<rect
				x={size / 4.375}
				y={size / 1.6}
				width={size / 2}
				height={strokeWidth}
				strokeLinecap='round'
				rx='1'
				fill='currentColor'
			/>
		</svg>
	);
};
