"use client";

import React, { useRef, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

// Styles
import "./styles.scss";
import { Button } from "..";

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
			<form
				// action='POST'
				className='contact-modal__form'
				ref={contactModalRef}
			>
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
				<div className='form__group'>
					<label htmlFor='company'>What's the name of your organization?</label>
					<input
						type='text'
						name='company'
						placeholder='Your Email'
					/>
				</div>
				<div className='form__group services-form__wrapper'>
					<label htmlFor='services'>What services are you looking for?</label>
					<label
						htmlFor='contact-service_development'
						className='services-form__group'
					>
						<input
							type='checkbox'
							value='development'
							name='services_contact'
							id='contact-service_development'
						/>
						<span className='active-light'></span>
						<h4>Development</h4>
					</label>
					<label
						htmlFor='contact-service_product-design'
						className='services-form__group'
					>
						<input
							type='checkbox'
							value='product-design'
							name='services'
							id='contact-service_product-design'
						/>
						<span className='active-light'></span>
						<h4>Product Design</h4>
					</label>
					<label
						htmlFor='contact-service_branding'
						className='services-form__group'
					>
						<input
							type='checkbox'
							value='branding'
							name='services'
							id='contact-service_branding'
						/>
						<span className='active-light'></span>
						<h4>Branding</h4>
					</label>
					<label
						htmlFor='contact-service_graphic-design'
						className='services-form__group'
					>
						<input
							type='checkbox'
							value='graphic-design'
							name='services'
							id='contact-service_graphic-design'
						/>
						<span className='active-light'></span>
						<h4>Graphic design</h4>
					</label>
				</div>
				<div className='form__group'>
					<label htmlFor='message'>Your message</label>
					<textarea
						name='message'
						placeholder='Your Message'
					/>
				</div>
				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
};

export default ContactModal;
