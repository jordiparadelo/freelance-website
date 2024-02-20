import React from "react";
// styles
import "./styles.scss";

const Form = React.forwardRef(({ children, className }, ref) => {
	return (
		<form
			className={`form ${className}`}
			ref={ref}
		>
			{children}
		</form>
	);
});

export default Form;
