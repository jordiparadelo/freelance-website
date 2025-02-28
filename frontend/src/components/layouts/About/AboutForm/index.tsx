"use client";

import React, { useState, useRef, useEffect } from "react";
// Styles
import styles from "./styles.module.scss";
// Components
import { Button } from "@/components/ui";
import Link from "next/link";

interface FormElements extends HTMLFormElement {
	elements: HTMLFormControlsCollection & {
		[key: string]: HTMLInputElement;
	};
}

const AboutForm = () => {
	const [activeButtons, setActiveButtons] = useState(false);
	const [services, setServices] = useState<string>("");
	const formRef = useRef<FormElements>(null);

	useEffect(() => {
		if (activeButtons === false) {
			formRef.current?.reset();
		}
	}, [activeButtons]);

	const handleChange = () => {
		const formElements = formRef.current?.elements;
		if (!formElements) return;

		const checkedInputs = Object.keys(formElements).filter(
			(key) => formElements[key].checked
		);
		const selectedInputs = checkedInputs
			.slice(0, checkedInputs.length / 2)
			.map((key) => formElements[key].value);

		setServices(selectedInputs.join(","));

		for (let i = 0; i < formElements.length; i++) {
			const element = formElements[i] as HTMLInputElement;
			if (element.type === "checkbox" && element.checked) {
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
			className={styles['about-form']}
			onChange={handleChange}
			onReset={() => setActiveButtons(false)}
			ref={formRef}
		>
			<div className={styles['about-form__layout']}>
				<label
					htmlFor='service_development'
					className={styles['about-form__group']}
				>
					<input
						type='checkbox'
						value='development'
						name='services'
						id='service_development'
					/>
					<span className={styles['active-light']}></span>
					<p>Development</p>
				</label>
				<label
					htmlFor='service_product-design'
					className={styles['about-form__group']}
				>
					<input
						type='checkbox'
						value='product-design'
						name='services'
						id='service_product-design'
					/>
					<span className={styles['active-light']}></span>
					<p>Product Design</p>
				</label>
				<label
					htmlFor='service_branding'
					className={styles['about-form__group']}
				>
					<input
						type='checkbox'
						value='branding'
						name='services'
						id='service_branding'
					/>
					<span className={styles['active-light']}></span>
					<p>Branding</p>
				</label>
				<label
					htmlFor='service_graphic-design'
					className={styles['about-form__group']}
				>
					<input
						type='checkbox'
						value='graphic-design'
						name='services'
						id='service_graphic-design'
					/>
					<span className={styles['active-light']}></span>
					<p>Graphic design</p>
				</label>
			</div>

			{activeButtons && (
				<div className={styles['about-form__actions']}>
					<Link
						href={`?modal=true&type=contact&services=${services}`}
						scroll={false}
					>
						<Button>Ready to start your project</Button>
					</Link>
					<button
						type='reset'
						aria-label='Reset'
						className={styles['about-form__reset']}
					>
						Reset
					</button>
				</div>
			)}
		</form>
	);
};

export default AboutForm;
