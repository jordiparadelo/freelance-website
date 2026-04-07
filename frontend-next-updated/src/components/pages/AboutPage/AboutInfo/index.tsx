"use client";

import React from "react";
import styles from "./styles.module.scss";
import Bio from "./Bio";
import Location from "./Location";
import Actions from "./Actions";

const AboutInfo = () => {
	return (
		<div className={styles["about-info"]}>
			<Bio />
			<Location />
			<Actions />
		</div>
	);
};

export default AboutInfo;
