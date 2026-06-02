"use client";
import Form from "next/form";
import React, { type ForwardRefRenderFunction, useActionState } from "react";
import "./styles.scss";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { createNewLead } from "@/lib/db/actions";
import Button from "../Button";

interface ContactFormProps {
	children: React.ReactNode;
	className?: string;
}

type formFields = {
	name: string;
	email: string;
	message: string;
};

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name must be at least 2 characters" })
		.max(120, { message: "Name must be at most 120 characters" })
		.regex(/^[a-zA-Z\s]+$/, {
			message: "Name cannot contain numbers or symbols",
		}),
	email: z
		.string()
		.email({ message: "Invalid email address" })
		.max(254, { message: "Email must be at most 254 characters" }),
	message: z
		.string()
		// .min(1, { message: "Message is required" })
		.max(2000, { message: "Message must be at most 2000 characters" }),
});

const ContactForm: ForwardRefRenderFunction<
	HTMLFormElement,
	ContactFormProps
> = ({ children, className }) => {
	const formConfig = useForm({
		defaultValues: {
			name: "",
			email: "",
			message: "",
		} as formFields,
		onSubmit: async ({ value }) => {
			// do server actions
			const { success, message } = await createNewLead(value);
			success ?? alert(JSON.stringify(value, null, 2));

			console.log({ success, message });
		},
		validators: {
			onChange: contactFormSchema,
		},
	});

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				await formConfig.handleSubmit();
			}}
		>
			<formConfig.Field name="name">
				{(field) => (
					<>
						<label className="form_group">
							Name
							<input
								minLength={2}
								onBlur={field.handleBlur}
								type="text"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								className="form_input"
							/>
							{!field.state.meta.isValid && (
								<em>
									{field.state.meta.errors
										?.map((error) => error?.message)
										.join(",")}
								</em>
							)}
						</label>
					</>
				)}
			</formConfig.Field>
			<formConfig.Field name="email">
				{(field) => (
					<>
						<label className="form_group">
							Email
							<input
								minLength={4}
								onBlur={field.handleBlur}
								type="email"
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								className="form_input"
							/>
							{!field.state.meta.isValid && (
								<em>
									{field.state.meta.errors
										?.map((error) => error?.message)
										.join(",")}
								</em>
							)}
						</label>
					</>
				)}
			</formConfig.Field>
			<formConfig.Field name="message">
				{(field) => (
					<>
						<label className="form_group">
							Message
							<textarea
								maxLength={256}
								onBlur={field.handleBlur}
								value={field.state.value}
								onChange={(e) => field.handleChange(e.target.value)}
								className="form_input"
							/>
							{!field.state.meta.isValid && (
								<em>
									{field.state.meta.errors
										?.map((error) => error?.message)
										.join(",")}
								</em>
							)}
						</label>
					</>
				)}
			</formConfig.Field>
			<Button type="submit">Submit Form</Button>
		</form>
	);
};

export default React.forwardRef(ContactForm);
