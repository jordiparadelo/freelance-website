"use client";

import { useRef } from "react";
// Components
import { Logo, NavMenu, ContactButton } from "@/ui";;
// Lib3
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
				<NavMenu navLinks={NAV_LINKS} />
				{/* <NavIndex /> */}
				<Logo />
				<ContactButton label={'Contact'}/>
			</div>
		</nav>
	);
};

export default Navbar;
