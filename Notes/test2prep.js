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

// WHILE LOOP
// syntax keyword () {}
// let i = 0 //initializer  ---variable runs before and outside the code syntax
// while (condition) {             ---only condition is placed inside parenthesis
//     console.log(i) //code block
//     i++ //final expression  --final expresion is held within the curly brackets
// }

// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// array and loops

// let colors = ['red', 'blue', 'green', 'orange']
// let i = 0
// while (i < colors.length) {
//     console.log(`${colors[i]}`);
//     i++
// }
    //remember we access values in array with array name [] box brackets and inside the braket we insert the index number in this case it will be i beasue we want to loop throught he index numbers stating at 0 which is red

// DO While Loop execute at least once

// let i = 0
// // syntax
// do {
//     console.log(`${i}`);
//     i++
// } while (i <= 10)

// for arrays use for loops because we kno the number of iterations if not use while or do while for user input


// let mph = 0
// while (mph < 100) {
//     console.log(`the speed of the car is ${mph}MPH`)
//     mph = mph + 10
// }

// create two variables a=1 b=10 print out loops 1 -10 execute at least once
// let a = 1
// let b = 10
//
// do {
//     console.log(`${a}`);
//     a++
// } while (a <= b)

// FOR LOOP

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// For loop with array
let character = ['sonic', 'tales', 'mario', 'zelda']

for (let i = 0; i < character.length; i++) {
    console.log('')
}

// how to select items in an array: arrayname[]
