//Arrays are 'pass-by-reference'

//This means you can change an array

//unknowingly if you change another that

//was equal to it

let nums = [5, 4, 3, 2, 1]

let newNums = nums

newNums[0] = 12

console.log('nums: ' + nums)

console.log('newNums: ' + newNums)

//notice both changed?

//this is because newNums is NOT a new

//array, it is another name for the SAME

//array in memory on your PC

//to avoid changes to one affecting the

//other, make a NEW array

//option 1: Use a for loop to push individual items

//allows you to manipulate individual items as you

//add them into the new array

let vals = [5, 4, 3, 2, 1]

let newVals = []

for (let i=0; i<vals.length; i++){

    newVals.push(vals[i]);

}

newVals[0]=12

console.log('vals: ' + vals)

console.log('newVals: ' + newVals)




//option 2: make a shallow copy

//(only works for 1d arrays)

//does not allow you to manipulate each item as you

//add it to the new list, but is faster

let ages = [5, 4, 3, 2, 1];

let newAges = [...ages];

newAges[0] = 12;

console.log('ages: ' + ages);
console.log('newAges: ' + newAges)
//to write a function to do the above

let values = [5, 4, 3, 2, 1]

compareArrays(values)







for (let i=0; i<highScores.length; i++){

    if (highScores[i]>= newScore){

        newHighScores.push(highScores[i])

    } else{

        newHighScores.push(newScore)

        newScore=0

    }

}

console.log(newHighScores)