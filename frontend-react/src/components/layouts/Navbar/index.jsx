"use client";

import { useRef } from "react";
// Components
import { Logo, ContactButton, AvatarDropdown } from "@/ui";
import NavMenu from "./NavMenu";
// Constants
import { NAV_LINKS } from "@/lib/constants";
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
				<NavMenu links={NAV_LINKS}/>
				<ContactButton label={"Get in touch"} />
			</div>
		</nav>
	);
};

export default Navbar;
