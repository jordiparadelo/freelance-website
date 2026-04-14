"use client";

import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";

const animateMarquee = (selector: React.RefObject<HTMLElement | null>) => {
	gsap.registerPlugin(useGSAP);
};

export default animateMarquee;
