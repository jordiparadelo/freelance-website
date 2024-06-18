"use client";

import { useRef } from "react";
// Components
import { Logo, ContactButton, AvatarDropdown } from "@/ui";
import NavMenu from "./NavMenu";
// import NavIndex from './NavIndex'
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
				<AvatarDropdown />
				<NavMenu />
				<ContactButton label={"Get in touch"} />
			</div>
		</nav>
	);
};

export default Navbar;
