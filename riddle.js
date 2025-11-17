const secretNumber = Math.floor(Math.random() * 5 + 1)

const playerNumber = parseInt(
    prompt("Guess the secret number between 1 and 5")
);

console.log(`Your number is ${playerNumber}`);

if (playerNumber === secretNumber) {
    console.log("You win")
} else {
    console.log(`You lose. The secret number was ${secretNumber}`);
}