export function formatString(inputString) {
    // Replace all hashes with spaces
    let formattedString = inputString.replace(/#/g, ' ');

    // Replace dashes with spaces
    formattedString = formattedString.replace(/-/g, ' ');

    // Capitalize the first letter of each word
    formattedString = formattedString.replace(/\b\w/g, char => char.toUpperCase());

    return formattedString;
}