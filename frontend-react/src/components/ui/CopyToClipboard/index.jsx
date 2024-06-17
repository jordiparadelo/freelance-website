"use client";

import { useState } from "react";
// Assets
import CopyClip from '@/public/assets/copy.svg'

// Styles
import styles from "./styles.module.scss";

const CopyToClipboard = ({ children }) => {
	const [isCopied, setIsCopied] = useState(false);

	function copyToClipboard(text) {
		navigator.clipboard.writeText(text);

		setIsCopied(true);

		setTimeout(() => {
			setIsCopied(false);
		}, 3000);
	}
	function handleSubmit(e) {
		e.preventDefault();

		const formElementsMap = new Map(
			Object.entries(e.target.elements).map(([name, element]) => {
				return [name, element.value];
			})
		);

		copyToClipboard(formElementsMap.get("clipboard"));
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={styles['copy-to-clipboard']}
			data-alert={isCopied}
		>
			<button
				name='button'
				aria-label='Copy to clipboard'
				type='submit'
				className={styles['copy-to-clipboard__button']}
			>
				<CopyClip/>
			</button>
			<input
				name='clipboard'
				type='text'
				value={children}
				className={styles['copy-to-clipboard__input']}
				placeholder={children}
				disabled
				readOnly
			/>
			{isCopied && <p className={styles['copy-to-clipboard__alert-text']}>Copied!</p>}
		</form>
	);
};

export default CopyToClipboard;