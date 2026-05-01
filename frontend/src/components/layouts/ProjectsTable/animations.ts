"use client";

import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";

import { useWindowSize } from "usehooks-ts";

export const projectsTableAnimations = (
  element: React.RefObject<HTMLDivElement | null>,
) => {
  const windowSize = useWindowSize();

  function followMouse(
    container: HTMLDivElement | null,
    target: HTMLDivElement | null,
  ) {
    if (!container || !target) return;

    // Move the target element using quickTo and smooth ease based on mouse position
    const quickToX = gsap.quickTo(target, "x", {
      duration: 0.7,
      ease: "power2.out",
    });
    const quickToY = gsap.quickTo(target, "y", {
      duration: 0.7,
      ease: "power2.out",
    });
    const quickToRotationY = gsap.quickTo(target, "rotationY", {
      duration: 0.7,
      ease: "power2.out",
    });

    function moveTarget(e: MouseEvent) {
      if (!container || !target) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const halfW = targetRect.width / 2;
      const halfH = targetRect.height / 2;

      const xInContainer = e.clientX - containerRect.left;
      const percentHorizontal = gsap.utils.clamp(
        0,
        1,
        containerRect.width > 0 ? xInContainer / containerRect.width : 0,
      );
      const rotationY = gsap.utils.clamp(-20, 20, -20 + percentHorizontal * 40);

      // Viewport space → matches fixed + transform
      const targetX = e.clientX - halfW;
      const targetY = e.clientY - halfH;

      quickToX(targetX);
      quickToY(targetY);
      quickToRotationY(rotationY);
    }

    // function moveTarget(e: MouseEvent) {
    // 	// Get mouse position relative to container
    // 	const mouseX = e.clientX - rect.left;
    // 	const mouseY = e.clientY - rect.top;

    // 	// Calculate offsets to center the target under the mouse
    // 	let offsetX = 0;
    // 	let offsetY = 0;

    // 	if (target instanceof HTMLElement) {
    // 		const targetRect = target.getBoundingClientRect();
    // 		offsetX = targetRect.width / 2;
    // 		offsetY = targetRect.height / 2;
    // 	}

    // 	// Calculate percentage horizontally across the container (0: left, 1: right)
    // 	const percentHorizontal = gsap.utils.clamp(0, 1, mouseX / rect.width);

    // 	// Calculate final target position
    // 	const targetX = mouseX - offsetX;
    // 	const targetY = mouseY - offsetY; // Unused but calculated for clarity if needed later
    // 	const rotationY = gsap.utils.clamp(-20, 20, -20 + percentHorizontal * 40);

    // 	quickToY(targetY);
    // 	quickToX(targetX);
    // 	quickToRotationY(rotationY);
    // }

    function enterTarget() {
      gsap.fromTo(
        target,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power1.inOut" },
      );
    }
    function leaveTarget() {
      gsap.to(target, {
        scale: 0.5,
        opacity: 0,
        duration: 0.25,
      });
    }

    container.onmousemove = moveTarget;
    container.onmouseenter = enterTarget;
    container.onmouseleave = leaveTarget;
  }

  function hoverListItem(element: HTMLLIElement) {
    function enterTarget(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;

      // If the mouse is over the bottom half, set orientation 1, else -1
      const orientation = mouseY > rect.height / 2 ? 1 : -1;

      gsap.set(target, {
        "--orientation": orientation,
      });
    }

    element.onmouseenter = enterTarget;
    element.onmouseleave = enterTarget;
  }

  useGSAP(
    () => {
      if (!element) return;

      const elements = {
        card: element.current?.querySelector(
          '[data-target="card"]',
        ) as HTMLDivElement | null,
        listItem: element.current?.querySelectorAll(
          '[data-target="listItem"]',
        ) as NodeListOf<HTMLLIElement> | undefined,
      };

      followMouse(element.current, elements.card);

      elements.listItem?.forEach((item) => {
        hoverListItem(item);
      });
    },
    { scope: element, dependencies: [windowSize] },
  );
};
