function ConvertToPascalCase(text) {
    // Remove any non-word characters and split into words
    const words = text.replace(/[^\w]/g, ' ').split(' ');

    // Capitalize the first letter of each word and join them together
    const pascalCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return pascalCaseWords.join('');
}

export { ConvertToPascalCase };