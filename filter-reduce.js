// Methods that iterate over an array
// This methods NOT modify the original array

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(`Original Array: ${numbers}`)
console.log(`Filter pars numbers: ${evenNumbers}`);


// reduce()
// accumulator : Where almacenate the value
// currentValue: Values of array

// Cas2 1

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`Original numbers: ${numbersReduce}`)
console.log(`Sum: ${sum}`);

// Case 2
const word = ['name', 'lastname', 'apple', 'apple', 'banana', 'banana', 'hello'];
const wordFrecuency = word.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(wordFrecuency);