"use client";

import React from "react";
import styles from "./styles.module.scss";
import Capabilities from "./Capabilities";
import { ContentBlock, CarerList } from "@/components/ui";
import DescriptionBlock from "./DescriptionBlock";
import { CapabilityProvider } from "@/context/CapabilityContext";

const carers = [
	{
		title: "Freelancer | Web Designer & Developer",
		company: "JorDesign",
		role: "Autónomo",
		description:
			"Web Design · Front-end Developer · UX/UI Designer · Webflow Developer",
		duration: "Actualidad",
	},
	{
		title: "Web Designer",
		company: "Commute",
		role: "Autónomo",
		description: "Webflow developer · Web Design · UX/UI Designer",
		duration: "Actualidad",
	},
	{
		title: "Ux/Ui Designer",
		company: "Scandinavian Travel",
		role: "Autónomo",
		description: "Diseño de la interfaz de usuario",
		duration: "4 meses",
		years: "2022",
	},
	{
		title: "Web Designer",
		company: "Avantio",
		role: "In site",
		description:
			"Diseño de la interfaz de usuario · Desarrollo web · Diseño web · Diseño de experiencia de usuario (UX)",
		duration: "2 años, 4 meses",
		years: "2019-2022",
	},
	{
		title: "Diseñador UX/UI",
		company: "Havas Group",
		role: "In site",
		description:
			"Web Design · Ux analisis · Developing Ui interfaces · Branding · Motion Design",
		duration: "1 años, 3 meses",
		years: "2017-2019",
	},
];

const AboutContent = () => {
	return (
		<div className={styles["about-content"]}>
			<CapabilityProvider>
				<Capabilities />
				<DescriptionBlock />
			</CapabilityProvider>
			<ContentBlock title='Carer Path'>
				<CarerList carers={carers} />
			</ContentBlock>
		</div>
	);
};

export default AboutContent;
