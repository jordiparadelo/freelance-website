import { BookCallButton, Container, Section } from "@/components/ui";
import styles from "@/styles/ContactSection.module.css";

const ContactSection = () => {
	return (
		<Section id="contact" className={styles["contact-section"]}>
			<Container>
				<div className={styles["contact-section__layout"]}>
					<h2 className={styles["contact-section__title"]}>
						Need a Design Partner?
					</h2>
					<BookCallButton />
				</div>
			</Container>
		</Section>
	);
};

export default ContactSection;
