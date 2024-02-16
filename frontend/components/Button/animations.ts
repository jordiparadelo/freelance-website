// import { useGSAP } from "@gsap/react";

// import { useEffect, useLayoutEffect, useRef } from "react";

// import SplitType from "split-type";

// import gsap from "gsap";

// export function buttonAnimation(element: HTMLElement) {
// 	const labels: HTMLElement[] = Array.from(
// 		element?.querySelectorAll(".button__label")
// 	);

// 	console.log({ labels });

// 	const splitWords = new SplitType(labels, { types: "chars" });

// 	const animation = gsap.timeline({ paused: true }).to(splitWords.chars, {
// 		transform: "translateY(-40%)",
// 		opacity: 0,
// 		duration: 0.3,
// 		ease: "power1.inOut",
// 		stagger: 0.01,
// 	});

// 	return animation;
// }

// export const useButtonAnimation = (element: HTMLElement) => {
// 	const animation = useRef<gsap.core.Timeline | null>(null);

// 	useGSAP((context) => {

//         console.log(context)
// 			// animation.play();
// 			animation.current = gsap.timeline({ paused: true }).to(".button__label", {
// 				scale: 1.2,
// 				duration: 2,
// 			});
// 			// animation = buttonAnimation(element);
// 		},
// 		{ scope: element }
// 	);

// 	const playAnimation = () => {
// 		element && animation?.current!.play();
// 	};

// 	const reverseAnimation = () => {
// 		element && animation?.current!.reverse();
// 	};

// 	return { playAnimation, reverseAnimation };
// };

// TODO: Solve this please
import { useEffect, useRef } from "react";

import SplitType from "split-type";

import gsap from "gsap";

export function buttonAnimation(element: HTMLElement | null) {
    if (!element) return;

    const labels = Array.from(element.querySelectorAll<HTMLElement>(".button__label"));

    const splitWords = new SplitType(labels, { types: "chars" });

    return gsap.timeline({ paused: true }).to(splitWords.chars, {
        transform: "translateY(-40%)",
        opacity: 0,
        duration: 0.3,
        ease: 'power1.easeInOut',
        stagger: 0.01,
    });
}

export const useButtonAnimation = (element: HTMLElement | null) => {
    const animation = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!element) return;

        animation.current = buttonAnimation(element);

        return () => {
            if (animation.current) {
                animation.current.kill(); // Kill animation on unmount
            }
        };
    }, [element]);

    const playAnimation = () => {
        if (animation.current) {
            console.log('playing')
            animation.current.play();
        }
    };

    const reverseAnimation = () => {
        if (animation.current) {
            console.log('reversing')
            animation.current.reverse();
        }
    };

    return { playAnimation, reverseAnimation };
};
