import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function processAnimations(component: HTMLElement | null): void {
  if (!component) return;

  console.log(ScrollTrigger);

  const asideHeaderEl = component.querySelector(
    '[data-component="aside-header"]',
  );
  const navListItems = component.querySelectorAll(
    '[data-component="process-nav-item"]',
  );
  const masterTl = gsap.timeline();

  if (asideHeaderEl) {
    masterTl.addLabel("start").to(asideHeaderEl, { maxHeight: 0, opacity: 0 });
  }

  function goToTimelineStep(index: number): void {
    const progress = index / masterTl.duration() / 1;
    masterTl.progress(progress);
  }

  if (!navListItems.length) return;

  navListItems.forEach((item, index) => {
    const contentEl = item.querySelector('[data-component="process-content"]');
    const coverElements = component.querySelectorAll(
      '[data-component="process-cover"]',
    );
    const coverEl = coverElements[index];

    if (!contentEl || !coverEl) return;

    const animation = gsap.timeline();

    animation
      .from(coverEl, { opacity: 0 }, "start")
      .from(contentEl, { maxHeight: 0 }, "start");

    if (index !== navListItems.length - 1) {
      animation.to(contentEl, { maxHeight: 0 }, "end");
    }

    masterTl.add(animation);

    item.addEventListener("click", () => goToTimelineStep(index + 1));
  });

  ScrollTrigger.create({
    animation: masterTl,
    trigger: component,
    start: "top+=5% center",
    end: "bottom-=20% center",
    scrub: true,
  });

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
    ScrollTrigger.update();
  });
}
