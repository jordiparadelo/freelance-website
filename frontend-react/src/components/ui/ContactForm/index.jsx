import React from "react";
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

ContactForm.displayName = 'ContactForm';

export default ContactForm;
