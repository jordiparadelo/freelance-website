import React from "react";
import { ServiceForm, SectionLabel, AnimatedParagraph, Curves } from "@/ui";
// import Box from "@/public/assets/animated-icons/services.json";
import styles from "./styles.module.scss";

const About = () => {
	return (
		<section id='about' className={styles.about}>
			<div className="padding-global --section-large">
				<div className='container'>
					<div className={styles["about__wrapper"]}>
						<div className={styles["about__header"]}>
							<AnimatedParagraph className={styles["about__title"]}>
								Freelancer, focused on develop digital products from scratch.
								Always align with design trends and technologies to solve
								business needs.
							</AnimatedParagraph>
						</div>
						<div className={styles["about__services"]}>
							<h3 className={styles["about__services-title"]}>
								Unlock your design potential with{" "}
							</h3>
							<ServiceForm />
						</div>
					</div>
				</div>
			</div>
			{/* <Curves fill="var(--background-color--base)" orientation="bottom"/> */}
		</section>
	);
};

export default About;
