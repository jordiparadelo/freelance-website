import {
	About,
	Gallery,
	Hero,
	Process,
	SelectedProjects,
	Services,
} from "@/components/layouts";
import HeroV2 from "@/components/layouts/HeroV2/HeroV2";

const HomePage = () => {
	return (
		<>
			<HeroV2 />
			{/* <Hero /> */}
			<Gallery />
			<About />
			<Services />
			{/* <Process /> */}
			<SelectedProjects />
		</>
	);
};

export default HomePage;
