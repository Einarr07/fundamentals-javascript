// Array Iteration Methods
// These methods DO NOT modify the original array

// --- find() ---
// Returns the first element that matches a condition

const multipleOf5 = [5, 10, 15, 20];

const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log(`Original: ${multipleOf5}`);
console.log(`First number greater than 10: ${firstNumberGreaterThan10}`);


// --- findIndex() ---
// Returns the index of the first element that matches a condition

const randomNumber = [6, 14, 32, 45, 654, 2345];

const indexNumber = randomNumber.findIndex(number => number > 5);

console.log(`Original: ${randomNumber}`);
console.log(`Found index: ${indexNumber}`);
