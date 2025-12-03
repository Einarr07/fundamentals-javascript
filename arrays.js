// Creating arrays using the Array() constructor
const fruits = Array('apple', 'banana', 'orange');
// This creates an array with 3 elements
console.log(fruits);

const justOneNumber = Array(12);
// When passing a single number, it creates an empty array with length 12
console.log(justOneNumber);

const number = Array(1, 2, 3, 4, 5);
// Passing multiple numbers creates an array with those values
console.log(number);


// ----------------------------------------
// 2. Array literal syntax (preferred way)
// ----------------------------------------

const oneNumber = [4];
// Creates an array with a single element: 4
console.log(oneNumber);

const emptyArray = [];
// Creates an empty array
console.log(emptyArray);

const sports = ['soccer', 'basketball', 'rugby'];
// Array with strings
console.log(sports);

const recipeIngredients = [
    'Flour',              // string
    true,                 // boolean
    2,                    // number
    {                     // object inside the array
        ingredients: 'Milk',
        quantity: '1 cup'
    },
    false                 // boolean
];
// Arrays can contain mixed types
console.log(recipeIngredients);


// ----------------------------------------
// Accessing array elements
// ----------------------------------------

const firstFruit = fruits[0];
// Arrays are zero-indexed → fruits[0] is "apple"
console.log(`The first fruit: ${firstFruit}`);


// ----------------------------------------
// length property
// ----------------------------------------

const numberOfFruits = fruits.length;
// length returns how many elements the array has
console.log(`Length of fruits ${numberOfFruits}`);


// ----------------------------------------
// Mutability
// ----------------------------------------

fruits.push('watermelon');
// .push() modifies the original array by adding an element at the end
console.log(fruits);


// ----------------------------------------
// Immutability
// ----------------------------------------

const newFruits = fruits.concat(['grape', 'kiwi']);
// .concat() does NOT modify the original array → it returns a new array
console.log(`Original fruits: ${fruits}`);
console.log(`New fruits: ${newFruits}`);


// ----------------------------------------
// Checking arrays with Array.isArray()
// ----------------------------------------

const isArray = Array.isArray(fruits);
// Returns true if the variable is an array
console.log(isArray);


// ----------------------------------------
// Practical exercise: Sum all elements of an array
// ----------------------------------------

const numbersArray = [1, 2, 3, 4, 5];
let total = 0;

// Classic for loop to sum array values
for (let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];  // Add each element to "total"
}

console.log(total); // Output: 15
