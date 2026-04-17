"use client";
import Image from "next/image";
import { useRef } from "react";
import { PROJECTS } from "@/lib/constants";
import type { Project } from "@/types";
import styles from "./styles.module.css";

const BusinessMarquee = () => {
  const componentRef = useRef(null);

  return (
    <div ref={componentRef} className={styles["business-marquee"]}>
      <div className={styles["business-marquee_wrapper"]}>
        <ul className={styles["business-marquee_list"]}>
          {PROJECTS?.map((business: Project) => (
            <li key={business.id} className={styles["business-marquee_item"]}>
              <a
                href={business.preview ? business.preview : "#"}
                target="_blank"
                className={styles["business-marquee_link"]}
              >
                {business.details?.logo && business.details?.client && (
                  <Image
                    src={business.details?.logo}
                    alt={business.details?.client}
                    width={100}
                    height={100}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles["business-marquee_list"]}>
          {PROJECTS?.map((business: Project) => (
            <li key={business.id} className={styles["business-marquee_item"]}>
              <a
                href={business.preview ? business.preview : "#"}
                target="_blank"
                className={styles["business-marquee_link"]}
              >
                {business.details?.logo && business.details?.client && (
                  <Image
                    src={business.details?.logo}
                    alt={business.details?.client}
                    width={100}
                    height={100}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessMarquee;
