"use client";
import { useEffect, useRef, useState } from "react";
import type { Experience } from "@/lib/db/types";
import { animateYearsScroll } from "./animations";
import { useExperience } from "./ExperienceProvider";
import styles from "./styles.module.css";

const ExperienceYears = ({ data }: { data: Experience[] }) => {
  const componentRef = useRef(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const { activeExperience } = useExperience();

  animateYearsScroll(componentRef);

  useEffect(() => {
    const yearFormatted = new Date().getFullYear();
    setCurrentYear(yearFormatted);
  }, []);

  return (
    <div className={styles["header_year"]} ref={componentRef}>
      {currentYear && (
        <p
          className="heading-style-h1"
          data-target="years-default"
          data-year={currentYear}
        >
          {currentYear}
        </p>
      )}
      <div className={styles["experience_years"]} data-target="years">
        {data.map(({ id, year }, index) => (
          <span
            key={id}
            data-target="year"
            data-year={year}
            data-selected={activeExperience === index}
            style={{ opacity: activeExperience === index ? 1 : 0 }}
            className="heading-style-h1"
          >
            {String(year)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceYears;
