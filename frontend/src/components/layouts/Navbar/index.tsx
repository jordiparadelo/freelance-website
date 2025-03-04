"use client";

import {  AvatarDropdown } from "@/components/ui";
import { NAV_LINKS } from "@/lib/constants";

import { useRef } from "react";

import NavMenu from "./NavMenu";
import NavActions from "./NavActions";
import "./styles.scss";

const Navbar = () => {
	const navbarRef = useRef<HTMLElement>(null);
	return (
		<nav
			ref={navbarRef}
			className='navbar'
		>
			<div className='padding-global'>
				<div className='container'>
					<div className='navbar__layout'>
						<AvatarDropdown />
						<NavMenu links={NAV_LINKS} />
						<NavActions />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
