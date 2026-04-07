"use client";

// Context
import { HeroProvider } from "@/context/HeroContext";
import Frame from "./Frame";
// Styles
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <HeroProvider>
      <header className={styles.hero} id="hero">
        <div className={styles.hero__frame}>
          <div className={styles["hero__frame-container-wrapper"]}>
            {/* <SideNav /> */}
            <Frame />
          </div>
        </div>
      </header>
    </HeroProvider>
  );
};

export default Hero;
