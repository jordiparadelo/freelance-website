import { HeroProjects, ProjectsGrid } from "@/components/layouts";
import { Container, Section } from "@/components/ui";
import { getProjects } from "@/lib/db";

const ProjectsPage = async () => {
  const PROJECTS = await getProjects({
    sort: [{ column: "year", ascending: false }],
  });
  return (
    <main>
      <HeroProjects />
      <Section>
        <Container>
          <ProjectsGrid data={PROJECTS} />
        </Container>
      </Section>
    </main>
  );
};

export default ProjectsPage;
