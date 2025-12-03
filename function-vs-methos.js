// 1. Function passed as argument (callback)
function a() {
    // This function could contain any useful logic
}

function b(callback) {
    // Receives a function as an argument and calls it
    callback();
}

b(a); // "a" is passed as a callback

// 2. Returning functions
function principal() {
    function secondary() {
        // Nested function logic
    }

    return secondary; // Return a function instead of executing it
}

const returnedFunction = principal();
returnedFunction();

// 3. Function expression assigned to a variable
const variable = function () {
    // Anonymous function stored in a variable
};

// 4. Functions have properties and methods
function calamidad() {
    // Function body
}

const object = {};

// Using call() to change the "this" context
calamidad.call(object);

// 5. Nested functions example
function number_1() {
    function number_2() {
        function number_3() {
            // Deep nested logic
            return "Hello from number_3";
        }

        return number_3();
    }

    return number_2();
}

const result = number_1();
console.log(result);

// 6. Functions inside objects (methods)
const rocket = {
    name: "Falcon 9",
    launchMessage: function () {
        console.log("The Earth is in problems");
    }
};

rocket.launchMessage(); // This is called a method
