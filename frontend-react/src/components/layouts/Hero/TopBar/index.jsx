'use client'

import React from "react";
// Styles
import styles from "../styles.module.scss";

// Components
import NavMenu from "../../Navbar/NavMenu";
import SidebarButton from "../SidebarButton";
import { AvatarDropdown, Logo } from "@/components/ui";

// Constants
import { NAV_LINKS } from "@/lib/constants";

const TopBar = () => {

	return (
		<div className={styles["hero__frame-top-bar"]}>
			<SidebarButton/>
			{/* <NavMenu links={NAV_LINKS}/> */}
			<Logo/>
			<AvatarDropdown />
		</div>
	);
};

export default TopBar;
