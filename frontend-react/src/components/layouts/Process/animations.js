import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function processAnimations(component) {
	if (!component) return;

	const asideHeaderEl = component.querySelector(
		'[data-component="aside-header"]'
	);
	const navListItems = component.querySelectorAll(
		'[data-component="process-nav-item"]'
	);
	const masterTl = gsap.timeline();

	masterTl.addLabel("start").to(asideHeaderEl, { maxHeight: 0, opacity: 0 });

	function goToTimelineStep(index) {
		const progress = index / masterTl._dur / 1;
		console.log({ progress, index, masterTl });
		masterTl.progress(progress);
	}

    if(!navListItems.length) return

	navListItems.forEach((item, index) => {
		const contentEl = item.querySelector('[data-component="process-content"]');
		const coverEl = [
			...component.querySelectorAll('[data-component="process-cover"]'),
		][index];
		const animation = gsap.timeline();

		animation
			.from(coverEl, { opacity: 0 }, "start")
			.from(contentEl, { maxHeight: 0 }, "start");
		// Last item
		index !== navListItems.length - 1 &&
			animation.to(contentEl, { maxHeight: 0 }, "end");

		masterTl.add(animation);

		item.onclick = () => goToTimelineStep(index + 1);
	});

	ScrollTrigger.create({
		animation: masterTl,
		trigger: component,
		start: "top+=5% center",
		end: "bottom-=20% center",
		scrub: true,
		// onUpdate: (self) => {
		// 	const progress = self.progress;
		// 	const index = Math.floor(
		// 		navListItems.length * progress
		// 	);
		// 	goToTimelineStep(index);
		// }
		// onToggle: (self, direction) => {
		// 	const index = direction === 1 ? 0 : navListItems.length - 1;
		// 	console.log(index)
		// 	goToTimelineStep(index);
		// },
		// markers: true,
	});
}
