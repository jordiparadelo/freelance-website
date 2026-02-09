import { RadialMarquee } from "@/components/sections";
import { Section } from "@/components/ui";
import styles from "@/styles/Hero.module.css";
import Button from "../ui/Button";

interface HeroProps {
	title: string;
	description: string;
}

const Hero = () => {
	return (
		<Section className={styles.hero}>
			<div className="container">
				<div className={styles["hero_heading"]}>
					<h1 className="heading-style-h1">Flexible Designer for big Ideas</h1>
					<p>
						Designer packed with Webflow & HTML resources, icons, easings and a
						page transition course
					</p>
					<Button>Get Started</Button>
				</div>
				<RadialMarquee />
			</div>
		</Section>
	);
};

export default Hero;
