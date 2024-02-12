"use client";

import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";

const ServiceForm = () => {
	const [activeButtons, setActiveButtons] = useState(false);
	const formRef = useRef<HTMLFormElement | null>(null);

	useEffect(() => {
		if(activeButtons === false) {
			formRef.current?.reset();
		}

	},[activeButtons])

	//TODO: Fix mapping over checkboxes -> not working well
	const handleChange = (e: any) => {
		const formElements = formRef.current ? formRef.current.elements : null;

		if (!formElements) return;

		for (let i = 0; i < formElements.length; i++) {
			if (
				(formElements[i] as HTMLInputElement).type === "checkbox" &&
				(formElements[i] as HTMLInputElement).checked
			) {
				setActiveButtons(true);
				break;
			} else {
                setActiveButtons(false);
            }
		}

	};

	return (
		<form
			action=''
			className='services-form'
			onChange={handleChange}
			onReset={() => setActiveButtons(false)}
			ref={formRef}
		>
			<div className='services-form__wrapper'>
				<label
					htmlFor='service_development'
					className='services-form__group'
				>
					<input
						type='checkbox'
						value='development'
						name='services'
						id='service_development'
					/>
					<span className='active-light'></span>
					<h4>Development</h4>
				</label>
				<label
					htmlFor='service_product-design'
					className='services-form__group'
				>
					<input
						type='checkbox'
						value='product-design'
						name='services'
						id='service_product-design'
					/>
					<span className='active-light'></span>
					<h4>Product Design</h4>
				</label>
				<label
					htmlFor='service_branding'
					className='services-form__group'
				>
					<input
						type='checkbox'
						value='branding'
						name='services'
						id='service_branding'
					/>
					<span className='active-light'></span>
					<h4>Branding</h4>
				</label>
				<label
					htmlFor='service_graphic-design'
					className='services-form__group'
				>
					<input
						type='checkbox'
						value='graphic-design'
						name='services'
						id='service_graphic-design'
					/>
					<span className='active-light'></span>
					<h4>Graphic design</h4>
				</label>
			</div>

			{activeButtons && (
				<div className='services-form__actions'>
					<button type='submit' className="services-form__submit">
						<span>Ready to start your project</span>
					</button>
					<button
						type='reset'
						aria-label='Reset'
						className="services-form__reset"
					>
						Reset
					</button>
				</div>
			)}
		</form>
	);
};

export default ServiceForm;
