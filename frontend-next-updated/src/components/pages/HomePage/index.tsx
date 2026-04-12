import {
	AboutSection,
	ApproachSection,
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
			<ApproachSection />
		</>
	);
};

export default HomePage;
