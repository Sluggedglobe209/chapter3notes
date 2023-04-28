const readLine = require(`readline-sync`);

myOrder = {
    sandwich:``,


}

let sandwich = readLine.question(`what type of sandwich do you want? (chicken, beef, tofu): `);
myOrder ={
    sandwich:`chicken`,
    sandwich_cost: 5.25,
}
myOrder ={
    sandwich:`beef`,
    sandwich_cost: 6.25,
}
myOrder ={
    sandwich:`tofu`,
    sandwich_cost: 5.75,
}
console.log(sandwich);


let bevchoice = readLine.question(`would you like a beverage?`);
if (bevchoice == "yes"){
    let bevsize = readLine.question("would you like small(1.00$) medium(1.75$) or large(2.25$)")
}

console.log(myOrder)





// let fries = readLine.question(`would you like any fries`);
//
// console.log(fries);

