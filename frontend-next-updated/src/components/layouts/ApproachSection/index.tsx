import { AnimatedParagraph, Container, Curves, Section } from "@/components/ui";
import styles from "./styles.module.css";

const ApproachSection = () => {
	return (
		<Section id="approach" className={styles["approach-section"]}>
			<Curves fill="var(--background-color--base)" orientation="top" />
			<Container>
				<div className={styles["approach-section_layout"]}>
					<div className={styles["approach-section_header"]}>
						<span className="heading-style-uppercase">My Process</span>
						<AnimatedParagraph className="heading-style-h2">
							I follow a systematic process that stat by understanding the DNA
							of your company, the designing its considered identity by using
							design as a solution
						</AnimatedParagraph>
					</div>
				</div>
			</Container>
			<Curves fill="var(--background-color--base)" orientation="bottom" />
		</Section>
	);
};

export default ApproachSection;
