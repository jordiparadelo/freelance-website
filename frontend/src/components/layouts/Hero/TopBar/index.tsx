"use client";

import React from "react";
// Styles
import styles from "../styles.module.scss";

// Components
import SidebarButton from "../SidebarButton";
import { AvatarDropdown } from "@/components/ui";
import NavMenu from "../../Navbar/NavMenu";
import { ROUTES } from "@/app/site.config";

const TopBar = () => {
	return (
		<div className={styles["hero__frame-top-bar"]}>
			<SidebarButton />
			<NavMenu links={ROUTES} />
			<div className={styles["hero__frame-top-bar__actions"]}>
				<AvatarDropdown />
			</div>
		</div>
	);
};

export default TopBar;
