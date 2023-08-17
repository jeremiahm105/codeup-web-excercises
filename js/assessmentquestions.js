// "use strict";
// ​
// /**
//  * Write your solutions here.
//  *
//  * **Note**: While normally it is good practice to wrap your javascript in an
//  * immediately invoked function expression (iife), you should _not_ do that
//  * here. If you do, the automated tests will not be able to see your functions.
//  */

// // Define a function named isANumber that takes in a value and returns true if the input is numeric, or false if the input is not numeric. Numeric strings should not be considered as numbers in this function, and should return false.

// // isANumber(23)               // true
// // isANumber("42")             // false
// // isANumber(3.141)            // true
// // isANumber("")               // false
// // isANumber(true)             // false
// // isANumber("Bob")            // false
// // isANumber([1,2,3])          // false

function isANumber(input){
    if(typeof input === "number") {
        return true;
    } else {
        return false;
    }

function isANumber(input) {
    return typeof input === "number"
}

//Notes to make numeric use the "number" and to and the typeof === to strictly state what the
//Notes if the question says return true use first line to return the type of input.simple example of return the value with a strictly equal ===


// // Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
// //
// // increment(0)                // 1
// // increment("10")             // 11
// // increment(-5)               // -4
// // increment("Bob")            // false
// // increment([1, 2, 3])        // false
// // increment(true)             // false
// // increment(null)             // false

function increment(input){
    if(!isNaN(parseInt(input))){
        return Number(input) + 1;
    } else {
        return false;
    }
}

// // Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.
// //
// // decrement(19)               // 18
// // decrement(0)                // -1
// // decrement("4")              // 3
// // decrement("Bob")            // false
// // decrement([1, 2, 3])        // false
// // decrement(false)            // false
// // decrement(null)             // false

// function decrement(input){
//     if(!isNaN(parseInt(input))){
//         return Number(input) - 1;
//     } else {
//         return false;
//     }

// }
// // Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.

// // getHighestNumber(1, 3, 2)           // 3
// // getHighestNumber(0, 1, "2")         // 2
// // getHighestNumber(9, 3, -20)         // 9
// // getHighestNumber(2, 2, 2)           // 2
// // getHighestNumber(2, 5, 5)           // 5
// // getHighestNumber(1, 2, 'x')         // false
// // getHighestNumber("a", "b")          // false
// // getHighestNumber()                  // false

// function getHighestNumber(input1, input2, input3){
//     let num1 = parseInt(input1);
//     let num2 = parseInt(input2);
//     let num3 = parseInt(input3);

//     if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
//         return false;
//     }

//     if (num1 > num2 && num1 > num3){
//         return num1;
//     } else if (num2 > num1 && num2 > num3){
//         return num2;
//     } else {
//         return num3;
//     }

//     // return Math.max(input1, input2, input3);

// }

// // Define a function named parseNumber that parses (converts) a numeric String and returns its value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.
// //
// // parseNumber("123")            // 123
// // parseNumber(123)              // 123
// // parseNumber("34.4")           // 34.4
// // parseNumber(10.5)             // 10.5
// // parseNumber("-2")             // -2
// // parseNumber("-10.4")          // -10.4

// function parseNumber(input){
//     return Number(input);
// }

// // Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.
// //
// // add(1, 2)                   // 3
// // add(0, 0)                   // 0
// // add(-5, 10)                 // 5
// // add("2", 4)                 // 6
// // add(5, true)                // false
// // add(true, false)            // false
// // add("Monday", "Tuesday")    // false
// // add(null)                   // false

// function add(input1, input2){

//     let x = parseInt(input1);
//     let y = parseInt(input2);

//     if (isNaN(x) || isNaN(y)){
//         return false;
//     }

//     return x + y;

// }
// // Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.
// //
// // multiply(4, 2)              // 8
// // multiply(0, 44)             // 0
// // multiply(-5, 10)            // -50
// // multiply(5, true)           // false
// // multiply(true, false)       // false
// // multiply("Monday")          // false

// function multiply(input1, input2){

//     let x = parseInt(input1);
//     let y = parseInt(input2);

//     if (isNaN(x) || isNaN(y)){
//         return false;
//     }

//     return x * y;

// }

// // Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.
// //
// // square(2)                   // 4
// // square(3)                   // 9
// // square(-4)                  // 16
// // square("5")                 // 25
// // square(0.5)                 // .25
// // square("Bob")               // false
// // square(true)                // false
// // square(false)               // false
// // square(null)                // false
// // square([1, 2, 3])           // false
// // square()                    // false

// function square(input){
//     if(isNaN(parseInt(input))){
//         return false;
//     }

//     // return input ** 2;
//     // return Math.pow(input, 2);
//     return input * input;
// }

// // Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.
// //
// // sumOfSquares(2, 3)          // 13
// // sumOfSquares(1, 0)          // 1
// // sumOfSquares("4", 5)        // 41
// // sumOfSquares(2, false)      // false
// // sumOfSquares(null)          // false
// // sumOfSquares()              // false

// function sumOfSquares(input1, input2){

//     return add(square(input1), square(input2));
// }
// ​
// // Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
// //
// // isPalindrome("Bob")         // true
// // isPalindrome("radar")       // true
// // isPalindrome("ufotofu")     // true
// // isPalindrome("Monday")      // false
// // isPalindrome(232)           // false
// // isPalindrome(null)          // false
// ​
// function isPalindrome(input){
//     if(typeof input !== "string"){
//         return false;
//     }
// ​
//     return input.toLowerCase().split("").reverse().join("") === input.toLowerCase();
// }
//
//
//
// All answers physically wrote in class
// Q1
//
// function isANumber(input) { //right
//     if (typeof input === "number")
//         return true
// }else {
//     return false
// }
//
// return typeof input === "number"  //right
//
// function increment(input) {  // right
//     if(!isNaN(parseInt(input))) {
//         return (Number(input) + 1;
//     } else {
//         return false;
//     }
// }
//
// Q2
// function decrement(input) {  // right
//     if(!isNaN(parseInt(input))) {
//         return (Number(input)  - 1;
//     } else {
//         return false;
//     }
// }
//
// Q3
// function getHighestNumber(input1, input2, input3) {
//
//     let input1 = parsedInt(input1)
//     let input1 = parsedInt(input1)
//     let input1 = parsedInt(input1)
//
//     if(isNaN(input1) || isNaN(input2 || isNaN(input3)) {
//         return false
//     }else {
//         return Math.max(input1, input2, input 3)
//     }
// }
//
// Q4
// function parseNumber(number) { //right
//     return Number(number)
// }
//
// Q5
//
// function add(input1, input2) { // right just make sure brackets are in right place
//
//     let x = parsedInt (input1)
//     let y = parsedInt(input2)
//     if (isNaN(parseInt(input1)) || isNaN(parseInt(input2)){
//         return false
//     }
//         return x + y
// }
//
// Q6
//
// Q10
//
// function isPalindrome (input) { //right
//     if(typeof input !=="string") {
//
//     }
//     return input.toLowerCase().split("").reverse.join("") === input.toLowerCase()
// }
