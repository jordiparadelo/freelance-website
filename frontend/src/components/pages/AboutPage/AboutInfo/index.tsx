import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Button, ContactButton } from "@/components/ui";
const PROFILE_TAGS = [
  'Ui/Ux Designer',
  'Web Designer',
  'React Developer',
  'Webflow Designer',
  'Freelancer',
]

const AboutInfo = () => {
	return (
		<div className={styles["about-info"]}>
			<Bio />
			<Location />
			<Actions />
		</div>
	);
};

const Bio = () => {
	return (
		<div className={styles["about-info__bio"]}>
      <Image src="/assets/avatar-pic.jpeg" alt="Jordi Paradelo" width={100} height={100} className={styles["bio__avatar"]} />
			<div className={styles["bio__header"]}>
				<h1 className="heading-style-1">
					Hello!
					<br />
					I&apos;m Jordi
				</h1>
			</div>

			<div className={styles["bio__content"]}>
				<p>
					Product Designer with 10+ years of production experience in various
					business areas.
				</p>
			</div>

      <ul className={styles["bio__tags"]}>
        {PROFILE_TAGS.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
		</div>
	);
};

const Location = () => {
	return (
		<div className={styles["about-info__location"]}>
			<p>Barcelona, ES</p>
			<p>17:51 GMT+1 · Local time</p>
		</div>
	);
};

const Actions = () => {
	return (
		<div className={styles["about-info__actions"]}>
			<ContactButton className={styles["info__contact"]}>Contact me</ContactButton>
			<Button className={styles["info__cv"]} variant="secondary">CV</Button>
		</div>
	);
};

export default AboutInfo;
