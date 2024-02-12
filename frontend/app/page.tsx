import { Hero, About, SelectedWork, Gallery, ClientsReviews, Products } from "@/layouts";
import { Banner } from "@/components";

export default function Home() {
	return (
		<>
			<Hero />
			<Banner/>
			<About />
			<Gallery />
			<Products />
			<SelectedWork />
			<ClientsReviews />
			</>
	);
}
