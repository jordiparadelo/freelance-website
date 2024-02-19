import React from "react";

// Components
import Link from "next/link";
import { Button } from "@/components";

// Styles
import "./styles.scss";

const ContactButton = (props) => {
	return (
		<Link
			href='?modal=true&type=contact'
			scroll={false}
		>
			<Button className='contactButton'>{props.label}</Button>
		</Link>
	);
};

export default ContactButton;
