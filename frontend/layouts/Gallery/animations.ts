import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const galleryAnimations = (element: Element) => {
    const OFFSET_TRANSLATION = 20
    const gallery = element.querySelector(".gallery__slideshow");
    const screenHeight = window.innerHeight

    gsap.set(gallery, {
        transform: `translateX(${-OFFSET_TRANSLATION}%)`,
    })

    const animation = gsap.to(gallery, {
        transform: `translateX(${OFFSET_TRANSLATION}%)`,
    })

    ScrollTrigger.create({
        animation: animation,
        trigger: element,
        scrub: true,
        start: `top+=20% bottom`,
        end: `bottom+=${screenHeight} bottom`,
        // markers: true
    })

    return animation
}