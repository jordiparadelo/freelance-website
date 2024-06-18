// Components
import Link from "next/link";
import { Button } from "@/ui";

// Styles
import "./styles.scss";

const ContactButton = (props) => {
	return (
		<Link
			href='?modal=true&type=contact'
			scroll={false}
		>
			<Button className='contact-button'>{props.label}</Button>
		</Link>
	);
};

export default ContactButton;
