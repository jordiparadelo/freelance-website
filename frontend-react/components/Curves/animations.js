import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const curveAnimation = (element,orientation) => {

    const windowHeight = window.innerHeight
    
    const animation = gsap.timeline().to(element, {
        '--scaleY': 0,
    })
    .to(element, {
        '--scaleY': 1,
    })

    ScrollTrigger.create({
        animation: animation,
        trigger: element,
        scrub: true,
        start: `top center`,
        end: `bottom+=${windowHeight * 0.5} center`,
    })

    return animation
}