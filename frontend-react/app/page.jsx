import {
	Hero,
	About,
	SelectedWork,
	Gallery,
	ClientsReviews,
	Products,
	Services,
	Banner
} from "@/layouts"

const Home = () => {
	return (
		<>
			<Hero />
			<Banner />
			<Gallery />
			<About />
			<Services />
			{/* <Products /> */}
			<SelectedWork />
			{/* <ClientsReviews /> */}
		</>
	);
};

export default Home; //Home;
