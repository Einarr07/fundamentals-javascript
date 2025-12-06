// -------------------------------
// Base Class (Parent Class)
// -------------------------------
class Animal {
    constructor(name, type) {
        this.name = name; // Property: name of the animal
        this.type = type; // Property: type/species
    }

    // Method that ALL animals will share
    emitsSound() {
        console.log('The animal emits a sound');
    }
}


// -------------------------------
// Child Class (Subclass) - Inheritance
// -------------------------------
class Dog extends Animal { // <--- "Dog" inherits from "Animal"

    constructor(name, type, race) {
        // "super()" calls the parent constructor (Animal)
        super(name, type);
        this.race = race; // New property only for Dogs
    }

    // Method overriding (Polymorphism):
    // The child class replaces the parent's version of the method
    emitsSound() {
        console.log('The dog barks');
    }

    // New method available only for Dog instances
    run() {
        console.log(`${this.name} is running`);
    }
}


// -------------------------------
// Creating an Instance of Dog
// -------------------------------
const santasHelper = new Dog('Santas Helper', 'Dog', 'English Greyhound');

console.log(Dog.prototype);  // Prototype shared by all Dog instances
console.log(santasHelper);   // The created object

// Calling inherited and overridden methods
santasHelper.emitsSound();   // Uses the Dog version (polymorphism)
santasHelper.run();


// -------------------------------
// Adding a method only to THIS instance
// (Does NOT affect other Dog objects)
// -------------------------------
santasHelper.newMethod = function () {
    console.log(`This is a new method`);
};
santasHelper.newMethod();


// -------------------------------
// Adding a method to the Prototype
// (Now ALL Dog instances will have it)
// -------------------------------
Dog.prototype.secondMethod = function () {
    console.log(`This is another method`);
};

console.log(Dog.prototype);

// Now the instance can use the new prototype method
santasHelper.secondMethod();
