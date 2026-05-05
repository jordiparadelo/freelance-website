import { Container, Curves, Section } from "@/components/ui";
import { getExperiences } from "@/lib/db";
import ExperienceLayout from "./ExperienceLayout";
import styles from "./styles.module.css";

const ExperienceSection = async () => {
  const experiences = await getExperiences({
    sort: [
      {
        field: "year",
        order: "desc",
      },
    ],
  });

  return (
    <Section id="experience" className={styles["experience-section"]}>
      <Curves fill="var(--background-color--base)" orientation="top" />
      <Container>
        <ExperienceLayout data={experiences} />
      </Container>
    </Section>
  );
};

export default ExperienceSection;
