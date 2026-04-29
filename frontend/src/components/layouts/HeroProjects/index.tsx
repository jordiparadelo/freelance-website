import { Container, Section } from "@/components/ui";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <Section className={styles.hero} id="hero">
      <Container>
        <div className={styles.hero_layout}>
          <div className={styles["hero_heading"]}>
            <h1 className={styles["hero_subtitle"]}>Selected Projects</h1>
            <div className={styles["hero_title-wrapper"]}>
              <p className={styles["hero_title"]}>
                Building next level digital experiences
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
