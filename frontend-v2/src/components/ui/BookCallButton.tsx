import { Avatar } from "@/components/ui";
import styles from "@/styles/BookCallButton.module.css";

const BookCallButton = () => {
	return (
		<button type="button" className={`button ${styles["book-call-button"]} `}>
			<Avatar />
			<div className={styles["book-call-button__layout"]}>
				<span className="text-sm">Book a Call</span>
				<span className="text-xs">Let&apos;s talk about your project</span>
			</div>
		</button>
	);
};

export default BookCallButton;
