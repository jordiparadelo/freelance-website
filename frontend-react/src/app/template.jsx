'use client'
import useLenis from "@/hooks/useLenis";
import React from "react";

const Template = ({ children }) => {
	useLenis()
	return (
		<>
			{children}
		</>
	);
};

export default Template;
