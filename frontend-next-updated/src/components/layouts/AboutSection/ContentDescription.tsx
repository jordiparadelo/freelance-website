import { AnimatedParagraph } from "@/components/ui";
import { useCapabilities } from "./context";
import { CAPABILITIES } from "./data";
import styles from "./styles.module.css";

const ContentDescription = () => {
	const { activeCapability, previousCapability } = useCapabilities();

	return (
		<div className={styles["about_content_description"]}>
			<div data-target="default">
				<AnimatedParagraph className={styles.about_title}>
					Freelancer, focused on develop digital products from scratch. Always
					align with design trends and technologies to solve business needs.
				</AnimatedParagraph>
			</div>
			<div data-target="active">
				<AnimatedParagraph className={styles.about_title}>
					{activeCapability !== null
						? CAPABILITIES[activeCapability].description
						: previousCapability &&
							CAPABILITIES[previousCapability].description}
				</AnimatedParagraph>
			</div>
		</div>
	);
};

export default ContentDescription;
