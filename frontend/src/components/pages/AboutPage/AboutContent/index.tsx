import React from "react";
import styles from "./styles.module.scss";
import Capabilities from "./Capabilities";


const AboutContent = () => {
	return (
		<div className={styles["about-content"]}>
			<section className={styles["about-content__section"]}>
				<h2 className={styles["about-content__heading"]}>
					Professional Experience
				</h2>

				<p className={styles["about-content__description"]}>
					As a front-end developer, I love to be creative with code, putting a
					lot of effort into making interactions as smooth as they can be. Over
					the last 5 years, I have learned to use Next.js in combination with
					tools such as Framer Motion, GSAP.
				</p>
			</section>

			<Capabilities />

			<section className={styles["about-content__section"]}>
				<h2 className={styles["about-content__heading"]}>Skills</h2>
				<div className={styles["about-content__skills"]}>
					<div className={styles["skills-group"]}>
						<h3>Frontend</h3>
						<ul>
							<li>React / Next.js</li>
							<li>TypeScript</li>
							<li>Tailwind CSS</li>
							<li>GSAP / Framer Motion</li>
						</ul>
					</div>
					{/* Add more skill groups */}
				</div>
			</section>

			<section className={styles["about-content__section"]}>
				<h2 className={styles["about-content__heading"]}>Education</h2>
				<div className={styles["about-content__education"]}>
					<div className={styles["education-item"]}>
						<h3>Computer Science Degree</h3>
						<p>2015 - 2019</p>
						<p>University of Barcelona</p>
					</div>
					{/* Add more education items */}
				</div>
			</section>
		</div>
	);
};

export default AboutContent;
