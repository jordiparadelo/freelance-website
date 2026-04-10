import { Container, Section } from "@/components/ui";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import styles from "./styles.module.css";

const AboutSection = () => {
	return (
		<Section id="about" className={styles.about}>
			<Container>
				<div className={styles.about__layout}>
					<AnimatedParagraph className={styles.about__title}>
						Freelancer, focused on develop digital products from scratch. Always
						align with design trends and technologies to solve business needs.
					</AnimatedParagraph>
				</div>
			</Container>
		</Section>
	);
};

export default AboutSection;
