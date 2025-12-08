/*
 * Async / Await in JavaScript
 * ---------------------------
 *
 * What is async?
 * - The keyword `async` is used to declare a function as asynchronous.
 * - An async function always returns a Promise (even if you don't return one explicitly).
 * - Inside an async function, you can use the `await` keyword.
 *
 * What is await?
 * - `await` can only be used inside an async function.
 * - It pauses execution until the Promise is fulfilled (resolved or rejected).
 * - When the Promise resolves, the result is returned and assigned to the variable on the left.
 * - If the Promise is rejected, the `try/catch` block (if present) will catch the error.
 */

// Example 1: Basic async/await usage
const fetchData2 = async () => {
    try {
        const response = await fetch('https://thesimpsonsapi.com/api/characters');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching characters:", error);
    }
};


// Example 2: Iterating multiple async calls using `for await...of`
const urls = [
    'https://thesimpsonsapi.com/api/episodes',
    'https://thesimpsonsapi.com/api/locations'
];

const fetchNewData = async () => {
    try {
        for await (let url of urls) {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

// Run function
fetchNewData();
