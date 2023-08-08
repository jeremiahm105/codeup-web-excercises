"use strict"

// // if (x === 10) {
// //     return true;
// // } else {
// //     return false:
// // }
//
//
// let x = 10
// if (x === 10) {
//     return true;
// } else if (x === 20) {
//     return false;
// } else {
//     console.log("none are true")
// }
//
// if (condition1) {
//     // code here gets executed if condition1 evaluates to true
// } else if (condition2) {
//     // code here gets executed only if condition1 is false *and* condition2 evaluates to true
// } else {
//     // code here gets executed if neither condition1 nor condition2 evaluate to true
// }

// var deletestuff = confirm("are you sure ")
// if (deletestuff) {
//     alert("now deleting")
// } else {
//     alert("operation canceled")
//     console.log("operation will be canceled")
// }

//********** when using confirm nd alert put the confirm in the variable and use the alert in the else as a response instead of consol.loging
//remember a confirm will give a boolean value so

//remeber that the

//ifelse/ifelse
//when using prompt and confirm always put them in a variable of the question asked. and in the if statement to connect the prompt to the question being asked.

//remember that the wording in the if requires qoutes to be defined
// as for the last alert i can use the variable where the reply was made and use it as a comment.

// let pizzapreference =prompt("What kind of pizza do you like")
// if (pizzapreference === "cheese") {
//     alert("Thats my favorite")
// } else if(pizzapreference === "beef") {
//     alert("I love beefy pizza")
// } else {
//     alert("im not to fund of" + pizzapreference + "as a option")
// }


//converting to tenary

// var message;
//
// if () {
//     alert(message = "Operation was successful.")
// } else {
//     message = "Oops, something went wrong.";
// }
//( what was in the if parenthesis) ? "was true" : "was false"

// switch has less duplication than if else
//
//     making pizza example a switch

// so the first if is replaced with switch  and switch has same syntax as if
//then is case which takes place of the first === cheese followed by :

// let pizzapreference =prompt("What kind of pizza do you like")
// switch(pizzapreference) {
//     case "cheese":
//         alert("Thats my favorite");
//         break;
//     case "beef":
//         alert("I love beefy pizza");
//         break;
//     default:
//         alert("im not to fund of" + pizzapreference + "as a option")
// }

function analyzeColor(color) {
    let lowerCased = color.toLowerCase();

    if (lowerCased === "red") {
        return "Red is the color of apples";
    } else if (lowerCased === "orange") {
        alert("Orange is the color of oranges");
    } else if (lowerCased === "yellow") {
        return "Yellow is the color of the sun";
    } else if (lowerCased === "green") {
        return "Green is the color of grass";
    } else if (lowerCased === "blue") {
        return "Blue is the color of the ocean";
    } else if (lowerCased === "indigo") {
        return "Indigo is the color of jeans";
    } else if (lowerCased === "violet") {
        return "Violet is the color of blueberries";
    } else {
        return ( "I don't know anything about this color");
    }
}
//console.log(analyzeColor("green"));




var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(analyzeColor(randomColor));
alert("my random color is: " + randomColor)

//
// //so when calling functions must insert the value of the argument otherwise will receive an error.
// //after calling it ypu must console.log to see it in js console
// // can use alert instead of return
//




// // Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
// //     You should see a different message every time you refresh the page
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//return the string helloworld
// function helloworld () {
//     return "Hello " + " World!"
// }


function hello() {
    return "Test" + "Day"
}

console.log(hello());

function Friday (week, month) {
    return "Im on week" + week + "and were stiil in month " + month
}

console.log(Friday("number 2", "number 1"));

//
// console.log(helloworld());

// function sayName(name) {
//     return "Hello" + name
// }
//
// console.log(sayName(" Jane"));
// console.log(sayName(" Rupert"));
// console.log(sayName(" Charles"));

// function sayHello(sayName) {
//     return "Hows Life" +
// }
//
// console.log(sayHello());
//
// //
// // /**
// //  * TODO:
// //  * Create a function called 'sayHello' that takes a parameter 'name'.
// //  * When called, the function should return a message that says hello to the passed in name.
// //  *
// //  * Example
// //  * > sayHello("codeup") // returns "Hello, codeup!"
// //  */
//
// function sayHello (name) {
//     return "Hello" + name
// }


//console.log(sayHello(" Jeremiah"));
//
//
// // function sayHello(name) {
// //     return "Hello, " + name
// // }
//
// //how to break down question:
// // could create a var to return
//
// //test by putting function in js console function
//

// // console.log(sayHello("Code Up"))
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
// //  *
// let helloMessage = sayHello("Matt")

//console.log(helloMessage);


//  console.log 'helloMessage' to check your work
//  */
// // let helloMessage =sayHello("Jeremiah")
// // console.log(helloMessage)
//
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */



