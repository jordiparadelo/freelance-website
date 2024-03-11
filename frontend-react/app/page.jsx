import {
	Hero,
	About,
	SelectedWork,
	Gallery,
	ClientsReviews,
	Products,
	Services,
	Inner,
} from "@/layouts";
import { Banner } from "@/components";
import { TransitionPage } from "../components";

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
			<ClientsReviews />
		</>
	);
};

export default Home; //Home;
