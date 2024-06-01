"use client";

import React, { useRef } from "react";
// Styles
import "./styles.scss";
import { useGSAP } from "@gsap/react";

const RequestBox = ({frontFace, backFace, topFace, bottomFace, leftFace, rightFace, className}) => {
	const componentRef = useRef(null);

	useGSAP(
		() => {
			function handleHover(event) {
				const EVENT_TYPE = {
					mouseenter: handleMouseEnter,
					mouseleave: handleMouseLeave,
				};

				function handleMouseEnter() {
					componentRef?.current?.classList.add("hover");
				}
				function handleMouseLeave() {
					componentRef?.current?.classList.remove("hover");

					componentRef?.current.removeAttribute('style');
				}

				event.type ? EVENT_TYPE[event.type]() : null;
			}
			function handleMouseOver(event) {
				const { layerX, layerY } = event;
				const rotateX = Number(
					((2 * layerX) / componentRef?.current.clientWidth - 1).toFixed(2)
				);
				const rotateY = Number(
					((2 * layerY) / componentRef?.current.clientHeight - 1).toFixed(2)
				);

				componentRef?.current.setAttribute(
					"style",
					`--mouse-rotate-x : ${rotateX};
				--mouse-rotate-y : ${rotateY}`
				);
			}

			componentRef?.current.addEventListener("mouseenter", handleHover);
			componentRef?.current.addEventListener("mouseleave", handleHover);
			componentRef?.current.addEventListener("mousemove", handleMouseOver);
			// componentRef?.current.onMouseOver = handleMouseOver
			// componentRef?.current.onmouseenter = handleHover
			// componentRef?.current.onmouseleave = handleHover
		},
		{ scope: componentRef }
	);

	return (
		<div className={className ? `scene--box ${className}` : "scene--box"} ref={componentRef}>
			<div
				className='request-box box--rotate'
			>
				<div className='request-box__face request-box__face--front'>
				{frontFace && frontFace}
				</div>
				<div className='request-box__face request-box__face--back'>
					{backFace && backFace}
				</div>
				<div className='request-box__face request-box__face--right'>
				{rightFace && rightFace}
				</div>
				<div className='request-box__face request-box__face--left'>
				{leftFace && leftFace}
				</div>
				<div className='request-box__face request-box__face--top'>
				{topFace && topFace}
				</div>
				<div className='request-box__face request-box__face--bottom'>
				{bottomFace && bottomFace}
				</div>
			</div>
		</div>
	);
};

export default RequestBox;
