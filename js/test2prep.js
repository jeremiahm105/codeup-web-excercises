"use strict"
// function greet(name) {
//     return `Hello ${name} !`
// }
//
// console.log(greet("Jay"));

//**define in an anonymous function

// let greeting = function(name) {
//     return `Hello ${name} !`
// }
// console.log(greeting("Jay"));

//**Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.

// function multipyFive(num) {
//     return num * 5
// }
//
// console.log(multipyFive("5"));

//** Write a JavaScript function that reverses a number. number = 1234
//
// 1. convert number to a string Ex. str = num.toString or num = num + "";
// 2.use split() to convert str object to an array of strings Ex. console.log('1234'.split(""));
// 3.use reverse() to reverse an array. Example: console.log(["1", "2", "3", "4"].reverse());
// 4.use join() to make an array a string Example:console.log(["1", "2", "3", "4"].reverse().join(""));
// 5 use Number() or parseInt to convert to a number in console.log
// function revNumber(num)
// {
//     num = num + ""; // step 1
//     return num.split("").reverse().join(""); //step 2-4
// }
// console.log(parseInt(revNumber(1234))); //step 5

//Another solve method with variables
// function reverseNumber(number) {
//     let numString = number.toString();
//     let reversedString = numString.split("").reverse().join("");
//     let reversedNumber = parseInt(reversedString);
//     return reversedNumber;
// }
//
// console.log(reverseNumber("1234"));

//Continue: For Loop that start at 1 and ends at 5 and chooses to continue at the number 3 and skips it.

// for (let i = 1; i < 5; i++) {
//     if (i === 3) {
//         //console.log(`skipping number 3`)
//         continue;
//     }
//     console.log(`Current iteration ${i}`)
// }

// Integer Digits Count
// Create a function named count that counts the integer's number of digits.
//Examples
// >> count(318) ➞ 3
// >> count(-92563) ➞ 5
// >> count(4666) ➞ 4


//1.convert number to string with .toString
//2.Math.abs gives absolute value
//3. return the number of digits or length using .length
// function count(number) {
//     let numberStr = number.toString();
//
//     // Return the length of the string (number of digits)
//     return numberStr.length;
// }
//
// console.log(count(318));
//**Loop
//**Array
//**Object
