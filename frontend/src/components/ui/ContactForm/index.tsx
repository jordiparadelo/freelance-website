"use client";

import { useForm } from "@tanstack/react-form";
import { type ForwardRefRenderFunction, useState } from "react";
import { Button } from "@/components/ui";

import { handleLeadSubmit } from "./actions";
import { contactFormSchema } from "./config";
import "./styles.scss";
import type { ContactFormProps, FormStatus, formFields } from "./types";

const ContactForm = ({ className, props }: ContactFormProps) => {
	const [status, setStatus] = useState<FormStatus>({
		success: null,
		message: "",
	});

	const formConfig = useForm({
		defaultValues: {
			name: "",
			email: "",
			message: "",
			location: "",
		} as formFields,
		onSubmit: async ({ value }) => {
			// Remove the website property before submit
			setStatus({ message: "" });
			const { location: website, ...sanitizedValue } = value;

			if (website?.trim() !== "") {
				console.warn(
					"Honeypot triggered: automated/bot submission detected. This kind of behavior is not allowed and will be ignored.",
				);
				return;
			}

			const { success, message } = await handleLeadSubmit(sanitizedValue);
			setStatus({ success, message, value: sanitizedValue });
		},
		validators: {
			onChange: contactFormSchema,
		},
	});

	return (
		<div
			className={`form_wrapper ${className}`}
			{...(props as unknown as
				| React.HTMLAttributes<HTMLDivElement>
				| undefined)}
		>
			{status.success !== true ? (
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						await formConfig.handleSubmit();
					}}
				>
					<formConfig.Field name="name">
						{(field) => (
							<>
								<label
									className="form_group"
									data-input-valid={field.state.meta.isValid}
								>
									Name
									<input
										name={field.name}
										minLength={2}
										onBlur={field.handleBlur}
										type="text"
										autoComplete="true"
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
								<label
									className="form_group"
									data-input-valid={field.state.meta.isValid}
								>
									Email
									<input
										name={field.name}
										minLength={4}
										onBlur={field.handleBlur}
										type="email"
										autoComplete="true"
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
								<label
									className="form_group"
									data-input-valid={field.state.meta.isValid}
								>
									Message
									<textarea
										name={field.name}
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
					{/* Honeypot input field for spam bot detection */}
					<formConfig.Field name="location">
						{(field) => (
							<>
								<input
									name={field.name}
									type="text"
									onBlur={field.handleBlur}
									tabIndex={-1}
									autoComplete="off"
									aria-hidden="true"
									value={field.state.value || ""}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
							</>
						)}
					</formConfig.Field>
					<Button type="submit">Submit Form</Button>
					{!status.success && <em> {status.message}</em>}
				</form>
			) : (
				<div>
					Thank {status.value?.name} for reach me, I'll be in touch with you
					asap!
				</div>
			)}
		</div>
	);
};

export default ContactForm;
