// slice()
// Creates a new array by extracting a portion of an existing array.
// It DOES NOT modify the original array.
// Syntax: array.slice(startIndex, endIndex)
// - startIndex: where the extraction begins (included)
// - endIndex: where the extraction ends (NOT included)
// - Negative indexes count from the end

const animals = ['duck', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));       // From index 2 to end: ['camel', 'duck', 'elephant']
console.log(animals.slice(2, 4));    // From index 2 to 3: ['camel', 'duck']
console.log(animals.slice(1, 5));    // From index 1 to 4: ['bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(-2));      // Last two elements: ['duck', 'elephant']
console.log(animals.slice(2, -1));   // From index 2 to second-to-last: ['camel', 'duck']
console.log(animals.slice());        // Copy of original array
