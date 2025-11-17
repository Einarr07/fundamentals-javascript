// 1.- Integer and decimal
const integer = 42
const decimal = 3.141516
console.log(typeof integer, typeof decimal)

// 2.- Scientific notation
const scientific = 5e3

// 3.- Infinities and NaN
const space = Infinity
const notIsANumber = NaN

// Arithmetic operations

// 1.- Addition, subtraction, multiplication, division
const addition = 3 + 4
const subtract = 4 - 4
const mult = 7 * 6
const div = 16 / 2

// 2.- Modulus and exponentiation
const module = 16 % 0
const exponent = 4 ** 3

// Precision
const result = 0.1 + 0.2
console.log(result)
console.log(result.toFixed(1))
console.log(result === 0.3)

// Advanced operations
const squareRoot = Math.sqrt(64)
const absoluteValue = Math.abs(-7)
const random = Math.random()
console.log(`Square root of 64 = ${squareRoot}`)
console.log(absoluteValue)
console.log(random)
