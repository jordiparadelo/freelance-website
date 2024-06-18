import {
	Hero,
	About,
	SelectedWork,
	Gallery,
	ClientsReviews,
	Products,
	Services,
	Process 
} from "@/layouts";

const Home = () => {
	return (
		<>
			<Hero/>
			<Gallery />
			<About />
			<Services />
			<Process />
			{/* <Products /> */}
			<SelectedWork />
			{/* <ClientsReviews /> */}
		</>
	);
};

export default Home; //Home;
