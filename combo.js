const readLine = require(`readline-sync`);

myOrder = {
    sandwich:``,


}

let sandwich = readLine.question(`what type of sandwich do you want? (chicken, beef, tofu): `);

console.log(sandwich);


let beverage = readLine.question(`would you like a beverage?`);
if (beverage == "yes"){
    let bevsize = readLine.question("would you like small medium or large")
}

console.log(beverage);

let fries = readLine.question(`would you like any fries`);

console.log(fries);

