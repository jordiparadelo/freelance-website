import React from "react";
import {  SectionLabel, AnimatedParagraph, Curves } from "@/ui";
import AboutForm from "./AboutForm";
// import Box from "@/public/assets/animated-icons/services.json";
import styles from "./styles.module.scss";

const About = () => {
	return (
		<section id='about' className={styles.about}>
			<div className="padding-global --section-medium">
				<div className='container'>
					<div className={styles["about__layout"]}>
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
							<AboutForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
