"use client";

import { useRef } from "react";
import { animateHeaderDetails } from "./animations";
import { useCapabilities } from "./context";
import { CAPABILITIES } from "./data";
import styles from "./styles.module.css";

const HeaderDetails = () => {
	const { activeCapability, previousCapability } = useCapabilities();
	const componentRef = useRef(null);

	animateHeaderDetails(componentRef);

	return (
		<div
			ref={componentRef}
			className={styles["about_header_wrapper"]}
			data-target="header-details"
		>
			<p data-target="header-details-default">
				More than +5 years of experience
			</p>
			<p data-target="header-details-active">
				{activeCapability !== null
					? CAPABILITIES[activeCapability].name
					: previousCapability !== null &&
						CAPABILITIES[previousCapability].name}
			</p>
		</div>
	);
};

export default HeaderDetails;
