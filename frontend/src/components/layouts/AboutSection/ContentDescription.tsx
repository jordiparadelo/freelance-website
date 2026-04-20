"use client";
import { useRef } from "react";
import { AnimatedParagraph } from "@/components/ui";
import { animateDescription } from "./animations";
import { useCapabilities } from "./context";
import { CAPABILITIES } from "./data";
import styles from "./styles.module.css";

const ContentDescription = () => {
	const componentRef = useRef(null);
	const { activeCapability, previousCapability } = useCapabilities();

	animateDescription(componentRef);

	return (
		<div className={styles["about_content_description"]} ref={componentRef}>
			<div data-target="default">
				<AnimatedParagraph className={styles.about_title}>
					Freelancer, focused on develop digital products from scratch. Always
					align with design trends and technologies to solve business needs.
				</AnimatedParagraph>
			</div>
			<div data-target="active">
				<AnimatedParagraph className={styles.about_title}>
					{activeCapability !== null ? (
						<span key={CAPABILITIES[activeCapability].name}>
							{CAPABILITIES[activeCapability].description}
						</span>
					) : (
						previousCapability !== null && (
							<span key={CAPABILITIES[previousCapability].name}>
								{" "}
								{CAPABILITIES[previousCapability].description}
							</span>
						)
					)}
				</AnimatedParagraph>
			</div>
		</div>
	);
};

export default ContentDescription;
