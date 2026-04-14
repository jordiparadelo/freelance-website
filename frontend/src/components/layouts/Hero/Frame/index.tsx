// Styles

import { Banner } from "@/components/layouts";
// Components
import { ContactButton } from "@/components/ui";
import styles from "../styles.module.scss";

const Frame = () => {
	return (
		<div className={styles["hero__frame-container"]}>
			<div className={styles.hero__layout}>
				<div className={styles["hero__heading-wrapper"]}>
					<div className={styles.hero__label}>Design & Dev freelancer</div>
					<div className={styles["hero__title-wrapper"]}>
						<h1
							className={styles.hero__title}
							aria-label="digital design on demand"
						>
							Web Design for growing companies
						</h1>
					</div>
				</div>
				<p className="text-size-medium">
					Launch your next project in <strong>no-time.</strong>{" "}
				</p>
				<div className={styles.hero__actions}>
					<ContactButton>Let&apos;s start a new project</ContactButton>
				</div>
			</div>

			<Banner />
		</div>
	);
};

export default Frame;
