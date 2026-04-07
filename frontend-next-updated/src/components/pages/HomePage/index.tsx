import {
  About,
  Gallery,
  Hero,
  SelectedProjects,
  Services,
} from "@/components/layouts";

const HomePage = () => {
  return (
    <>
      {/* <HeroV2 /> */}
      <Hero />
      <Gallery />
      <About />
      <Services />
      {/* <Process /> */}
      <SelectedProjects />
    </>
  );
};

export default HomePage;
