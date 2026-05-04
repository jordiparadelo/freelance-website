"use client";

import Image from "next/image";
import { useRef } from "react";
import { formatStrapiMediaUrl } from "@/lib/db";
import styles from "./styles.module.css";
import type { MarqueeData } from "./type";

const BusinessMarquee = ({ business }: { business: MarqueeData[] }) => {
  const componentRef = useRef(null);

  return (
    <div ref={componentRef} className={styles["business-marquee"]}>
      <div className={styles["business-marquee_wrapper"]}>
        {Array.from({ length: 2 }).map((_, index) => (
          <ul className={styles["business-marquee_list"]} key={index++}>
            {business?.map((business: MarqueeData) => (
              <li key={business.id} className={styles["business-marquee_item"]}>
                <a
                  href={
                    business?.details?.preview
                      ? business?.details?.preview
                      : "#"
                  }
                  target="_blank"
                  className={styles["business-marquee_link"]}
                >
                  {business?.details?.client && (
                    <Image
                      src={formatStrapiMediaUrl(business.details?.logo?.url)}
                      alt={business?.details?.client}
                      width={100}
                      height={100}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default BusinessMarquee;
