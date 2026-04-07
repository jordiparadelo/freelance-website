import styles from "./HeroV2.module.css";

const HeroV2 = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_layout}>
          <div className={styles.hero_header}>
            <h1>Flexible Designer for Big Ideas</h1>
            <p>
              Designer packed
              with Webflow & HTML resources, icons, easings and a page
              transition course
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
