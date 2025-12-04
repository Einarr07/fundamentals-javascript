// Spread Operator (...)
// The spread operator allows expansion of arrays, objects, or iterables into individual elements.
// It DOES NOT modify original data.

// 1. Copying an Array
const originalArray = [1, 2, 3, 4, 5];
const copyOfAnArray = [...originalArray];

console.log(originalArray);            // [1, 2, 3, 4, 5]
console.log(copyOfAnArray);            // [1, 2, 3, 4, 5]


// 2. Combining Arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];
const combinedArray = [...array1, ...array2];

console.log(array1);                   // [1, 2, 3, 4, 5]
console.log(array2);                   // [6, 7, 8, 9]
console.log(combinedArray);           // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 3. Creating Arrays with Additional Elements
const baseArray = [1, 2, 3, 4, 5];
const arrayWithAdditionalElements = [...baseArray, 6, 7, 8, 9];

console.log(baseArray);                // [1, 2, 3, 4, 5]
console.log(arrayWithAdditionalElements);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 4. Passing Array Elements to a Function
function sum(a, b, c) {
    return a + b + c;
}

const numbersForSum = [1, 2, 3];
const result = sum(...numbersForSum);

console.log(result);                   // 6