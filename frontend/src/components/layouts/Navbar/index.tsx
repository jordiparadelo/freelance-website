"use client";

import { ContactButton, AvatarDropdown } from "@/components/ui";
import { NAV_LINKS } from "@/lib/constants";

import { useRef } from "react";

import NavMenu from "./NavMenu";
import "./styles.scss";

const Navbar = () => {
	const navbarRef = useRef<HTMLElement>(null);
	return (
		<nav
			ref={navbarRef}
			className='navbar'
		>
			<div className='container'>
				<AvatarDropdown />
				<NavMenu links={NAV_LINKS}/>
				<ContactButton>
					Get in touch
				</ContactButton>
			</div>
		</nav>
	);
};

export default Navbar;