// //Formula to get even
// x % 2 === 0 is even
// //Formula to get odd
// x % 2 !==0 is odd
// Formula to calculate tip
// tipnumber / 100 * total bill or parseFloat tip as decimal already * total bill
// formula to prompt
// add prompt to var if it needs a numerical string use Number() or parseFloat()
// and do if and include the var name used in the prompt



// possibel answer
// function findLongestString(str1, str2) {
//     if (typeof str1 === 'string' && typeof str2 === 'string') {
//         if (str1.length > str2.length) {
//             return str1;
//         } else {
//             return str2;
//         }
//     } else if (typeof str1 === 'string') {
//         return str1;
//     } else if (typeof str2 === 'string') {
//         return str2;
//     } else {
//         return '';
//     }
// }

// 1. Define a function named `calcCube` that accepts a number argument and returns the cubed value of the
// argument. It should return O (zero) if the arguments is null or not a number.
//
// calcCube(10)         // 1000
// calcCube(3)          // 27
// calcCube(-4)         // -64
// calcCube("Bob")      // 0
// calcCube(null)       // 0
//

function calcCube(input){
    return input;
}

// possible answer
// function calcCube(number) {
//     if (number === null || isNaN(number)) {
//         return 0;
//     }
//
//     return Math.pow(number, 3);
// }



// 1. Define a function named `calcAbs` that accepts a number argument and returns the absolute value of the
// argument. It should return O (zero) if the arguments is null or not a number.
//
// calcAbs(10)              // 10
// calcAbs(-17.3)           // 17.3
// calcAbs(2.7 - 3.8)       // 1.1
// calcAbs("Bob")           // 0
// calcAbs(null)            // 0
//
//
function calcAbs(num) {
    if (num === num)
        return true;
} else if (num === null) {
    return 0;
}else {
    return
}


// possibel answer
// function calcAbs(number) {
//     if (number === null || isNaN(number)) {
//         return 0;
//     }
//
//     return Math.abs(number);
// }


// 1. Define a function named `isNot` that accepts a boolean argument and returns the opposite value of the
// argument. It should return false if the argument is null or not a boolean.
//
// isNot(false)            // true
// isNot(true)             // false
// isNot("Bob")            // false
// isNot(null)             // false
//


//possible answer
// function isNot(input) {
//   if (input === null || typeof value !== 'boolean') {
//     return false;
//   }
//   return !value;
// }

function calcAbs(num) {
    return num === num
}


//possibel answer
//     if (num === num)
//         return true;
//     } else if (num === null) {
//         return 0;
//     }else {
//         return
// }

// function isEqualNumber(input1, input2) {
//     if (input1 === input2) {
//         return true;
//     } else{
//         return false;
//     }
// }

//********************************Entire test

// "use strict";
//
// /**
//  * Write your solutions here.
//  *
//  * **Note**: While normally it is good practice to wrap your javascript in an
//  * immediately invoked function expression (iife), you should _not_ do that
//  * here. If you do, the automated tests will not be able to see your functions.
//  */
//
// 1. Define a function named `isGreaterThan` that takes in two values and returns a true if the first argument is
// greater than the second argument otherwise it should return false. If either argument is not a number, return false;
//
// isGreaterThan(9.3, 7.4)            // true
// isGreaterThan(3.14, 3.14)          // false
// isGreaterThan(7.4, 9.3)            // false
// isGreaterThan(-9.3, 7.4)           // false
// isGreaterThan(-3.14, 3.14)         // false
// isGreaterThan(-7.4, 9.3)           // false
// isGreaterThan(9.3, -7.4)           // true
// isGreaterThan(3.14, -3.14)         // true
// isGreaterThan(7.4, -9.3)           // true
// isGreaterThan(-9.3, -7.4)          // false
// isGreaterThan(-3.14, -3.14)        // false
// isGreaterThan(-7.4, -9.3)          // true
// isGreaterThan(null, null)          // false
// isGreaterThan('Seven', 'eight')    // false

function isGreaterThan(input1, input2) {
    if (input1 > input2) {
        return true;
    } else {
        return false;
    }
}
//
// 1. Define a function named `isLessThan` that takes in two values and returns a true if the first argument is
// less than the second argument otherwise it should return false. If either argument is not a number, return false;
//
// isLessThan(9.3, 7.4)            // false
// isLessThan(3.14, 3.14)          // false
// isLessThan(7.4, 9.3)            // true
// isLessThan(-9.3, 7.4)           // true
// isLessThan(-3.14, 3.14)         // true
// isLessThan(-7.4, 9.3)           // true
// isLessThan(9.3, -7.4)           // false
// isLessThan(3.14, -3.14)         // false
// isLessThan(7.4, -9.3)           // false
// isLessThan(-9.3, -7.4)          // true
// isLessThan(3.14, -3.14)        // false
// isLessThan(-7.4, -9.3)          // false
// isLessThan(null, null)          // false
// isLessThan('Seven', 'eight')    // false
//

