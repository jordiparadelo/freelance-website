import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const curveAnimation = (element,orientation) => {
    
    const animation = gsap.timeline().to(element, {
        '--scaleY': 0.5,
    })
    .to(element, {
        '--scaleY': 1.2,
    })

    ScrollTrigger.create({
        animation: animation,
        trigger: element,
        scrub: true,
        start: "top bottom-=20%",
        end: "bottom+=100 bottom-=20%",
        // markers: true
    })

    return animation
}