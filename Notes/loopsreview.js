"use strict"

// console.log("***** Do-While Loop*****")
//
// let count = 0
// while (count <= 5) {
//     console.log(`count is : ${count}`)
//     count++
// }
//
// //while loop syntax
// // let declare variable
// //while () {
// // console.log(``)
// //increment
// // }
//
// count = 10
// while (count >= 0){
//     console.log("Count number2  is: " + count);
//     count--
// }
//
// //Example asking for a number  and need to convert the he sting to a number using parse or number ()
// var userInput = prompt("Enter a number:");
// // or redeclare the variable inside another varaible
// let newUserInput = parseInt(userInput) // or Numbers() or parseFloat
//
// // While Loops to verify if it is a number
// while (isNaN(newUserInput)) {
//     console.log(`Invalid please insert a number`)
//     newUserInput = parseInt(userInput)
// }
//
// console.log(`you entered a valid number: ${newUserInput}`)
//
// var userInput = prompt("Enter a number:");
// //-- Change number in an integer
// var number = parseInt(userInput);
//
// // While Loops to verify if it is a number
// while(isNaN(number)){
//     //-- iF the user does NOT insert a number THis prompt will show to ask for a number
//     userInput = prompt("Invalid input. Please enter a number:");
//     //-- Turning user input into an integer
//     number = parseInt(userInput);
// }
//
// //-- Once the while loop is false, this console log will be shown
// console.log("You entered a valid number:" + number);

// var userInput = prompt("Enter a number:");
// var number = parseInt(userInput);
// while (isNaN(number)) {
//     userInput = prompt("Invalid input. Please enter a number:");
//     number = parseInt(userInput);
// }
// console.log(`${number} is a valid response`)
// let userInput = Number(prompt("Enter a number:"));
//
// while (isNaN(userInput)) {
//     userInput = prompt(`Invalid response`)
//
// }
// console.log(`${userInput} is a valid response`)
// console.log("")
//
// // if user input is not a number or a string return the number

// let userInput = prompt("Enter a number:");
// //let number = parseInt(userInput)
//     while (isNaN(number)) {
//     userInput = prompt(`invalid response`)
//         number = parseInt(userInput)
//     }
//
//     console.log(`${number} is a valid response`)

//declarig a prompt in a var
//converting that response to a number in new variable
//passing the converted var in isNaN() as thw while condition
//logging the reponse by using the original prompt var and the condition message of true of false
//logging new converted var = the converted method
//closing the brackets and logging the true or false reponse based off condition.

// let userInput = prompt("Enter a number:");
// let number = parseInt(userInput)
//
// while (isNaN(number)) {
//     userInput = prompt(`Invalid response, Please enter a number`)
//     number = parseInt(userInput)
// }
// alert(`${number} is a valid response`)


// while (true) {
//     var userInput = prompt("Please enter a number:");
//
//     // Check if the user input is a valid number
//     if (!isNaN(userInput) && userInput !== "") {
//         var number = parseFloat(userInput);
//         if (!isNaN(number)) {
//             alert("You entered a valid number: " + number);
//             break; // Exit the loop since a valid number was entered
//         }
//     }
//
//     alert("Invalid input. Please enter a valid number.");
// }
// let x= 0
// do {
//     console.log(`can you see me`)
// } while (condition)

// do{
//     console.log("Can you see me")
// }while(false);

// do{
//     console.log("Can you see me")
//     break;
// }while(true);

// let number = 10
//  do {
//      console.log(`count is ${number}`)
//      number--
//  } while (number >= 0)

// Going to be saving the users reply
// let reply = "";
// do {
//     reply = prompt("Did you wash your hands? y/n")
// }while(reply !== 'y')
//
// console.log("Thank you for washing your hands!")

//to do this example let declaring variable be empty strings
//then use that variable to make the prompt question
//in the while condition explicitly make what the empty varibale should be === or  !==
//console.log a response if condition is met

// let reply = ""
// do {
//     reply = prompt(`Did you wash your hands! Yes or No`)
// } while (reply !== 'yes')
//
// console.log(`Thank you!`)


//Example Have the user gues a number between 1 and 3

// let userGuessNumber = 0;
// let randomNumber = Math.floor(Math.random() * 3) + 1;
//
// do {
//     userGuessNumber = parseInt(`Guess a number between 1 and 3`)
// } while (userGuessNumber !== randomNumber)
//
// console.log(`your guess is ${userGuessNumber}`)
// console.log(`your random number is ${randomNumber}`)

// let userGuessNumber = 0;
// // Generate the random number between 1-3
// let randomNumber = Math.floor(Math.random() * 10) + 1;
//
// do {
//     // Saving the users response from the prompt
//     userGuessNumber = parseInt(prompt("Guess a number 1-3"));
//     // Condition, if true will continue with the loop
//     // If the userGuess is NOT equal to random number then Continue asking till guess is correct
// } while (userGuessNumber !== randomNumber);
//
// console.log("Your guess is: " + userGuessNumber);
// console.log("Random number is: " + randomNumber);
// console.log("You finally Got it!!!!!");
// console.log("")

