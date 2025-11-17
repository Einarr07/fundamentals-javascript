let expr = "Papayas";

switch (expr) {
    case "Oranges":
        console.log("The price of Oranges is $20");
        break;
    case "Apples":
        console.log("The price of Apples is $30");
        break;
    case "Strawberries":
        console.log("The price of Strawberries is $40");
        break;
    case "Papayas":
        console.log("The price of Papayas is $10");
        break;
    default:
        console.log(`The fruit ${expr} is not available`);
}
