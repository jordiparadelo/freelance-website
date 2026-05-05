"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { GlobeIcon } from "@/assets/icons";
import useLiveClock from "@/lib/hooks/useLiveClock";
import useMediaQuery from "@/lib/hooks/useMediaQuery";

import styles from "./styles.module.scss";

const Banner = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isClockVisible, setIsClockVisible] = useState(false);

  const currentTime = useLiveClock();
  const isSmallDevice = useMediaQuery("only screen and (max-width: 550px)");

  const START_DATE = 9;
  const END_DATE = 22;

  const isBetweenAvailableTime = isTimeAvailable(START_DATE, END_DATE);

  function isTimeAvailable(startTime: number, endTime: number): boolean {
    const currentTime = new Date().getHours();
    return currentTime >= startTime && currentTime <= endTime;
  }

  function handleClockVisible(event: MouseEvent<HTMLButtonElement>) {
    const EVENT_STATES = {
      mouseenter: () => setIsClockVisible(true),
      mouseleave: () => setIsClockVisible(false),
    } as const;

    EVENT_STATES[event.type as keyof typeof EVENT_STATES]();
  }

  useEffect(() => {
    setIsAvailable(isBetweenAvailableTime);
  }, [isBetweenAvailableTime]);

  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.banner__layout}>
          <div className={styles.banner__worldwide}>
            {isSmallDevice ? (
              <GlobeIcon className={styles["banner__worldwide-icon"]} />
            ) : (
              "Working Worldwide"
            )}
          </div>
          <button
            type="button"
            className={styles.banner__location}
            onMouseEnter={handleClockVisible}
            onMouseLeave={handleClockVisible}
          >
            <span>Based on Spain</span>
            <span>{currentTime}</span>
            <span>{isClockVisible && currentTime}</span>
          </button>
          <div
            className={styles.banner__availability}
            style={isAvailable ? { color: "green" } : { color: "gray" }}
            data-availability={isAvailable}
          >
            <span>{isSmallDevice ? "Live" : "Available to Work"}</span>
            <span className={styles["dot-light"]}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
