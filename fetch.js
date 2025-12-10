/*
 * Fetch API in JavaScript
 * -----------------------
 *
 * What is fetch?
 * The Fetch API is a modern way to make HTTP requests (GET, POST, PUT, DELETE, etc.)
 * from JavaScript. It returns a Promise and replaces older techniques like XMLHttpRequest.
 *
 * How does fetch work?
 * - `fetch(url)` sends a request and returns a Promise containing the response.
 * - To read the response body, you must call a method like `.json()`, `.text()`, or `.blob()`,
 *   which also returns a Promise.
 *
 * Basic example:
 *
 * fetch('https://example.com/api')
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 *
 * With async/await:
 *
 * const getData = async () => {
 *   try {
 *     const response = await fetch('https://example.com/api');
 *     const data = await response.json();
 *     console.log(data);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * };
 *
 */


// Select DOM elements
const listElement = document.querySelector('.posts'); // Container where posts will be rendered
const postTemplate = document.getElementById('single-post'); // (Currently unused) Template reference for posts
const form = document.querySelector('#new-post form'); // Form for creating new posts
const fetchButton = document.querySelector('#available-posts button'); // Button to load posts from the API
const postList = document.querySelector('#posts-container'); // (Unused) Possible wrapper for the posts list


/**
 * Sends an HTTP request using the Fetch API.
 *
 * @param {string} method - The HTTP method (GET, POST, DELETE, PUT...)
 * @param {string} url - The API endpoint
 * @param {object} [data] - Optional body payload for POST/PUT requests
 * @returns {Promise<any>} - Parsed JSON response
 */
const sendHTTPRequest = async (method, url, data) => {
    return await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
};


/**
 * Fetches posts from the API and displays them dynamically in the DOM.
 */
const fetchPosts = async () => {
    const responseData = await sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

    // Loop through the posts and generate DOM elements for each one
    for (const post of responseData) {
        const postContainer = document.createElement('article');
        postContainer.id = post.id;
        postContainer.classList.add('post-item');

        // Create and populate title
        const title = document.createElement('h2');
        title.textContent = post.title;

        // Create and populate description
        const body = document.createElement('p');
        body.textContent = post.body;

        // Delete button (currently only UI, no functionality attached)
        const button = document.createElement('button');
        button.textContent = 'Delete content';

        // Append children to article tag
        postContainer.append(title, body, button);

        // Insert post into the list container
        listElement.append(postContainer);
    }
};


// Attach click event to load posts when the user clicks the button
fetchButton.addEventListener('click', fetchPosts);


/**
 * Creates and sends a new post to the server.
 *
 * @param {string} title - Post title
 * @param {string} content - Post body/content
 */
const createPost = async (title, content) => {
    const userId = Math.random(); // Placeholder user ID

    const post = {
        userId,
        title,
        content
    };

    await sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
};


// Handle form submission for creating new posts
form.addEventListener('submit', async event => {
    event.preventDefault(); // Prevent page refresh

    // Get form values
    const title = event.target.querySelector('#title').value;
    const content = event.target.querySelector('#content').value;

    // Send new post to API
    await createPost(title, content);
});
