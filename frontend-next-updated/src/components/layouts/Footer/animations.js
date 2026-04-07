import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const footerAnimation = (element) => {
    if(!element) return;
    
    const offsetView = window.innerHeight * 0.3
	let animation = gsap.from(element, {
        paddingInline: 0,
        '--corners': 0
    })
    
    ScrollTrigger.create({
        trigger: element,
        animation: animation,
        start: `top-=${offsetView} center`,
        end: "top center",
        scrub: 1,
        // markers: true,
    })
	return animation;
};
