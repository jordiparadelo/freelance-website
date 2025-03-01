"use client";

import { useGSAP } from "@gsap/react";

import React, { useRef } from "react";

import "./styles.scss";

interface RequestBoxProps {
	frontFace?: React.ReactNode;
	backFace?: React.ReactNode;
	topFace?: React.ReactNode;
	bottomFace?: React.ReactNode;
	leftFace?: React.ReactNode;
	rightFace?: React.ReactNode;
	className?: string;
}

const RequestBox: React.FC<RequestBoxProps> = ({
	frontFace,
	backFace,
	topFace,
	bottomFace,
	leftFace,
	rightFace,
	className
}) => {
	const componentRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			function handleHover(event: MouseEvent) {
				const EVENT_TYPE = {
					mouseenter: handleMouseEnter,
					mouseleave: handleMouseLeave,
				};

				function handleMouseEnter() {
					componentRef?.current?.classList.add("hover");
				}
				function handleMouseLeave() {
					componentRef?.current?.classList.remove("hover");
					componentRef?.current?.removeAttribute('style');
				}

				if (event.type && event.type in EVENT_TYPE) {
					EVENT_TYPE[event.type as keyof typeof EVENT_TYPE]();
				}
			}

			function handleMouseOver(event: MouseEvent) {
				if (!componentRef.current) return;

				const { clientX, clientY } = event;
				const rect = componentRef.current.getBoundingClientRect();
				const layerX = clientX - rect.left;
				const layerY = clientY - rect.top;

				const rotateX = Number(
					((2 * layerX) / componentRef.current.clientWidth - 1).toFixed(2)
				);
				const rotateY = Number(
					((2 * layerY) / componentRef.current.clientHeight - 1).toFixed(2)
				);

				componentRef.current.style.setProperty('--mouse-rotate-x', String(rotateX));
				componentRef.current.style.setProperty('--mouse-rotate-y', String(rotateY));
			}

			const element = componentRef.current;
			if (element) {
				element.addEventListener("mouseenter", handleHover);
				element.addEventListener("mouseleave", handleHover);
				element.addEventListener("mousemove", handleMouseOver);

				return () => {
					element.removeEventListener("mouseenter", handleHover);
					element.removeEventListener("mouseleave", handleHover);
					element.removeEventListener("mousemove", handleMouseOver);
				};
			}
		},
		{ scope: componentRef }
	);

	return (
		<div className={className ? `scene--box ${className}` : "scene--box"} ref={componentRef}>
			<div className='request-box box--rotate'>
				<div className='request-box__face request-box__face--front'>
					{frontFace}
				</div>
				<div className='request-box__face request-box__face--back'>
					{backFace}
				</div>
				<div className='request-box__face request-box__face--right'>
					{rightFace}
				</div>
				<div className='request-box__face request-box__face--left'>
					{leftFace}
				</div>
				<div className='request-box__face request-box__face--top'>
					{topFace}
				</div>
				<div className='request-box__face request-box__face--bottom'>
					{bottomFace}
				</div>
			</div>
		</div>
	);
};

export default RequestBox;
