import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const galleryAnimations = (element) => {
  const OFFSET_TRANSLATION = 20;
  const gallery = element.current;
  const screenHeight = window.innerHeight;

  gsap.set(gallery, {
    transform: `translateX(${-OFFSET_TRANSLATION}%)`,
  });

  const animation = gsap.to(gallery, {
    transform: `translateX(${OFFSET_TRANSLATION}%)`,
  });

  ScrollTrigger.create({
    animation: animation,
    trigger: gallery,
    scrub: true,
    start: `top+=20% bottom`,
    end: `bottom+=${screenHeight} bottom`,
    // markers: true
  });

  return animation;
};
