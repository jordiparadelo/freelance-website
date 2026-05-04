"use client";

import { AnimatedParagraph } from "@/components/ui";
import type { Experience } from "@/lib/db/types";
import { ExperienceProvider } from "./ExperienceProvider";
import { ExperienceTable } from "./ExperienceTable";
import ExperienceYears from "./ExperienceYears";
import styles from "./styles.module.css";

const ExperienceLayout = ({ data }: { data: Experience[] }) => {
  return (
    <ExperienceProvider>
      <div className={styles["layout"]}>
        <aside className={styles["details"]} data-target="details">
          <div className={styles["header_details"]}>
            <h2 className="heading-style-uppercase">Experience</h2>
            <ExperienceYears data={data} />
          </div>
        </aside>
        <div className={styles["content"]}>
          <AnimatedParagraph className={styles["title"]}>
            8+ years in the design industry, partnering with companies, teams,
            and businesses to deliver solutions-driven design.
          </AnimatedParagraph>
          <ExperienceTable data={data} />
        </div>
      </div>
    </ExperienceProvider>
  );
};

export default ExperienceLayout;
