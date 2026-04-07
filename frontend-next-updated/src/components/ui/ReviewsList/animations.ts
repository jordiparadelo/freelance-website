import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, Draggable);

export function reviewAnimation(element: HTMLElement): gsap.core.Timeline {
    const target = element;
    const wrapper = target.querySelector(".reviews-list__wrapper") as HTMLElement;

    const timeline = gsap.timeline({ paused: true });

    initDraggable(wrapper, target);

    return timeline;
}

function initDraggable(dragElement: HTMLElement, bounds: HTMLElement): void {
    if (!dragElement) return;

    Draggable.create(dragElement, {
        type: "x",
        bounds: bounds,
        inertia: true,
    });
} 