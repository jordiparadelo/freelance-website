import { HeroProjects, ProjectsList } from "@/components/layouts";
import { Container, Section } from "@/components/ui";
import { getProjects } from "@/lib/db";

const ProjectsPage = async () => {
  const PROJECTS = await getProjects();
  return (
    <main>
      <HeroProjects />
      <Section>
        <Container>
          <ProjectsList data={PROJECTS} />
        </Container>
      </Section>
    </main>
  );
};

export default ProjectsPage;
