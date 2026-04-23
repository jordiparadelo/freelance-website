"use client";

import type { Capability } from "@/types";
import CapabilityList from "./CapabilityList";
import ContentDescription from "./ContentDescription";
import { CapabilitiesProvider } from "./context";
import HeaderDetails from "./HeaderDetails";
import styles from "./styles.module.css";

type AboutContent = {
  id: string;
  title: string;
  description: string;
  capabilities: Capability[];
};

const AboutSectionLayout = ({ content }: { content: AboutContent }) => {
  return (
    <CapabilitiesProvider data={content.capabilities}>
      <div className={styles.about_layout}>
        <div className={styles["about_header"]}>
          <div className={styles["about_header_headline"]}>
            <span className="heading-style-uppercase">About</span>
            <HeaderDetails title={content.title} />
          </div>
          <div className={styles["about_last-work"]}>
            <figure></figure>
          </div>
        </div>
        <div className={styles["about_content"]}>
          <ContentDescription description={content.description} />

          <div className={styles["about_content_block"]}>
            <span className="heading-style-uppercase">Capabilities</span>
            <CapabilityList />
          </div>
        </div>
      </div>
    </CapabilitiesProvider>
  );
};

export default AboutSectionLayout;
