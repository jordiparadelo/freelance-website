"use client";

import { useState } from "react";
import Link from "next/link";
// Context
import { useMenu } from "@/context/MenuContext";
// Lib
import { motion, AnimatePresence } from "framer-motion";
// Animations
import { animationProps } from "./animations";
import { useModal } from "@/context/ModalContext";
// Styles
import "./styles.scss";

const NavMenu = ({ navLinks }) => {
	const { scrollPosition } = useMenu();
	const { toggleModal } = useModal();

	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
		toggleModal && toggleModal();
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
			<AnimatePresence>
				{isOpen && (
					<menu
						className='navmenu__menu-wrapper'
						onClick={() => setIsOpen((current) => !current)}
					>
						<motion.ul
							className='navmenu__menu'
							{...animationProps}
							key='navmenu'
						>
							{navLinks.map((link) => (
								<li key={link.key}>
									<Link href={link.href}>{link.label}</Link>
								</li>
							))}
						</motion.ul>
					</menu>
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
