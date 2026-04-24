"use client";

import Image from "next/image";
import { formatStrapiMediaUrl } from "@/lib/strapi";
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
  previewProject: {
    id: string;
    title: string;
    image: { url: string; alt?: string };
  } | null;
};

const AboutSectionLayout = ({ content }: { content: AboutContent }) => {
  const imageSrc = content.previewProject
    ? formatStrapiMediaUrl(content.previewProject.image.url)
    : null;

  return (
    <CapabilitiesProvider data={content.capabilities}>
      <div className={styles.about_layout}>
        <div className={styles["about_header"]}>
          <div className={styles["about_header_headline"]}>
            <span className="heading-style-uppercase">About</span>
            <HeaderDetails title={content.title} />
          </div>
          <div className={styles["about_last-work"]}>
            {imageSrc && content.previewProject && (
              <Image
                src={imageSrc}
                width={200}
                height={150}
                alt={content.previewProject.title}
              />
            )}
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
