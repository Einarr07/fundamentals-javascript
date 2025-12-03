// A closure happens when an inner function remembers variables 
// from its outer (parent) function even after the outer function has finished executing.

function outerFunction() {
    // This variable belongs to outerFunction
    let otherVariable = "I'm from outer function";

    function innerFunction() {
        // innerFunction can still access otherVariable
        console.log(otherVariable);
    }

    // IMPORTANT: return the function itself, NOT the result of calling it
    return innerFunction;
}

const closureExample = outerFunction();
// outerFunction() has finished, but innerFunction remembers "otherVariable"
closureExample(); // prints: I'm from outer function


// --------------------------------------------
// Example 2: A counter using closures
// --------------------------------------------

function createCounter() {
    let count = 0;
    // This inner function forms a closure over "count"
    return function () {
        count++;            // inner function updates "count"
        console.log(count); // and remembers its previous value
    }
}

const counterA = createCounter();
counterA(); // 1
counterA(); // 2 (same closure, same "--count--")

const counterB = createCounter();
counterB(); // 1 (a new closure, with its own "count")


// --------------------------------------------
// Example 3: A closure returning a function that accepts arguments
// --------------------------------------------

function outer() {
    let message = "Hello,";  // variable to be remembered

    function inner(name) {
        // inner remembers "message" and also receives "name"
        console.log(message + " " + name);
    }

    return inner; // return the inner function (closure)
}

const closureA = outer();
const closureB = outer();

closureA("Martines");  // Hello, Martines
closureB("Domenica");  // Hello, Domenica
