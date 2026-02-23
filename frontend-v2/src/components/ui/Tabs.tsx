"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

type TabItem = {
	title: string;
	description: string;
	image: string;
	className?: string;
};

const Tabs = ({ data, className }: { data: TabItem[]; className?: string }) => {
	const componentRef = useRef<HTMLDivElement>(null);

	const { activeTab, handleTabChange, isTransitioning } =
		useTabsAnimation(componentRef);

	// 	if (!componentRef.current) return;

	// 	const elements = {
	// 		title: componentRef.current.querySelectorAll<HTMLDivElement>(
	// 			`[data-tab-item]:not([data-tab-index="${activeTab}"]) .tabs__item-title`,
	// 		),
	// 		description: componentRef.current.querySelectorAll<HTMLDivElement>(
	// 			`[data-tab-item]:not([data-tab-index="${activeTab}"]) .tabs__item-description`,
	// 		),
	// 		image: componentRef.current.querySelectorAll<HTMLDivElement>(
	// 			`[data-tab-item]:not([data-tab-index="${activeTab}"]) .tabs__item-image`,
	// 		),
	// 	};

	// 	gsap.set(Object.values(elements), {
	// 		opacity: 0,
	// 		yPercent: 100,
	// 	});
	// }, [activeTab]);

	// const exitAnimation = useCallback(() => {
	// 	if (!componentRef.current) return;

	// 	const elements = {
	// 		title: componentRef.current.querySelector<HTMLDivElement>(
	// 			`[data-tab-index="${previousTabRef.current}"] .tabs__item-title`,
	// 		),
	// 		description: componentRef.current.querySelector<HTMLDivElement>(
	// 			`[data-tab-index="${previousTabRef.current}"] .tabs__item-description`,
	// 		),
	// 		image: componentRef.current.querySelector<HTMLDivElement>(
	// 			`[data-tab-index="${previousTabRef.current}"] .tabs__item-image`,
	// 		),
	// 	};

	// 	const timeline = gsap.timeline({
	// 		onComplete: () => {
	// 			timeline.clear();
	// 		},
	// 	});

	// 	const animation = timeline.fromTo(
	// 		Object.values(elements),
	// 		{
	// 			opacity: 1,
	// 			yPercent: 0,
	// 			filter: "blur(0px)",
	// 		},
	// 		{
	// 			opacity: 0,
	// 			yPercent: 20,
	// 			ease: "power2.inOut",
	// 			duration: 0.5,
	// 			filter: "blur(10px)",
	// 		},
	// 	);

	// 	return animation as GSAPTimeline;
	// }, []);

	// const enterAnimation = useCallback(() => {
	// 	if (!componentRef.current) return;

	// 	const elements = {
	// 		title: componentRef.current.querySelector<HTMLDivElement>(
	// 			`[data-tab-index="${activeTab}"] .tabs__item-title`,
	// 		),
	// 		description: componentRef.current.querySelector<HTMLDivElement>(
	// 			`[data-tab-index="${activeTab}"] .tabs__item-description`,
	// 		),
	// 		image: componentRef.current.querySelector<HTMLDivElement>(
	// 			`[data-tab-index="${activeTab}"] .tabs__item-image`,
	// 		),
	// 	};

	// 	const timeline = gsap.timeline({
	// 		onComplete: () => {
	// 			timeline.clear();
	// 		},
	// 	});

	// 	const animation = timeline.fromTo(
	// 		Object.values(elements),
	// 		{
	// 			opacity: 0,
	// 			yPercent: 100,
	// 			filter: "blur(10px)",
	// 		},
	// 		{
	// 			opacity: 1,
	// 			yPercent: 0,
	// 			ease: "power2.inOut",
	// 			duration: 0.5,
	// 			filter: "blur(0px)",
	// 		},
	// 	);

	// 	return animation;
	// }, [activeTab]);

	// const handleTabChange = (index: number) => {
	// 	previousTabRef.current = activeTab;
	// 	setActiveTab(index);
	// };

	// useEffect(() => {
	// 	if (!componentRef.current) return;
	// 	setInitialProperties();
	// }, [setInitialProperties]);

	// useGSAP(
	// 	() => {
	// 		if (!componentRef.current || previousTabRef.current === null) return;

	// 		masterTl.current = gsap.timeline({
	// 			paused: true,
	// 			onStart: () => {
	// 				isTransitioning.current = true;
	// 			},
	// 			onComplete: () => {
	// 				isTransitioning.current = false;
	// 			},
	// 		});

	// 		masterTl.current.add(exitAnimation()?.then(() => enterAnimation()));
	// 	},
	// 	{
	// 		scope: componentRef,
	// 		dependencies: [activeTab, exitAnimation, enterAnimation],
	// 	},
	// );

	return (
		<div
			className={`tabs ${className}`}
			data-tabs
			ref={componentRef}
			data-tabs-animation={isTransitioning}
		>
			<div
				className="tabs__menu"
				aria-label="Services"
				role="tablist"
				aria-labelledby="services"
				data-tab-menu
			>
				{data.map((item, index) => (
					<button
						type="button"
						onClick={() => handleTabChange(index)}
						className="tabs__link"
						aria-label={item.title}
						key={item.title}
						aria-labelledby={`services-${index}`}
						data-tab-active={index === activeTab}
						role="tab"
						data-tab-link
					>
						<Image src={item.image} alt={item.title} width={64} height={64} />
						<span>{item.title}</span>
					</button>
				))}
			</div>
			<div
				className="tabs__panel"
				role="tabpanel"
				aria-labelledby={`${data[activeTab].title}`}
				data-tab-panel
			>
				{data.map((item, index) => (
					<div
						data-tab-index={index}
						data-tab-active={index === activeTab}
						className="tabs__items"
						key={item.title}
						role="tabpanel"
						data-tab-item
					>
						<div className="tabs__item-image" data-tab-image>
							<Image
								src={item.image}
								alt={item.title}
								width={100}
								height={100}
							/>
						</div>
						<div className="tabs__item-content" data-tab-content>
							<h3 className="tabs__item-title">{item.title}</h3>
							<p className="tabs__item-description">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const useTabsAnimation = (componentRef: React.RefObject<HTMLDivElement>) => {
	const [activeTab, setActiveTab] = useState(0);
	const previousTabRef = useRef(activeTab);
	const isTransitioning = useRef(false);
	const masterTl = useRef<gsap.core.Timeline | null>(null);

	const handleTabChange = (index: number) => {
		previousTabRef.current = activeTab;
		setActiveTab(index);
	};

	const animationTween = (index: number) => {
		if (!componentRef.current) return;

		const timeline = gsap.timeline({ paused: true });

		const target = componentRef.current.querySelector<HTMLDivElement>(
			`[data-tab-index="${index}"]`,
		);

		const elements = {
			title: target.querySelector<HTMLDivElement>(
				`[data-tab-index="${index}"] .tabs__item-title`,
			),
			description: target.querySelector<HTMLDivElement>(
				`[data-tab-index="${index}"] .tabs__item-description`,
			),
			image: target.querySelector<HTMLDivElement>(
				`[data-tab-index="${index}"] [data-tab-image]`,
			),
		};

		timeline
			.fromTo(
				[elements.title, elements.description],
				{
					opacity: 0,
					yPercent: 100,
					filter: "blur(10px)",
				},
				{
					opacity: 1,
					yPercent: 0,
					filter: "blur(0px)",
				},
			)
			.fromTo(
				elements.image,
				{
					opacity: 0,
					scale: 0.5,
					filter: "blur(10px)",
				},
				{
					opacity: 1,
					scale: 1,
					filter: "blur(0px)",
				},
				"<",
			);

		return timeline;
	};

	// Initial Set
	useGSAP(
		() => {
			if (!componentRef.current) return;
			masterTl.current = gsap.timeline();
		},
		{
			scope: componentRef,
		},
	);

	// Animate on state change
	useGSAP(
		() => {
			if (!componentRef.current) return;

			masterTl.current
				?.add(animationTween(previousTabRef.current).reverse(0))
				.add(animationTween(activeTab).play(0), "-=0.125")
				.totalDuration(5);
		},
		{
			scope: componentRef,
			dependencies: [activeTab],
		},
	);

	return {
		activeTab,
		setActiveTab,
		handleTabChange,
		isTransitioning,
	};
};

export default Tabs;
