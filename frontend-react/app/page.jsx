import { Banner } from "@/components";
import {
	About,
	Gallery,
	Hero,
	Products,
	SelectedWork,
	Services
} from "@/layouts";
import { supabase } from "../lib/superbase";


export const metadata = {
	title: "Welcome to our Studio",
	description: "We are a Creative Studio based in Lisbon, Portugal. Our passion is creating great Designs, that will help you to grow your business.",
	keywords: "design, studio, lisbon, creative, portugal, graphic, web, app, branding",
	openGraph: {
		title: "Welcome to our Studio",
		description: "We are a Creative Studio based in Lisbon, Portugal. Our passion is creating great Designs, that will help you to grow your business.",
		images: [{
			url: "https://your-domain/your-image.jpg",
			width: 800,
			height: 600,
			alt: "Our Studio",
		}],
		site_name: "Our Studio",
		type: "website",
		profile: {
			first_name: "Your",
			last_name: "Name",
			username: "your-username",
		},
		article: {
			published_time: "2022-01-01T08:00:00+00:00",
			modified_time: "2022-01-01T09:00:00+00:00",
			expiration_time: "2022-01-01T10:00:00+00:00",
			author: "Your Name",
			section: "Section II",
			tag: ["Tag X", "Tag Y"],
		},
	},
	twitter: {
		cardType: "summary_large_image",
		handle: "@your-username",
		site: "@your-username",
		cardTypeAlt: "summary",
	},
};


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
