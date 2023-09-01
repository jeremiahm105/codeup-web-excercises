"use strict"

// Break and Continue
// Create a file named break_and_continue.js in the js directory.
//     1: Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     2: Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// //  3: Your output should look like this:



let userInput;
while(true){
    userInput = Number(prompt("Please enter an odd number between 1 and 50"));

    if(userInput >= 1 && userInput <= 50 && userInput % 2 === 1){
        break;
    } else {
        alert("Sorry, the number is invalid. Please try again.")
    }
}

console.log("Number to skip is; " + userInput);

for(let i = 1; i <= 50; i +=2) {
    if(i === userInput) {
        console.log("Yikes! Skip that number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}



