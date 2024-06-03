import {
	Hero,
	About,
	SelectedWork,
	Gallery,
	ClientsReviews,
	Products,
	Services,
	Banner,
	Process 
} from "@/layouts";

const Home = () => {
	return (
		<>
			<Hero />
			<Banner />
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
