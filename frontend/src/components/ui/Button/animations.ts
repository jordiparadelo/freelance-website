import gsap from "gsap";

import SplitType from "split-type";

export const buttonAnimation = (element: HTMLElement) => {
  if (!element) return;

  const timeline = gsap.timeline({ paused: true, });
  const label: NodeListOf<HTMLElement> = element.querySelectorAll(".button__label");

  const splitWords: SplitType = new SplitType(label, { types: "chars"});

  if (!splitWords) return;

  timeline
    .to(splitWords?.chars, {
      transform: "translateY(-50%)",
	  duration: 0.5,
      stagger: 0.01,
	  opacity: (index) => index * 1,
    }, 'slideUp')
    .to(
      splitWords.chars,
      {
        transform: "translateY(-50%)",
		duration: 0.2,
        stagger: 0.01,
      },
      'slideUp'
    );

  return timeline;
//   return {
//     play: () => timeline.play(),
//     reverse: () => timeline.reverse(),
//   };
};
