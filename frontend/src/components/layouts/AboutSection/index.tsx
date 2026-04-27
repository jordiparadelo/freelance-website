import { Container, Section } from "@/components/ui";
import { getStrapiData } from "@/lib/db";
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
  const aboutQuery =
    "/api/about-section?fields[0]=id&fields[1]=title&fields[2]=description&populate[capabilities][fields][0]=title&populate[capabilities][fields][1]=description";
  const lastProjectQuery =
    "/api/projects?sort[0]=details.year:desc&populate[image][fields][0]=url&populate[image][fields][1]=alternativeText&fields[0]=id&fields[1]=title&pagination[pageSize]=1&pagination[page]=1&status=published&locale[0]=en";

  const [aboutRes, projectsRes] = await Promise.allSettled([
    getStrapiData(aboutQuery),
    getStrapiData(lastProjectQuery),
  ]);

  if (aboutRes.status === "rejected") {
    throw aboutRes.reason; // about content is required
  }

  const about = aboutRes.value?.data;
  const project =
    projectsRes.status === "fulfilled"
      ? (projectsRes.value?.data?.[0] ?? null)
      : null;

  const ABOUT_CONTENT: AboutSectionViewModel = {
    id: String(about?.id ?? ""),
    title: about?.title ?? "",
    description: about?.description ?? "",
    capabilities: about?.capabilities ?? [],
    previewProject: project
      ? {
          id: String(project.id),
          title: project.title ?? "",
          image: {
            url: project.image?.url ?? "",
            alt: project.image?.alternativeText ?? "",
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
