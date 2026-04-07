"use client";

import React from "react";
import { ROUTES } from "@/app/site.config";
import { AvatarDropdown } from "@/components/ui";
import NavMenu from "../../Navbar/NavMenu";
// Components
import SidebarButton from "../SidebarButton";
// Styles
import styles from "../styles.module.scss";

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
