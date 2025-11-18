// Loop (for tradicional)
let list = ["eat", "sleep", "code", "repeat"];

console.log("\n========== LOOP (for) ==========");
for (let i = 0; i < list.length; i++) {
    console.log(`Item ${i}: ${list[i]}`);
}


// for...of
let basket = ["Apples", "Strawberries", "Banana", "Pears"];

console.log("\n========== FOR...OF ==========");
console.log("Iterating through basket:");
for (let fruit of basket) {
    console.log(`Fruit: ${fruit}`);
}


// for...in
const store = {
    mouse: 15,
    monitor: 120,
    keyboard: 50,
    headphones: 30
};

console.log("\n========== FOR...IN (keys) ==========");
for (let item in store) {
    console.log(`Key: ${item}`);
}

console.log("\n========== FOR...IN (keys + values) ==========");
for (let item in store) {
    console.log(`${item}: $${store[item]}`);
}
