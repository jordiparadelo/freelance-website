"use client";

import { useEffect, useState, useRef } from "react";
// Hooks
import useLiveClock from "@/hooks/useLiveClock";
// Assets
import WorldIcon from "@/public/assets/icons/globe.svg";
// Styles
import styles from "./styles.module.scss";
import useMediaQuery  from "@/hooks/useMediaQuery";

const Banner = () => {
	const [isAvailable, setIsAvailable] = useState(false);
	const [isClockVisible, setIsClockVisible] = useState(false);

	const currentTime = useLiveClock();
	const isSmallDevice = useMediaQuery('only screen and (max-width: 550px)');

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

	useEffect(() => {
		setIsAvailable(isBetweenAvailableTime);
	}, [isBetweenAvailableTime]);

	return (
		<section className={styles['banner']}>
			<div className='container'>
				<div className={styles['banner__layout']}>
					<div
						className={styles['banner__worldwide']}
					>
						{isSmallDevice ? <WorldIcon className={styles['banner__worldwide-icon']}/> : 'Working Worldwide'}
					</div>
					<button
						className={styles['banner__location']}
						onMouseEnter={handleClockVisible}
						onMouseLeave={handleClockVisible}
					>
						<span>Based on Spain</span>
						<span>{isClockVisible && currentTime.toLocaleTimeString()}</span>
					</button>
					<div
						className={styles['banner__availability']}
						style={isAvailable ? { color: "green" } : { color: "gray" }}
						data-availability={isAvailable}
					>
						<span>{isSmallDevice ? "Live" : "Available to Work"}</span>
						<span className={styles['dot-light']}></span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
