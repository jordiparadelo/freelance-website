"use client";

import Actions from "./Actions";
import Bio from "./Bio";
import Location from "./Location";
import styles from "./styles.module.scss";

const AboutInfo = () => {
  return (
    <div className={styles["about-info"]}>
      <Bio />
      <Location />
      <Actions />
    </div>
  );
};

export default AboutInfo;
