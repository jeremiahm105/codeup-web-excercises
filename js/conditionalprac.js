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



