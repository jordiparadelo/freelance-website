"use client";
import { useRef } from "react";
import { loadingAnimation } from "./animations";
import styles from "./styles.module.css";

const LoadingCurtain = () => {
  const componentRef = useRef(null);

  loadingAnimation(componentRef);

  return (
    <div className={styles["loading-curtain"]} ref={componentRef}>
      <div className={styles["layout"]}>
        <div data-target="loading-bar" className={styles["loading-bar"]}>
          <div className={styles["loading-bar_progress"]}></div>
        </div>
        <span data-target="text">Loading</span>
      </div>
    </div>
  );
};

export default LoadingCurtain;
