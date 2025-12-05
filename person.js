// Working with Objects in JavaScript
// Objects store key-value pairs and can contain properties and methods.

const person = {
    name: "John",
    age: 43,
    address: {
        street: "Av. Insurgentes 123",
        city: "Ciudad de Mexico"
    },
    greet() {
        console.log(`Hi, my name is ${this.name}!`); // Using 'this' refers to the object
    }
};

// Accessing properties and methods
console.log(person);
person.greet();

// --- Adding properties and methods dynamically ---
person.phone = "555-555-5555"; // Add a new property
console.log(person);

person.goodBye = () => {
    console.log("Good Bye!");
}; // Add a method using arrow function

person.goodBye();

// --- Removing properties and methods ---
delete person.phone;
console.log(person);

delete person.goodBye;
console.log(person);
