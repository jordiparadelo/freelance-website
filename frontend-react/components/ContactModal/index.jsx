"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import { useSearchParams } from "next/navigation";
import { Button, Form } from "@/components";

// Styles
import "./styles.scss";

const ContactModal = () => {
	const searchParams = useSearchParams();
	const services = searchParams.get("services");
	const contactModalRef = useRef(null);

	function setServices(services) {
		if (!services) return;

		const servicesArray = services.split(",");
		const formElements = contactModalRef.current
			? [...contactModalRef.current.elements]
			: null;

		servicesArray.forEach((service) => {
			if (!formElements) return;
			formElements.find(
				(formElement) => formElement.defaultValue === service
			).checked = true;
		});
	}

	useEffect(() => {
		if (!services) return;
		setServices(services);
	}, [services]);

	return (
		<div className='contact-modal'>
			<h2 className='contact-modal__title'>Got an idea? Let's discuss!</h2>
			<Form
				className='contact-modal__form'
				ref={contactModalRef}
			>
					<div className='form__row'>
						<div className='form__group'>
							<label htmlFor='name'>What's your name?</label>
							<input
								type='text'
								name='name'
								placeholder='Your Name'
							/>
						</div>
						<div className='form__group'>
							<label htmlFor='name'>What's your email?</label>
							<input
								type='text'
								name='email'
								placeholder='Your Email'
							/>
						</div>
					</div>
					<div className='form__group'>
						<label htmlFor='company'>
							What's the name of your organization?
						</label>
						<input
							type='text'
							name='company'
							placeholder='Your Email'
						/>
					</div>
					<div className='form__group contact-modal__services'>
						<p>What services are you looking for?</p>
						<div className='contact-modal__services-grid'>
							<label htmlFor='contact-service_development' className="form__checkbox">
								<input
									type='checkbox'
									value='development'
									name='services_contact'
									id='contact-service_development'
								/>
								<span className='active-light'></span>
								<p>Development</p>
							</label>
							<label htmlFor='contact-service_product-design' className="form__checkbox">
								<input
									type='checkbox'
									value='product-design'
									name='services'
									id='contact-service_product-design'
								/>
								<span className='active-light'></span>
								<p>Product Design</p>
							</label>
							<label htmlFor='contact-service_branding' className="form__checkbox">
								<input
									type='checkbox'
									value='branding'
									name='services'
									id='contact-service_branding'
								/>
								<span className='active-light'></span>
								<p>Branding</p>
							</label>
							<label htmlFor='contact-service_graphic-design' className="form__checkbox">
								<input
									type='checkbox'
									value='graphic-design'
									name='services'
									id='contact-service_graphic-design'
								/>
								<span className='active-light'></span>
								<p>Graphic design</p>
							</label>
						</div>
					</div>
					<div className='form__group'>
						<label htmlFor='message'>Your message</label>
						<textarea
							name='message'
							placeholder='Your Message'
						/>
					</div>
					<Button type='submit'>Submit</Button>
			</Form>
		</div>
	);
};

export default ContactModal;
