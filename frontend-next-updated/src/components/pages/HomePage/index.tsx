import {
	About,
	Gallery,
	Hero,
	Process,
	SelectedProjects,
	Services,
} from "@/components/layouts";

const HomePage = () => {
	return (
		<>
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
