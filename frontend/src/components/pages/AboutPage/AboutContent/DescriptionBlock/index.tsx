"use client";
import React from "react";
import styles from "../styles.module.scss";
import { ContentBlock } from "@/components/ui";
import { useCapability } from "@/context/CapabilityContext";

const CONTENT_TYPE = {
	All: "As a front-end developer, I love to be creative with code, putting a lot of effort into making interactions as smooth as they can be. Over the last 5 years, I have learned to use Next.js in combination with tools such as Framer Motion, GSAP.",
	Frontend:
		"As a front-end developer, I love to be creative with code, putting a lot of effort into making interactions as smooth as they can be. Over the last 5 years, I have learned to use Next.js in combination with tools such as Framer Motion, GSAP.",
	Design:
		"As a designer, I love to be creative with design, putting a lot of effort into making interactions as smooth as they can be. Over the last 5 years, I have learned to use Figma in combination with tools such as Framer Motion, GSAP.",
	Animation:
		"As an animation designer, I love to be creative with animation, putting a lot of effort into making interactions as smooth as they can be. Over the last 5 years, I have learned to use Framer Motion, GSAP.",
};

const DescriptionBlock = () => {
    const { capability } = useCapability();
    
	return (
		<ContentBlock title='Professional Experience'>
			<p className={styles["about-content__description"]}>
				{CONTENT_TYPE[capability]}
			</p>
		</ContentBlock>
	);
};

export default DescriptionBlock;
