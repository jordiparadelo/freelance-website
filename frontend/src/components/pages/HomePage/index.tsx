import {
	Hero,
	About,
	SelectedProjects,
	Gallery,
	Services,
	Process,
} from "@/components/layouts";

const HomePage = () => {
	return (
		<>
			<Hero />
			<Gallery />
			<About />
			<Services />
			<Process />
			<SelectedProjects />
		</>
	);
};

export default HomePage;
