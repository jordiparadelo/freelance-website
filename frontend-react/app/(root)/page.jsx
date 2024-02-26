import {
	Hero,
	About,
	SelectedWork,
	Gallery,
	ClientsReviews,
	Products,
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
			<Products />
			<SelectedWork />
			<ClientsReviews />
		</>
	);
}
