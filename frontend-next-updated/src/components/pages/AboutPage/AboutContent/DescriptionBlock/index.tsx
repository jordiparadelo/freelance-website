"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ContentBlock } from "@/components/ui";
import { useCapability } from "@/context/CapabilityContext";

// import SplitType from "split-type";

import styles from "../styles.module.scss";

const CONTENT_TYPE = {
  All: "As a Designer & Developer, I passionate to explore new ways to create functional websites and applications.",
  Frontend:
    "As a front-end developer, I love to be creative with code, putting a lot of effort into making interactions as smooth as they can be. Over the last 5 years, I have learned to use Next.js in combination with tools such as Framer Motion, GSAP.",
  Design:
    "As a designer, I love to be creative with design, putting a lot of effort into making interactions as smooth as they can be. Over the last 5 years, I have learned to use Figma in combination with tools such as Framer Motion, GSAP.",
  Animation:
    "As an animation designer, I love to be creative with animation, putting a lot of effort into making interactions as smooth as they can be. Over the last 5 years, I have learned to use Framer Motion, GSAP.",
};

const DescriptionBlock = () => {
  const { capability } = useCapability();

  const paragraph =
    Object.entries(CONTENT_TYPE).find(([key]) => {
      return key.toLowerCase().includes(capability.toLowerCase());
    })?.[1] || CONTENT_TYPE.All;

  console.log({ paragraph, capability });

  return (
    <ContentBlock title="Professional Experience">
      <AnimatedParagraph paragraph={paragraph} />
    </ContentBlock>
  );
};

const AnimatedParagraph = ({ paragraph }: { paragraph: string }) => {
  const variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          className={styles["about-content__description"]}
          key={paragraph}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {paragraph}
        </motion.p>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default DescriptionBlock;
