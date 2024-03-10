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

export default function Home() {
	return (
		<>
			<Hero />
			<Banner />
			<About />
			<Gallery />
			<Services />
			<Products />
			<SelectedWork />
			<ClientsReviews />
		</>
	);
}
