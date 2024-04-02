export function formatString(inputString) {
	// Replace all hashes with spaces
	let formattedString = inputString.replace(/#/g, " ");

	// Replace dashes with spaces
	formattedString = formattedString.replace(/-/g, " ");

	// Capitalize the first letter of each word
	formattedString = formattedString.replace(/\b\w/g, (char) =>
		char.toUpperCase()
	);

	return formattedString;
}

export function splitArray(array, numberOfSplits = 1) {
	if(!array) return

	// console.log({array})

	const chunkSize = Math.ceil(array.length / numberOfSplits);
	const splitArray = [];

	for (let i = 0; i < array.length; i += chunkSize) {
		const chunk = array.slice(i, i + chunkSize);
		splitArray.push(chunk);
	}

	return splitArray;
}

