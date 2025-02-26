import { Navbar } from "@/components/layouts";
import React from "react";

const Template = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Template;
