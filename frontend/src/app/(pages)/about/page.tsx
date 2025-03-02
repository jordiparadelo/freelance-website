import React from "react";
import { Metadata } from "next";
// Styles
import styles from "./styles.module.scss";
// Components
import AboutInfo from "@/components/pages/AboutPage/AboutInfo";
import AboutContent from "@/components/pages/AboutPage/AboutContent";
import AboutServices from "@/components/pages/AboutPage/AboutServices";

export const metadata: Metadata = {
	title: "About - Jordi Paradelo",
	description:
		"Learn more about Jordi Paradelo - A freelance developer focused on developing digital products from scratch.",
	openGraph: {
		title: "About - Jordi Paradelo",
		description:
			"Learn more about Jordi Paradelo - A freelance developer focused on developing digital products from scratch.",
	},
};

const AboutPage = () => {
	return (
		<main className={styles["about-page"] + " padding-global"}>
				<div className='container'>
					<div className={styles["about-layout"]}>
						<aside className={styles["about-layout__side"]}>
							<AboutInfo />
						</aside>
						<section className={styles["about-layout__main"]}>
							<AboutContent />
						</section>
						<aside className={styles["about-layout__side"]}>
							<AboutServices />
						</aside>
					</div>
				</div>
		</main>
	);
};

export default AboutPage;
