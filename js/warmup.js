"use strict"

// Create a function called logUser. This function will accept a string argument and return a message that says “stringArgument has logged in for the day”. Console.log your results to verify the message.
// console.log(logUser(“ken2cool”)) // “ken2cool has logged in for the day.”
// Bonus:
//     I. Refactor your message to use template strings.
//     Ii. Add validation to make sure the argument passed to the function is a string datatype only.

//rework

// function logUser(strArg) {
//     return `${strArg} has logged in for the day`
// }
// console.log(logUser("ken2cool"));
//
// //Ii. Add validation to make sure the argument passed to the function is a string datatype only.
//
// function logUser(strArg) {
//     if (typeof strArg !== "string" ) {
//         return false
//     } else {
//         return `${strArg} has logged in for the day`
//     }
// }
//
// Create an object literal with the following properties: a string property called “username” and a string property called “email” with string values representing the property name to them.
//     Assign your object literal into a variable called “userObject”. Console.log the objects properties to verify your values are assigned into the object properly.

//
// let userObject = {
//     username: "ken2cool",
//     email: "ken2cool@yahoo.com"
// }
//
// console.log(`Username: ${userObject.username}`);
// console.log(`Email: ${userObject.email}`);


//First Portion
// function logUser(stringArgument) {
//     return `${stringArgument} has logged in for the day`
// }
//
// //Second Portion with refactor
// function logUser(stringArgument) {
//     if (typeof stringArgument !== "string") {
//         return false;
//     } else {
//         return `${stringArgument} has logged in for the day`
//     }
// }
//
// console.log(logUser("ken2cool"));

//Question 2
// Create an object literal with the following properties: a string property called “username” and a string property called “email” with string values representing the property name to them.
//     Assign your object literal into a variable called “userObject”. Console.log the objects properties to verify your values are assigned into the object properly.
// console.log(userObject.username) // “ken2cool”
// console.log(userObject.email) // “ken2cool@yahoo.com”

// let userObject = {}
// userObject.username = " ken2cool"
// userObject.email = " ken2cool@yahoo.com"
//
// console.log(`Username${userObject.username}`)
// console.log(`Email${userObject.email}`)
//
// // Create an object literal
// let userObject = {
//     username: "ken2cool",
//     email: "ken2cool@yahoo.com"
// };
//
// console.log(userObject.username)
// console.log(userObject.email)


// Bonus:
//     I. Refactor your logUser function to use your userObject’s property of username vs. an hardcoded string literal argument - update the string return from logUser to also include the userObject.email property e.g.: “ken2cool with email ken2cool@yahoo.com has logged in for the day.”

// function logUser(object) {
//     if (typeof object.username !== "string"|| typeof object.email !== "string") {
//         return false;
//     } else {
//         return `${object.username} with email ${object.username} user has logged in for the day `// could also insert `${userObject.userRoles.join(",")}` which solves last question and makes the array a string.
//     }
// }
//
// console.log(logUser(userObject);


// Ii. Refactor your userObject to have a userRoles property that is an array of strings listing the user’s roles - e.g “admin”, “moderator”, “buyer”, “seller” and other hypothetical roles a user could have on a website

//create an empty array
//make the userobject.userroles the name
//log the results for both the object and then the property in two different lines
//
// userObject.userRoles = ["admin", "moderator", "buyer", "seller", "reviewer"]
//
// // Iii. Refactor your user object to have a nested userProfile object property - this nested property should have a userProfileUrl property with a string value mocking a link to an image. The other property should be a userLocation property with a string value mocking a CityName, StateName location the user could be from. Finally, add a property called numLikes with a number value indicating the users received ‘likes’ in our hypothetical application.
//
// userObject.userProfile = {
//     userProfileUrl: "myURLToPicture.jpg",
//     userLocation: "San Antonio, Texas",
//     numLikes: 7
// }
// console.log(userObject.userProfile.userProfileUrl);
//
// console.log(userObject.userProfile.userLocation);

//Question