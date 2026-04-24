"use client";

import { useRef } from "react";
import { animateHeaderDetails } from "./animations";
import { useCapabilities } from "./context";
import styles from "./styles.module.css";

const HeaderDetails = ({ title }: { title?: string }) => {
  const { activeCapability, previousCapability, capabilities } =
    useCapabilities();
  const componentRef = useRef(null);

  animateHeaderDetails(componentRef);

  return (
    <div
      ref={componentRef}
      className={styles["about_header_wrapper"]}
      data-target="header-details"
    >
      <p data-target="header-details-default">{title}</p>
      <p data-target="header-details-active">
        {activeCapability !== null
          ? capabilities.current[activeCapability].title
          : previousCapability !== null &&
            capabilities.current[previousCapability].title}
      </p>
    </div>
  );
};

export default HeaderDetails;
