import { Banner } from "@/components";
import {
	About,
	Gallery,
	Hero,
	Products,
	SelectedWork,
	Services
} from "@/layouts";

const Home = () => {
	return (
		<>
			<Hero />
			<Banner />
			<Gallery />
			<About />
			<Services />
			<Products />
			<SelectedWork />
			{/* <ClientsReviews /> */}
		</>
	);
};

export default Home; //Home;
