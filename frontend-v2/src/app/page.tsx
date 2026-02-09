import {
	AboutSection,
	ContactSection,
	Hero,
	ProjectsSection,
	ServicesSection,
} from "@/components/sections";

export default function Home() {
	return (
		<>
			<Hero />
			{/* <RadialMarquee /> */}
			<AboutSection />
			<ProjectsSection />
			<ServicesSection />
			<ContactSection />
		</>
	);
}
