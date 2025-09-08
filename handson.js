//

//Print Odd number in an array using normal function
// var oddNumbers = [];
// function printOddNumbers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddNumbers.push(arr[i]);
//         }
//     }
//     return oddNumbers;
// }

// console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// //print odd number in an array using anonymous function
// var oddNumbers1 = [];
// const printOddNumbers1 = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddNumbers1.push(arr[i]);
//         }
//     }
//     return oddNumbers1;
// }

// console.log(printOddNumbers1([11, 12, 13, 14, 15, 16, 17, 18, 19]));

//print odd number in an array using IIFE
// var oddNumbers = [];

// (function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddNumbers.push(arr[i]);
//         }
//     }
// })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log(oddNumbers);

// //Print Odd number in an array using arrow function
var oddNumbers = [];
const printOddNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
}

console.log(printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));