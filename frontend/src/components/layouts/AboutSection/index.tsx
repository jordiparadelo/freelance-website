import { Container, Section } from "@/components/ui";
import { getAboutData, getProjects } from "@/lib/db";
import type { Capability } from "@/lib/types/index";
import AboutSectionLayout from "./AboutSectionLayout";
import styles from "./styles.module.css";

type AboutSectionViewModel = {
  id: string;
  title: string;
  description: string;
  capabilities: Capability[];
  previewProject: {
    id: string;
    title: string;
    image: { url: string; alt?: string };
  } | null;
};

const AboutSection = async () => {
  const [aboutRes, projectsRes] = await Promise.allSettled([
    getAboutData(),
    getProjects({
      sort: [
        {
          field: "details.year",
          order: "desc",
        },
      ],
    }),
  ]);

  if (aboutRes.status === "rejected") {
    throw aboutRes.reason; // about content is required
  }

  const about = aboutRes.value;
  const project =
    projectsRes.status === "fulfilled" ? (projectsRes.value[0] ?? null) : null;

  const ABOUT_CONTENT: AboutSectionViewModel = {
    id: String(about?.id ?? ""),
    title: about?.title ?? "",
    description: about?.description ?? "",
    capabilities: about?.capabilities ?? [],
    previewProject: project
      ? {
          id: project.id,
          title: project.title ?? "",
          image: {
            url: project.image?.url ?? "",
            alt: project.title,
          },
        }
      : null,
  };

  return (
    <Section id="about" className={styles.about}>
      <Container>
        <AboutSectionLayout content={ABOUT_CONTENT} />
      </Container>
    </Section>
  );
};

export default AboutSection;
