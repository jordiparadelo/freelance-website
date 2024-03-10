"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
// Libs
import { useWindowSize } from "@uidotdev/usehooks";

// Styles
import "./styles.scss";

const InteractiveBackground = () => {
  const componentRef = useRef(null);
	// const { width, height } = useWindowSize();
	const [divisions, setDivisions] = useState(100);
  let parentRef = useRef(null);
  let height
  let width

	useLayoutEffect(() => {
    if (!componentRef.current) return;

    function updateMousePosition(e) {
      const {clientX, clientY} = e
      componentRef?.current.style.setProperty('--mouse-x', `${clientX}px`);
      componentRef?.current.style.setProperty('--mouse-y', `${clientY}px`);
    }

    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    }

	}, []);

	return (
		<div className='interactive-background' ref={componentRef}>
			{/* {[...Array(divisions)].map((_, index) => {
				return (
					<span
						className='interactive-background__cell'
						key={index}
					></span>
				);
			})} */}
		</div>
	);
};

export default InteractiveBackground;