function isLessThan(input1, input2) {
    if (input1 < input2) {
        return true;
    } else {
        return false;
    }
}

// 1. Define a function named `isEqualNumber` that takes in two values and returns a true if the first argument is
// equal to the second argument, otherwise it should return false. If either argument is not a number return false;
//
// isEqualNumber(9.3, 7.4)            // false
// isEqualNumber(3.14, 3.14)          // true
// isEqualNumber(7.4, 9.3)            // false
// isEqualNumber(-9.3, 7.4)           // false
// isEqualNumber(-3.14, 3.14)         // false
// isEqualNumber(-7.4, 9.3)           // false
// isEqualNumber(9.3, -7.4)           // false
// isEqualNumber(3.14, -3.14)         // false
// isEqualNumber(7.4, -9.3)           // false
// isEqualNumber(-9.3, -7.4)          // false
// isEqualNumber(-3.14, -3.14)        // true
// isEqualNumber(-7.4, -9.3)          // false
// isEqualNumber(null, null)          // false
// isEqualNumber('Seven', 'eight')    // false
//

function isEqualNumber(input1, input2) {
    return (input1 === input2)
}

// 1. Define a function named `isEqual` that takes in two values and returns a true if the first argument has
// the same value and type as the second argument, otherwise it should return false.
//
// isEqual("Bill", "Bill")    // true
// isEqual(9, 9)              // true
// isEqual(null, null)        // true
// isEqual(false, false)      // true
// isEqual("Codeup", "time")  // false
// isEqual("James", Jimmy)    // false
// isEqual(null, true)        // false
// isEqual(true, false)       // false
// isEqual('4', 4)            // false
//

function isEqual(input1, input2) {
    return input1 === input2;
}

// 1. Define a function named `isNot` that accepts a boolean argument and returns the opposite value of the
// argument. It should return false if the argument is null or not a boolean.
//
// isNot(false)            // true
// isNot(true)             // false
// isNot("Bob")            // false
// isNot(null)             // false
//

function isNot(input) {
    return !input;
}

// 1. Define a function named `calcAbs` that accepts a number argument and returns the absolute value of the
// argument. It should return O (zero) if the arguments is null or not a number.
//
// calcAbs(10)              // 10
// calcAbs(-17.3)           // 17.3
// calcAbs(2.7 - 3.8)       // 1.1
// calcAbs("Bob")           // 0
// calcAbs(null)            // 0
//
//
function calcAbs(num) {
    if (num === num) {
        return true;
    } else if (num === null) {
        return 0;
    }
}


// 1. Define a function named `calcCube` that accepts a number argument and returns the cubed value of the
// argument. It should return O (zero) if the arguments is null or not a number.
//
// calcCube(10)         // 1000
// calcCube(3)          // 27
// calcCube(-4)         // -64
// calcCube("Bob")      // 0
// calcCube(null)       // 0
//

function calcCube(input){
    return input === input
}


// 1. Define a function named `isTypeMatch` that accepts two arguments and returns true if the types of the
// arguments match. It should return false if either arguments is null.
//
// isTypeMatch(16.3, -84)                // true
// isTypeMatch("Hello", " stranger")     // true
// isTypeMatch("Hello", 1984)            // false
// isTypeMatch(true, "stranger")           // false
// isTypeMatch(null, 27)                 // false
//
//

function isTypeMatch(input1, input2) {
    return input1 === input2
}


// 1. Define a function named `findLongestString` that accepts two string arguments and returns the string with
//     the greatest length. If only one argument is a string, return that argument. If neither arguments are
// strings, return and empty string.
//
// findLongestString("Jethro", "Tull")         // "Jethro"
// findLongestString("Hello", " stranger")     // " stranger"
// findLongestString("Hello", 1984)            // "Hello"
// findLongestString(true, "stranger")         // "stranger"
// findLongestString(null, 27)                 // ""
//


function findLongestString(input1, input2){
    return input1.toString === input2.toString
}


// 1. Define a function named `isFactor` that accepts two number arguments and returns true if the first argument
// is a factor of the second argument. It should return false if either argument is null or not a number. Also
// return false if the first argument is 0 (zero).
//
// isFactor(3, 9)         // true
// isFactor(-4, 16)       // true
// isFactor(9, 3)         // false
// isFactor(true, 2)      // false
// isFactor(null, 13)     // false
// isFactor(0, 8);        // false

function isFactor(num1, num2) {
    return input2 === input1
}
