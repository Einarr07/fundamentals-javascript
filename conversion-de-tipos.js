// Explicit type casting

// String to number
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

//
const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit type Casting
const stringValue = '42'
const numberValue = 10
const booleanValue = true

console.log("*".repeat(10));
console.log("STRING TO...");
console.log(`String with String: ${stringValue + stringValue}`);
console.log(`String with Number: ${stringValue + numberValue}`);
console.log(`String with Boolean: ${stringValue + booleanValue}`);

console.log("*".repeat(10));
console.log("NUMBER TO...");
console.log(`Number with String: ${numberValue + stringValue}`);
console.log(`Number with Number: ${numberValue + numberValue}`);
console.log(`Number with Boolean: ${numberValue + booleanValue}`);

console.log("*".repeat(10));
console.log("BOOLEAN TO...");
console.log(`Boolean with String: ${booleanValue + stringValue}`);
console.log(`Boolean with Number: ${booleanValue + numberValue}`);
console.log(`Boolean with Boolean: ${booleanValue + booleanValue}`);

console.log("*".repeat(10));
console.log();

console.log("Trick: How to know if JavaScript concatenates or adds?");
console.log("- If there is at least one string, JavaScript performs concatenation.");
console.log("- If there are no strings, JavaScript performs addition.");

