'use client'

import React from "react";
// Styles
import styles from "../styles.module.scss";

// Components
import NavMenu from "../../Navbar/NavMenu";
import SidebarButton from "../SidebarButton";
import { AvatarDropdown } from "@/components/ui";

const TopBar = () => {

	return (
		<div className={styles["hero__frame-top-bar"]}>
			<SidebarButton/>
			<NavMenu />
			<AvatarDropdown />
		</div>
	);
};

export default TopBar;
