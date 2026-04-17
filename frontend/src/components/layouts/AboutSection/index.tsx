"use client";
import { Container, Section } from "@/components/ui";
import type { Capability } from "@/types";
import CapabilityList from "./CapabilityList";
import ContentDescription from "./ContentDescription";
import { CapabilitiesProvider } from "./context";
import HeaderDetails from "./HeaderDetails";
import styles from "./styles.module.css";

// TODO: Clean Up this code - Create animations
const CAPABILITIES: Capability[] = [
  {
    name: "Web Design",
    description:
      "Designing modern, user-friendly websites that elevate your brand and engage users.",
  },
  {
    name: "Developer",
    description:
      "Building robust, scalable web applications with clean code and best practices.",
  },
  {
    name: "Marketing Design",
    description:
      "Crafting compelling visuals and marketing materials to drive engagement and conversions.",
  },
  {
    name: "Webflow",
    description:
      "Developing responsive, interactive websites using Webflow for seamless no-code experiences.",
  },
  {
    name: "Gsap",
    description:
      "Implementing high-performance, eye-catching animations with GreenSock Animation Platform.",
  },
  {
    name: "Framer",
    description:
      "Prototyping and building interactive UIs and motion design with Framer.",
  },
  {
    name: "Wordpress",
    description:
      "Customizing and building feature-rich websites using WordPress and Bricks.",
  },
];

const AboutSection = () => {
  return (
    <CapabilitiesProvider>
      <Section id="about" className={styles.about}>
        <Container>
          <div className={styles.about_layout}>
            <div className={styles["about_header"]}>
              <div className={styles["about_header_headline"]}>
                <span className="heading-style-uppercase">About</span>
                <HeaderDetails />
              </div>
              <div className={styles["about_last-work"]}>
                <figure></figure>
              </div>
            </div>
            <div className={styles["about_content"]}>
              <ContentDescription />

              <div className={styles["about_content_block"]}>
                <span className="heading-style-uppercase">Capabilities</span>
                <CapabilityList data={CAPABILITIES} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </CapabilitiesProvider>
  );
};

export default AboutSection;
