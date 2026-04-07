"use client";

import { useState } from "react";

import { useInterval } from "usehooks-ts";

interface UseLiveClockProps {
  timezone?: string;
  format?: "HH" | "HH:mm" | "HH:mm:ss";
  interval?: number;
  static?: boolean;
}

const DEFAULT_CONFIG: UseLiveClockProps = {
  timezone: "Europe/Madrid",
  format: "HH:mm",
  interval: 1000,
  static: false,
};

const getFormat = (format: UseLiveClockProps["format"]) => {
  switch (format) {
    case "HH":
      return {
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        second: "2-digit" as const,
      };
    case "HH:mm":
      return {
        hour: "2-digit" as const,
        minute: "2-digit" as const,
      };
    case "HH:mm:ss":
      return {
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        second: "2-digit" as const,
      };
    default:
      return {
        hour: "2-digit" as const,
        minute: "2-digit" as const,
      };
  }
};

const useLiveClock = (config: UseLiveClockProps = DEFAULT_CONFIG) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  useInterval(updateTime, config.interval || DEFAULT_CONFIG.interval || null);

  return currentTime.toLocaleTimeString("en-US", {
    timeZone: config.timezone ?? DEFAULT_CONFIG.timezone,
    ...getFormat(config.format ?? DEFAULT_CONFIG.format),
  });
};

export default useLiveClock;
