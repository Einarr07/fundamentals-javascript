// Pure vs Impure Functions Notes

// Pure Functions
// Characteristics:
// 1. No side effects
// 2. Do not modify external state
// 3. Same inputs -> same outputs

function sum(a, b) {
    return a + b;
}

function square(x) {
    return x * x;
}

function addTen(y) {
    return y + 10;
}

// Impure Functions
// Examples of side effects:
// 1. Change global variables
// 2. Modify parameters
// 3. Make HTTP requests
// 4. Print to console or screen
// 5. Manipulate the DOM
// 6. Use current time/date

function suma(a, b) {
    console.log('A', a); // console output = side effect
    return a + b;
}

let total = 0;

function sumWithSideEffect(a) {
    total += a; // modifies global variable = side effect
    return total;
}

// Using pure functions together
const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);