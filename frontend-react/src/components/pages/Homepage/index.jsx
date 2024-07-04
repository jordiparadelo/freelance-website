import {
	Hero,
	About,
	SelectedProjects,
	Gallery,
	ClientsReviews,
	Products,
	Services,
	Process,
} from "@/layouts";

const HomePage = () => {
	return (
		<>
			<Hero />
			<Gallery />
			<About />
			<Services />
			<Process />
			{/* <Products /> */}
			<SelectedProjects />
			{/* <ClientsReviews /> */}
		</>
	);
};

export default HomePage;
