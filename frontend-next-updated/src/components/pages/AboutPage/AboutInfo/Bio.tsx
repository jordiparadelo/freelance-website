import Image from "next/image";
import styles from "./styles.module.scss";

const PROFILE_TAGS = [
  "Ui/Ux Designer",
  "Web Designer",
  "React Developer",
  "Webflow Designer",
  "Freelancer",
];

const Bio = () => {
  return (
    <div className={styles["about-info__bio"]}>
      <Image
        src="/assets/avatar-pic.png"
        alt="Jordi Paradelo"
        width={350}
        height={600}
        className={styles.bio__avatar}
      />
      <div className={styles.bio__header}>
        <h1 className="heading-style-1">
          Hello!
          <br />
          I&apos;m Jordi
        </h1>
      </div>

      <div className={styles.bio__content}>
        <p>
          Product Designer with 10+ years of production experience in various
          business areas.
        </p>
      </div>

      <ul className={styles.bio__tags}>
        {PROFILE_TAGS.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bio;
