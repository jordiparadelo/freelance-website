"use server";
import { Container, Section } from "@/components/ui";
// import { PROJECTS } from "@/lib/constants";
import { getStrapiData } from "@/lib/db";
import ProjectsList from "./ProjectsList";
import styles from "./styles.module.css";

const ProjectsSection = async () => {
  const query =
    "/api/projects?sort[0]=details.year:desc&sort[1]=title:asc&fields[0]=nameID&fields[1]=title&fields[2]=challenge&populate[image][fields][0]=url&populate[image][fields][1]=width&populate[image][fields][2]=height&populate[details][fields][0]=brief&populate[details][fields][1]=blob&populate[details][fields][2]=client&populate[details][fields][3]=year&populate[details][fields][4]=preview&populate[details][populate][type][fields][0]=label&populate[details][populate][industries][fields][0]=label&populate[details][populate][collaboration][fields][0]=label&populate[details][populate][roles][fields][0]=label&populate[details][populate][logo][fields][0]=url&populate[details][populate][logo][fields][1]=width&populate[details][populate][logo][fields][2]=height&pagination[page]=1&pagination[pageSize]=5&status=published&locale[0]=en";
  const { data: PROJECTS } = await getStrapiData(query);

  return (
    <Section className={styles["projects-section"]} id="selected-works">
      <Container>
        <div className={styles["projects-section_layout"]}>
          <h2 className={styles["projects-section_title"]}>Selected Works</h2>
          <ProjectsList data={PROJECTS} />
        </div>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
