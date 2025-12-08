// Promises in JavaScript have 3 possible states:
//
// 1. pending  -> The initial state, the promise is still running and has no result yet.
// 2. fulfilled -> The operation was completed successfully.
// 3. rejected  -> The operation failed and returned an error.
//
// A promise receives two callbacks:
// - resolve() -> Called when the operation is successful
// - reject()  -> Called when the operation fails
//
// To handle the result of a promise:
// - .then() runs when the promise is fulfilled
// - .catch() runs when the promise is rejected

// Example:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;

        if (operationSuccessful) {
            resolve("Operation completed successfully!");
        } else {
            reject("Something went wrong.");
        }
    }, 2000);
});

// Handling the result
promise
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(error => {
        console.log(error);
    });
