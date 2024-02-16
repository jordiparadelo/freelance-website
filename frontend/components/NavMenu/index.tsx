"use client";

import { useState } from "react";
import Link from "next/link";
import { useMenu } from "@/context/MenuContext";
import "./styles.scss";

interface NavMenuProps {
	navLinks: NavLink[];
}

interface NavLink {
	key: string;
	href: string;
	label: string;
}

const NavMenu = ({ navLinks }: NavMenuProps) => {
	const { scrollPosition } = useMenu();

	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<div className='navmenu'>
			<button onClick={handleClick}>
				<CircleLine
					percentage={scrollPosition}
					size={35}
				/>
			</button>
			{isOpen && (
				<menu className='navmenu__menu'>
					<ul>
						{navLinks.map((link: NavLink) => (
							<li key={link.key}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</menu>
			)}
		</div>
	);
};

export default NavMenu;

const CircleLine: React.FC<{ percentage: number; size: number }> = ({
	percentage,
	size,
}) => {
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
				x='8'
				y='13'
				width={size / 2}
				height={strokeWidth}
				strokeLinecap='round'
				rx='1'
				fill='currentColor'
			/>
			<rect
				x='8'
				y='21'
				width={size / 2}
				height={strokeWidth}
				strokeLinecap='round'
				rx='1'
				fill='currentColor'
			/>
		</svg>
	);
};
