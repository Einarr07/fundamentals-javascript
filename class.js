// The class is a template (blueprint) used to create objects
class Dog {

    // The constructor method runs automatically when a new object is created
    // Parameters (name, type) will be used to initialize the object properties
    constructor(name, type,) {
        this.name = name;   // "this" refers to the current object being created
        this.type = type;   // Stores the type/breed of the dog
    }

    // Class method: all objects created from this class can use this method
    greet() {
        console.log(`gua,gua my name is: ${this.name} and I'm ${this.type}`);
        // Uses a template literal to print the dog's name and type
    }
}

// Creating an instance (object) of the class Dog using the "new" keyword
const fido = new Dog('Fido', 'Doberman');

// Display the object in the console
console.log(fido);

// Calling the greet() method from the instance
fido.greet();