//Example: of boolean false. loop will not run because the condition was never met if the condition was true it would be an infinite loop.
// for (let i = 0; false; i++) {
//     console.log(`iteration ${i}`)
// }

//Example counting and looping the string length of the variable character by character.
// let countString = "Welcome to the DogHouse!"
//
// for(let x = 0; x < countString.length; x++) {
//     console.log(`count ${countString.charAt(x)}`)
// }

//Example using prompt to count how many loops to run based off the amount the user inserts.

// let howMany = prompt(`How many times would you like to loop`)
//
// for (let i = 0; i < howMany; i++) {
//     console.log(`${i}`)
// }

// for (let i = 0; i < 5; i++) {
//     console.log("Iteration i: " + i)
//     for (let j = 0; j < 5; j++) {
//         console.log(" Iteration j: " + j);
//     }
// }

//Nested for loop: a loop inside a loop
//the outer for loop will iterate once while the inner loop iterates a complete cycle until condition is met and then the outer loop will resume.

// for (let i = 0; i < 5; i++) {
//     console.log(`Iteration i ${i}`)
//     for (let j = 0; j < 5; j++) {
//         console.log(`Iteration J ${j}`)
//     }
// }


//BREAK:  For Loop that start at 1 and ends at 5 and chooses to break at the number 3
// for (let i = 1; i < 5; i++) {
//     if (i === 3) {
//         console.log(`Loop terminated at i: ${i}`)
//         // break out the loop
//         break;
//     }
//     console.log(`Current iteration ${i}`)
// }


//Continue: For Loop that start at 1 and ends at 5 and chooses to continue at the number 3 and skips it.
// for (let i = 1; i < 5; i++) {
//     if (i === 3) {
//         //console.log(`skipping number 3`)
//         continue;
//     }
//     console.log(`Current iteration ${i}`)
// }

// Example While loop using continue starting at 1 ending at 5 and continue at 3
//
// let num = 1
// while (num < 5) {
//     if (num === 3) {
//         num++
//         continue;
//     }
//     console.log(`Processing ${num}`)
//     num++ // without using the second increment will be an increment loop
// }
// //Note: Must increment both before continue and after the console.log or it will be an infinite loop


//Example Break and Continue
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// 2: Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

//let userInput;
//let userInput = parseInt(prompt("Please enter an odd number between 1 and 50"))

// while(true) {
//     let userInput = parseInt(prompt("Please enter an odd number between 1 and 50"))
//     if(userInput >= 1 && userInput < 50 && userInput % 2 === 1) {
//         break;
//     } else {
//         alert(`Sorry the number is invalid`)
//     }
// }
// console.log(`Number to skip is${userInput}`)

//Example
//Create a prompt where a user picks an odd number 1-50 that alerts when valid and invalid. use a break to stop once a valid number is chosen.



// while (true) {
//     let userInput = prompt("Please enter an odd number between 1 and 50:");
//
//     // Convert the user input to a number
//     let number = parseInt(userInput);
//
//     // Check if the input is a valid number and odd
//     if (typeof number === "number" && number >= 1 && number <= 50 && number % 2 !== 0) {
//         alert("You entered a valid odd number: " + number);
//         break; // Exit the loop since valid input was provided
//     } else {
//         alert("Invalid input. Please enter a valid odd number between 1 and 50.");
//     }
// }


//Another way to insure a number is a number is by using typeof number === "number" or !isNaN()
// while loops using booleans and needing number conversion
// declare var inside loop
// convert the string to number
// do if/else statement with conditions conditions with console after each.


// while (true) {
//     let userInput = prompt("Please enter a odd number between 1 and 50")
//     let number = parseInt(userInput)
//     if (typeof number === "number" && number >= 1 && userInput <= 50 && number % 2 !== 0) {
//         alert(`you entered a valid odd number ${number}`)
//         break;
//     } else{
//         alert(`the number chosen was invalid, please try again`)
//     }
// }

//

// let userInput;
// while (true) {
//     userInput = parseInt(prompt("Please enter a odd number between 1 and 50"))
//     //let number = parseInt(userInput)
//     if (typeof userInput === "number" && userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
//         alert(`you entered a valid odd number ${userInput}`)
//         break;
//     } else{
//         alert(`the number chosen was invalid, please try again`)
//     }
// }
//
// console.log(`Number to skip is ${userInput}`)
//
// for (let i = 1; i <50; i = i + 2) {
//     if (i === userInput) {
//             console.log(`Yikes skip that number ${i}`)
//             continue;
//         }
//         console.log(`here is the odd number ${i}`)
//     }
//
//

// //create a variable to hold a number = 1
// let num = 1
// //create a while loop <65536
// while(num < 65536){
//     //iterates i*=2
//     num*=2
//     console.log(num);
// }


let num = 1
while (num < 100) {
    num *= 2//increment
    console.log(num);

}

//remeber with loops you must reassign the value if not incrementing otherwise you will get a infinite loop


//sometime its easier to create the variable without a value so you can you it as you wish for later which is what was done in this example









































