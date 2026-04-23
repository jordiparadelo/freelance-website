"use client";
import { useRef } from "react";
import { AnimatedParagraph } from "@/components/ui";
import { animateDescription } from "./animations";
import { useCapabilities } from "./context";
import styles from "./styles.module.css";

const ContentDescription = ({ description }: { description: string }) => {
  const componentRef = useRef(null);
  const { activeCapability, previousCapability, capabilities } =
    useCapabilities();

  animateDescription(componentRef);

  return (
    <div className={styles["about_content_description"]} ref={componentRef}>
      <div data-target="default">
        <AnimatedParagraph className={styles.about_title}>
          {description}
        </AnimatedParagraph>
      </div>
      <div data-target="active">
        <AnimatedParagraph className={styles.about_title}>
          {activeCapability !== null ? (
            <span key={capabilities.current[activeCapability].title}>
              {capabilities.current[activeCapability].description}
            </span>
          ) : (
            previousCapability !== null && (
              <span key={capabilities.current[previousCapability].title}>
                {" "}
                {capabilities.current[previousCapability].description}
              </span>
            )
          )}
        </AnimatedParagraph>
      </div>
    </div>
  );
};

export default ContentDescription;
