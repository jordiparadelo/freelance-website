import React from "react";
// styles
import "./styles.scss";

const ContactForm = React.forwardRef(({ children, className }, ref) => {
	return (
		<form
			className={`form ${className}`}
			ref={ref}
		>
			{children}
		</form>
	);
});

export default ContactForm;
