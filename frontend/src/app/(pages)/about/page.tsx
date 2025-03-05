import React from "react";
import { Metadata } from "next";
import AboutPageLayout from "@/components/pages/AboutPage";


export const metadata: Metadata = {
	title: "About - Jordi Paradelo",
	description:
		"Learn more about Jordi Paradelo - A freelance developer focused on developing digital products from scratch.",
	openGraph: {
		title: "About - Jordi Paradelo",
		description:
			"Learn more about Jordi Paradelo - A freelance developer focused on developing digital products from scratch.",
	},
};

const AboutPage = () => {
	return (
		<AboutPageLayout />
	);
};

export default AboutPage;
