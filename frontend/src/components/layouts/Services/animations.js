import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const serviceAnimation = (element) => {
	// Get all the service cards
	const servicesCards = element.querySelectorAll(
		'[data-component="service-card"]'
	);

	// Get the position and dimensions of the element
	const { top: elementTop, height: elementHeight } =
		element.getBoundingClientRect();

	// Get the parent container of the service cards
	const cardContainer = servicesCards[0].parentElement;

	// Get the position and dimensions of the container
	const {
		top: containerTop,
		width: containerWidth,
		height: containerHeight,
	} = cardContainer.getBoundingClientRect();

	// Get the width of a service card
	const cardWidth = servicesCards[0].offsetWidth;


	// Calculates the position of a service card based on its index.
	const calculateCardPosition = (index) => {
		const cardCenter =
			-((index + 0.5) * cardWidth) + containerWidth / 2;
		return cardCenter;
	};

	// Calculates the rotation of a service card based on its index.
	const calculateCardRotation = (index) => {
		const cardIndex = index + 1; // 1 = first card
		const cardCenter =
			cardIndex - Math.floor(containerWidth / (cardWidth * 2));
		const rotation =
			(cardCenter / Math.floor(containerWidth / cardWidth)) * 20;
		return rotation;
	};

	// Calculate the scroll end point
	const scrollEnd =
		elementTop +
		elementHeight -
		(containerTop + containerHeight - containerHeight / 2);

		gsap.set(servicesCards, { zIndex: (index) => servicesCards.length - index});

	// Animate the service cards
	const animation = gsap.from(servicesCards, {
		x: (index, target) => calculateCardPosition(index, target),
		rotation: (index, target) => calculateCardRotation(index, target),
	});

	// Create a ScrollTrigger for the animation
	ScrollTrigger.create({
		animation: animation,
		trigger: element,
		scrub: true,
		start: `top+=20% center`,
		end: `bottom-=${scrollEnd} center`,
	});

	return animation;
};



