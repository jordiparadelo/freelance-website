'use client'

import React from "react";
// Styles
import styles from "../styles.module.scss";

// Components
import SidebarButton from "../SidebarButton";
import { AvatarDropdown, Logo } from "@/components/ui";

const TopBar = () => {

	return (
		<div className={styles["hero__frame-top-bar"]}>
			<SidebarButton/>
			<Logo/>
			<AvatarDropdown />
		</div>
	);
};

export default TopBar;
