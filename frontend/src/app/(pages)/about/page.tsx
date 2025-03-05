import React from "react";
import { Metadata } from "next";
import AboutPageLayout from "@/components/pages/AboutPage";
import { ABOUT_METADATA } from "@/app/seo.config";

export const metadata: Metadata = ABOUT_METADATA

const AboutPage = () => {
	return (
		<AboutPageLayout />
	);
};

export default AboutPage;
