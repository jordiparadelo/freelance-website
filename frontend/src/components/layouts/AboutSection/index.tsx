import { Container, Section } from "@/components/ui";
import { getStrapiData } from "@/lib/strapi";
import AboutSectionLayout from "./AboutSectionLayout";
import styles from "./styles.module.css";

const AboutSection = async () => {
  const query =
    "/api/about-section?fields[0]=id&fields[1]=title&fields[2]=description&populate[capabilities][fields][0]=title&populate[capabilities][fields][1]=description";
  const { data: ABOUT_CONTENT } = await getStrapiData(query);

  return (
    <Section id="about" className={styles.about}>
      <Container>
        <AboutSectionLayout content={ABOUT_CONTENT} />
      </Container>
    </Section>
  );
};

export default AboutSection;
