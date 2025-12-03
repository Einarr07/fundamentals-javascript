// ----------------------------------------
// Methods that iterate over an Array
// ----------------------------------------

// map()
// Applies a function to each element of the array
// and returns a NEW array with the transformed values
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => number * number);
// Here "number => number * number" is applied to each element
// map returns: [1, 4, 9, 16, 25]

console.log(`Numbers: ${numbers}`);           // original array is unchanged
console.log(`Square numbers: ${squareNumbers}`); // new transformed array


// ----------------------------------------
// forEach()
// Executes a function on each element
// but DOES NOT return a new array
// It is only for side effects (logging, modifying external variables, etc.)
const colors = ['red', 'green', 'blue', 'yellow'];

const iteratedColors = colors.forEach(color => console.log(color.toUpperCase()));
// forEach returns undefined → because it is not meant to create a new array

console.log(`Colors: ${colors}`);           // original array
console.log(`Iterated colors: ${iteratedColors}`); // undefined


// ----------------------------------------
// Exercise: Fahrenheit to Celsius conversion
// ----------------------------------------

const temperaturesInFahrenheits = [40, 96, 95, 104, 56];

const temperaturesInCelsius = temperaturesInFahrenheits.map(fahrenheit =>
    (5 / 9) * (fahrenheit - 32)
);
// map converts each Fahrenheit value to Celsius
// Returns a NEW array with calculated temperatures

console.log(`Temperatures Fahrenheit: ${temperaturesInFahrenheits}`);
console.log(`Temperatures Celsius: ${temperaturesInCelsius}`);


// ----------------------------------------
// Exercise: Sum elements in an Array
// Using forEach()
// ----------------------------------------

const newNumbers = [1, 2, 3, 4, 5];
let total = 0;

// forEach updates "total" by adding each number
newNumbers.forEach(number => total += number);

console.log(`Numbers: ${newNumbers}`);
console.log(`Total sum of the numbers: ${total}`);
