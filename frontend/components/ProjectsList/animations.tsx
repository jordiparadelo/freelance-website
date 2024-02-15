import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };
gsap.registerPlugin(ScrollTrigger);

export const listItemAnimation = (element: Element) => {
	const section: Element | any = element.closest("section");
	const container: Element | any = element.closest(".container");
	const listItems: Element[] = Array.from(element.children);

	const top = container.getBoundingClientRect().top - element.getBoundingClientRect().top
	const scrollStartOffset = section.getBoundingClientRect().top - element.getBoundingClientRect().top

	// Timeline
	const masterTl = gsap.timeline();

	// Animations
	gsap.set(section, {
		height: '300vh'
	})

	gsap.set(container, {
		position: 'sticky',
		top: top
	})

	listItems.forEach((item, index) => {
		let animation = gsap.timeline();

		const imageContainer = item.querySelector(".project__image-link");
		const paragraph = item.querySelector(".project__description");

		const maxHeigh: number | any =
			imageContainer?.querySelector(".project__image")?.clientHeight;
		const itemHeight = item.clientHeight - maxHeigh;

		const scrollStartOffset = index != 0 
		? (maxHeigh) * index 
		: 0;
		const scrollEndOffset = index != 0 
		? scrollStartOffset + maxHeigh + itemHeight
		// ? (scrollStartOffset + maxHeigh + itemHeight) * index 
		: maxHeigh + itemHeight;
		// const scrollEndOffset = index >= 0 ? (maxHeigh + itemHeight) * index : (maxHeigh + itemHeight);

		animation
			.from(paragraph, {
				opacity: 0,
				yPercent: 100
			})
			.to(imageContainer, {
				maxHeight: `${maxHeigh}px`,
			})
			.to(imageContainer, {
				maxHeight: 0,
			});

		// ScrollTrigger.create({
		// 	id: `list-timeline`,
		// 	animation: animation,
		// 	trigger: item,
		// 	start: `top+=${scrollStartOffset} center`,
		// 	end: `top+=${scrollEndOffset} center`,
		// 	scrub: true,
		// 	markers: true,
		// });

		gsap.set(imageContainer, {
			maxHeight: 0,
			overflow: "hidden",
		});

		masterTl.add(animation);
	});

	ScrollTrigger.create({
		id: `list-timeline`,
		animation: masterTl,
		trigger: section,
		start: `top-=${scrollStartOffset} center`,
		end: "bottom-=20% center",
		scrub: true,
		// markers: true,
	});

	return masterTl;
	//   gsap.set(words, { opacity: 0 });
};
