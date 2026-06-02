"use client";
import Form from "next/form";
import React, { type ForwardRefRenderFunction, useActionState } from "react";
import "./styles.scss";
import { createLead } from "@/lib/db/actions";

// import { createNewLead } from "@/lib/db/leads";

interface ContactFormProps {
	children: React.ReactNode;
	className?: string;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const initialState = {
	success: false,
	data: {
		name: "",
		email: "",
		message: "",
	},
};

const ContactForm: ForwardRefRenderFunction<
	HTMLFormElement,
	ContactFormProps
> = ({ children, className, onSubmit }, ref) => {
	const [state, action, isLoading] = useActionState(createLead, initialState);
	return (
		<Form className={`form ${className}`} ref={ref} action={action}>
			{children}
		</Form>
	);
};

export default React.forwardRef(ContactForm);
