// Array Iteration Methods
// These methods DO NOT modify the original array

// --- filter() ---
// Creates a new array with elements that pass a given condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(`Original array: ${numbers}`);
console.log(`Filtered even numbers: ${evenNumbers}`);


// --- reduce() ---
// Executes a reducer function on each element and returns a single value
// Parameters:
//  accumulator -> stores the accumulated result
//  currentValue -> current element of the array

// Case 1: Summing numbers
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Original numbers: ${numbersReduce}`);
console.log(`Sum: ${sum}`);

// Case 2: Word frequency counter
const word = ['name', 'lastname', 'apple', 'apple', 'banana', 'banana', 'hello'];
const wordFrequency = word.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(wordFrequency);