import React from 'react'
import { Button, ContactButton } from "@/components/ui";
import styles from './styles.module.scss'

const Actions = () => {
	return (
		<div className={styles["about-info__actions"]}>
			<ContactButton className={styles["info__contact"]}>Contact me</ContactButton>
			<Button className={styles["info__cv"]} variant="secondary">CV</Button>
		</div>
	);
};

export default Actions