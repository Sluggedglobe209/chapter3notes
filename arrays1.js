// //prints the second value in an array
// function firstelement (arr){
//
//     console.log( arr[0] );
//
// }
//
//   let numbs = ['1', '2', '3', '4'] ;
// firstelement(numbs[2]);

//2 function printLast(arr){
// let lastIndex = arr.length-1
// console.log(arr[lastIndex]); }
// printLast([3,12,7,14]);
// // printLast(['a', 'b', 'c'];
function upgradedPrintFirst(arr){ let arrayLength = arr.length; if (arrayLength == 0){ console.log('Empty array') } else{ console.log(arr[0]) } } upgradedPrintFirst([3,12,7,14]); upgradedPrintFirst(['a', 'b', 'c']) upgradedPrintFirst([]) function upgradedPrintLast(arr){ let arrayLength = arr.length; if (arrayLength == 0){ console.log('Empty array') } else{ let lastIndex = arr.length-1 console.log(arr[lastIndex]); } } upgradedPrintLast([3,12,7,14]); upgradedPrintLast(['a', 'b', 'c']) upgradedPrintLast([]) //4 function reverseArray(arr){ let lastIndex = arr.length-1; for (let i=lastIndex; i>=0; i--){ console.log(arr[i]) } } reverseArray([20, 10, 5, 1]); reverseArray(['a', 'b', 'c', 'd', 'e'])