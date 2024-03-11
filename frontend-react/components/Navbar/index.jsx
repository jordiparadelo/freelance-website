"use client";

import { useRef } from "react";
// Components
import { Logo, NavMenu, ContactButton, NavIndex } from "@/components";
// Lib
import { NAV_LINKS } from "@/constants";
// Styles
import "./styles.scss";

const Navbar = () => {
	let navbarRef = useRef(null);
	return (
		<nav
			ref={navbarRef}
			className='navbar'
		>
			<div className='container'>
				<NavIndex/>
				<Logo />
				<NavMenu navLinks={NAV_LINKS} />
			</div>
		</nav>
	);
};

export default Navbar;
