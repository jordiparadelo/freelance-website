"use client";

import { useRef } from "react";
import { useCapabilities } from "./context";
import styles from "./styles.module.css";

const CapabilityList = () => {
  const { activeCapability, changeCapability, capabilities } =
    useCapabilities();
  const componentRef = useRef<HTMLUListElement | null>(null);

  const handleClick = (activeIndex: number) => {
    if (activeIndex === activeCapability) {
      changeCapability(null);
    } else {
      changeCapability(activeIndex);
    }
  };

  return (
    <ul className={styles["capabilities_list"]} ref={componentRef}>
      {capabilities.current?.map((capability, index) => {
        return (
          <li
            key={capability?.title}
            className={styles["capabilities_item"]}
            data-selected={activeCapability === index}
            onClick={() => handleClick(index)}
            onKeyUp={() => handleClick(index)}
          >
            {capability.title}
          </li>
        );
      })}
    </ul>
  );
};

export default CapabilityList;
