import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";
import AboutServices from "./AboutServices";
import styles from "./styles.module.scss";

const AboutPage = () => {
  return (
    <main className={`${styles["about-page"]} padding-global`}>
      <div className="container">
        <div className={styles["about-layout"]}>
          <aside className={styles["about-layout__side"]}>
            <AboutInfo />
          </aside>
          <section className={styles["about-layout__main"]} data-lenis-prevent>
            <AboutContent />
          </section>
          <aside className={styles["about-layout__side"]}>
            <AboutServices />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
