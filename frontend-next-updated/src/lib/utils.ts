import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatString(inputString: string) {
	// Replace all hashes with spaces
	let formattedString = inputString.replace(/#/g, " ");

	// Replace dashes with spaces
	formattedString = formattedString.replace(/-/g, " ");

	// Capitalize the first letter of each word
	formattedString = formattedString.replace(/\b\w/g, (char) =>
		char.toUpperCase(),
	);

	return formattedString;
}

export function splitArray<T>(
	array: T[] | undefined,
	numberOfSplits = 1,
): T[][] | undefined {
	if (!array) return undefined;

	const chunkSize = Math.ceil(array.length / numberOfSplits);
	const splitArray: T[][] = [];

	for (let i = 0; i < array.length; i += chunkSize) {
		const chunk = array.slice(i, i + chunkSize);
		splitArray.push(chunk);
	}

	return splitArray;
}
