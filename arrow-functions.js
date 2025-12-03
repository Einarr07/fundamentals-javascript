// Traditional function
function hello(name) {
    return `Hello, ${name} I'm traditional function`
}

hello('world');

// Arrow function
const hi = (name) => {
    return `Hello, ${name} I'm arrow function` // The Explicit return
}
hi('Martines')

// Implicit return
const helloWitOneParameter = name => `Hello, ${name}, I'm one parameter`
const helloWithTwoParameters = (name, lastName) => `Hello, ${name}, ${lastName} I'm implicit return`

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messagesWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: message => {
        console.log(`${this.name} says: ${message}`);
    },
}

finctionalCharacter.messagesWithTraditionalFunction('With great power comes great responsibility.')
finctionalCharacter.messageWithArrowFunction('hi') // this is one error, because that not permitit
