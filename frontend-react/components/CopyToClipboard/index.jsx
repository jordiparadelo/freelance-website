"use client";

import {useState} from "react";
import Image from "next/image";

// Styles
import "./styles.scss";

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
		<form onSubmit={handleSubmit} className='copy-to-clipboard' data-alert={isCopied}>
            <button
                name='button'
				aria-label='Copy to clipboard'
				type='submit'
                className='copy-to-clipboard__button'
			>
				<Image src={'/copy.svg'} width={16} height={16} alt='Copy to clipboard'/>
			</button>
			<input
				name='clipboard'
				type='text'
				value={children}
                className='copy-to-clipboard__input'
				placeholder={children}
				disabled
				readOnly
			/>
			{isCopied && <p className='copy-to-clipboard__alert-text'>Copied!</p>}
		</form>
	);
};

export default CopyToClipboard;
