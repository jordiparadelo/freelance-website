import { Card, Container, Section } from "@/components/ui";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import styles from "@/styles/AboutSection.module.css";

const AboutSection = () => {
	return (
		<Section id="about" className={styles["about"]}>
			<Container>
				<div className={styles["about__layout"]}>
					<AnimatedParagraph className={styles["about__title"]}>
						Freelancer, focused on develop digital products from scratch. Always
						align with design trends and technologies to solve business needs.
					</AnimatedParagraph>
					<ul className={styles["about__grid"]}>
						<div className={styles["about__grid-col"]}>
							<li className={styles["about__grid-item"]}>
								<Card>
									<div className="flex flex-col justify-center items-center h-full">
										<h3 className="text-[min(2rem,5vw)]">10+</h3>
										<p className="text-sm leading-[1]">Years of experience</p>
									</div>
								</Card>
							</li>
							<li className={styles["about__grid-item"]}>
								<Card>
									<div className="flex flex-col justify-center items-center h-full">
										<h3>Card Title</h3>
										<p>Certifications</p>
									</div>
								</Card>
							</li>
						</div>
						<li className={styles["about__grid-item"]} data-grid="extended">
							<Card>
								<h3>Card Title</h3>
								<p>Card Description</p>
							</Card>
						</li>
						<li className={styles["about__grid-item"]}>
							<Card>
								<h3>Card Title</h3>
								<p>Card Description</p>
							</Card>
						</li>
					</ul>
				</div>
			</Container>
		</Section>
	);
};

export default AboutSection;
