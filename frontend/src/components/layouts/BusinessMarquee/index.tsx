"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import type { MarqueeData } from "./type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BusinessMarquee = ({ business }: { business: MarqueeData[] }) => {
	const componentRef = useRef<HTMLDivElement>(null);
	const tl = useRef<GSAPTimeline>(null);

	useGSAP(
		() => {
			if (!componentRef.current || business.length === 0) return;

			tl.current = gsap.timeline({
				scrollTrigger: {
					id: "marquee",
					trigger: componentRef.current,
					start: "top bottom",
					toggleActions: "play pause resume pause",
				},
			});

			tl.current
				.from("[data-element='item']", {
					yPercent: 100,
					autoAlpha: 0,
					stagger: 0.1,
					duration: 0.5,
					ease: "expo.out",
				})
				.to(
					"[data-element='list']",
					{
						xPercent: -100,
						ease: "none",
						duration: Math.min(business.length, 10),
						repeat: -1,
						modifiers: {
							xPercent: gsap.utils.wrap(-100, 0),
						},
					},
					"<",
				);
		},
		{
			scope: componentRef,
			revertOnUpdate: true,
		},
	);

	return (
		<div ref={componentRef} className={styles["business-marquee"]}>
			<div
				className={styles["business-marquee_wrapper"]}
				data-element="wrapper"
			>
				{Array.from({ length: 2 }).map((_, index) => (
					<ul
						className={styles["business-marquee_list"]}
						key={index++}
						data-element="list"
					>
						{business?.map((business: MarqueeData) => (
							<li
								key={business.id}
								className={styles["business-marquee_item"]}
								data-element="item"
							>
								<a
									href={
										business?.details?.preview
											? business?.details?.preview
											: "#"
									}
									target="_blank"
									className={styles["business-marquee_link"]}
								>
									{business?.details?.client && (
										<Image
											src={business.details?.logo?.url ?? ""}
											alt={business?.details?.client}
											width={100}
											height={100}
										/>
									)}
								</a>
							</li>
						))}
					</ul>
				))}
			</div>
		</div>
	);
};

export default BusinessMarquee;
