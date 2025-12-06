// Constructor Functions in JavaScript
// A constructor function is used to create multiple object instances with shared structure.

function Person(name, lastname, age, gender) {
    this.name = name;       // 'this' assigns the passed values to the new object
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
}

// Creating instances using the 'new' keyword
const martin = new Person('Martin', 'Zuares', 43, 'Masculine');
console.log(martin);

const pamela = new Person('Pamela', 'Rodriguez', 43, 'Female');
console.log(pamela);

// Adding shared properties using the prototype
Person.prototype.phone = '555-555-5555';
// All Person instances now share this property

// Adding property directly to ONE instance
martin.nationality = 'Peruano';
console.log(martin);

// Adding methods through the prototype
Person.prototype.greet = function () {
    console.log(`Hello, ${this.name} ${this.lastname}!`);
};

martin.greet();
pamela.greet();