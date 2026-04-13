"use client";
import { ContactButton } from "@/components/ui";
import { useColorTheme } from "@/hooks/useColorTheme";
import styles from "./styles.module.scss";

const NavActions = () => {
	const { theme, toggleTheme } = useColorTheme();
	return (
		<div className={styles["navbar-actions"]}>
			<button onClick={toggleTheme} type="button">
				{theme === "light" ? (
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Set Light Mode</title>
						<path
							fill="currentColor"
							d="M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
						/>
						<path
							fill="currentColor"
							fill-rule="evenodd"
							d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-2.102 6.148a.75.75 0 0 1 1.06 0l.393.393a.75.75 0 1 1-1.06 1.06l-.393-.393a.75.75 0 0 1 0-1.06m-12.296 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 1 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.061 0M12 20.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"
							clip-rule="evenodd"
						/>
					</svg>
				) : (
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Set Dark Mode</title>
						<path
							fill="currentColor"
							d="M12 1.992a10 10 0 1 0 9.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 0 1-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006z"
						/>
					</svg>
				)}
			</button>
			<ContactButton>Get in touch</ContactButton>
		</div>
	);
};

export default NavActions;
