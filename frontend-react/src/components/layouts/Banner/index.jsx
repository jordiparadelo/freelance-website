"use client";

import { useEffect, useState, useRef } from "react";
// Hooks
import useLiveClock from "@/hooks/useLiveClock";
// Assets
import GlobeLottie from "@/public/assets/animated-icons/global.json";
// Styles
import "./styles.scss";

const Banner = () => {
	const [isAvailable, setIsAvailable] = useState(false);
	const [isClockVisible, setIsClockVisible] = useState(false);

	const currentTime = useLiveClock();
	const globeIconRef = useRef();

	const GlobeIconProps = {
		animationData: GlobeLottie,
		autoplay: false,
		height: 10,
		width: 10,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const START_DATE = 9;
	const END_DATE = 22;

	const isBetweenAvailableTime = isTimeAvailable(START_DATE, END_DATE);

	function isTimeAvailable(startTime, endTime) {
		const currentTime = new Date().getHours();
		return currentTime >= startTime && currentTime <= endTime;
	}

	function handleClockVisible(event) {
		const EVENT_STATES = {
			mouseenter: () => setIsClockVisible(true),
			mouseleave: () => setIsClockVisible(false),
		};

		EVENT_STATES[event.type]();
	}

	function handleWorldwideHover(event) {
		const EVENT_STATES = {
			mouseenter: () => {
				globeIconRef.current?.play();
			},
			mouseleave: () => {
				globeIconRef.current?.goToAndStop(0, true);
			},
		};

		EVENT_STATES[event.type]();
	}

	useEffect(() => {
		setIsAvailable(isBetweenAvailableTime);
	}, [isBetweenAvailableTime]);

	return (
		<section className='banner'>
			<div className='container'>
				<div className='banner__wrapper'>
					<div
						className='banner__worldwide'
					>
						Working Worldwide
					</div>
					<button
						className='banner__location'
						onMouseEnter={handleClockVisible}
						onMouseLeave={handleClockVisible}
					>
						<span>Based on Spain</span>
						<span>{isClockVisible && currentTime.toLocaleTimeString()}</span>
					</button>
					<div
						className='banner__availability'
						style={isAvailable ? { color: "green" } : { color: "gray" }}
						data-availability={isAvailable}
					>
						<span>Available to Work</span>
						<span className='dot-light'></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
