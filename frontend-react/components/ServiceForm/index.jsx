"use client";

import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { Button } from "..";
import Link from "next/link";

const ServiceForm = () => {
	const [activeButtons, setActiveButtons] = useState(false);
	const [services, setServices] = useState([]);
	const formRef = useRef(null);

	useEffect(() => {
		if (activeButtons === false) {
			formRef.current?.reset();
		}
	}, [activeButtons]);

	const handleChange = (e) => {
		const formElements = formRef.current ? formRef.current.elements : null;

		const checkedInputs = Object.keys(formElements).filter(
			(key) => formElements[key].checked
		);
		const selectedInputs = checkedInputs
			.slice(0, checkedInputs.length / 2)
			.map((key) => {
				return formElements[key].value;
			});

		setServices(selectedInputs.join(","));

		for (let i = 0; i < formElements.length; i++) {

			if (formElements[i].type === "checkbox" && formElements[i].checked) {
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
					<Link
						href={`?modal=true&type=contact&services=${services}`}
						scroll={false}
					>
						<Button
							type='submit'
							// className='services-form__submit'
						>
							Ready to start your project
						</Button>
					</Link>
					<button
						type='reset'
						aria-label='Reset'
						className='services-form__reset'
					>
						Reset
					</button>
				</div>
			)}
		</form>
	);
};

export default ServiceForm;
