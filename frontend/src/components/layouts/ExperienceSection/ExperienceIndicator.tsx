"use client";
import type { Experience } from "@/lib/db/types";
import { useExperience } from "./ExperienceProvider";
import styles from "./styles.module.css";

const ExperienceIndicator = ({ data }: { data: Experience[] }) => {
  const { activeExperience } = useExperience();
  return (
    <div className={styles["indicator"]}>
      <div className={styles["indicator_list"]}>
        {data.map((item, index) => (
          <span
            className={styles["indicator_item"]}
            key={item.id}
            data-selected={activeExperience === index}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceIndicator;
