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

const Home = () => {
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

export default Home; //Home;
