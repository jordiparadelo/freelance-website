import {
  AboutSection,
  ApproachSection,
  ExperienceSection,
  Gallery,
  Hero,
  ProjectsSection,
} from "@/components/layouts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ApproachSection />
    </>
  );
};

export default HomePage;
