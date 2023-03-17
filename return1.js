const readLine = require(`readline-sync`);

function nameswapper(){
    let first = readLine.question("first")
    let last = readLine.question("last")
    return (`${first}, ${last}`)



}
nameswapper();
