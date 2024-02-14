"use client";

import { useEffect, useState, useRef, MouseEvent } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import useLiveClock from "@/hooks/useLiveClock";
import GlobeLottie from "@/public/animated-icons/Global_lottie.json";
import "./styles.scss";

const Banner = () => {
	const [isAvailable, setIsAvailable] = useState(false);
	const [isClockVisible, setIsClockVisible] = useState(false);
	const [iconAnimationPlay, setIconAnimationPlay] = useState(false);
	const currentTime = useLiveClock();
	const globeIconRef = useRef<LottieRefCurrentProps>(null);

	const GlobeIconProps = {
		animationData: GlobeLottie,
		autoplay: false,
		height: 10,
		width: 10,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const START_DATE: number = 9;
	const END_DATE: number = 22;

	const isBetweenAvailableTime: boolean = isTimeAvailable(START_DATE, END_DATE);

	function isTimeAvailable(startTime: number, endTime: number): boolean {
		const currentTime: number = new Date().getHours();
		return currentTime >= startTime && currentTime <= endTime;
	}

	function handleClockVisible(event: MouseEvent<HTMLElement>) {
		const EVENT_STATES: { [key: string]: () => void } = {
			mouseenter: () => setIsClockVisible(true),
			mouseleave: () => setIsClockVisible(false),
		};

		EVENT_STATES[event.type]();
	}

	function handleWorldwideHover(event: MouseEvent<HTMLElement>) {
		// const icon:LottieRefCurrentProps = globeIconRef.current!

		const EVENT_STATES: { [key: string]: () => void } = {
			mouseenter: () =>{
        console.log('mouse enter')
        // globeIconRef.current?.setDirection(1);
         globeIconRef.current?.play();
        },
			mouseleave: () => {
				globeIconRef.current?.goToAndStop(0, true);
			},
			// 'mouseleave': () => globeIconRef.current?.goToAndStop(0,true),
		};

		EVENT_STATES[event.type]();
	}

	useEffect(() => {
		setIsAvailable(isBetweenAvailableTime);
	}, []);

	return (
		<section className='banner'>
			<div className='container'>
				<div className='banner__wrapper'>
					<div
						className='banner__worldwide'
						onMouseEnter={handleWorldwideHover}
						onMouseLeave={handleWorldwideHover}
					>
						<Lottie
							{...GlobeIconProps}
							lottieRef={globeIconRef}
							className='icon'
						/>{" "}
						Working Worldwide
					</div>
					<button
						className='banner__location'
						onMouseEnter={handleClockVisible}
						onMouseLeave={handleClockVisible}
					>
						<span>Based on Spain</span>{" "}
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
