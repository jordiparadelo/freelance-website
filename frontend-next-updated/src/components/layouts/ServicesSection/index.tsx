import { Container, Section, Tabs } from "@/components/ui";
import { SERVICES_OFFERED } from "@/lib/constants";
import styles from "./styles.module.css";

const ServicesSection = () => {
	return (
		<Section id="services" className={styles["services-section"]}>
			<Container>
				<div className={styles["services-section__layout"]}>
					<h2 className={styles["services-section__title"]}>
						Full on Services
					</h2>
				</div>
				<div className={styles["services-section__container"]}>
					<Tabs
						data={SERVICES_OFFERED}
						className={styles["services-section__tabs"]}
					/>
				</div>
			</Container>
		</Section>
	);
};

export default ServicesSection;
