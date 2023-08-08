"use strict"

//*************************Functions from Youtube
// let greeting = "Hey there"
// function games() {
//     let title = "zelda"
//     console.log(title)
// }
// games()
// console.log(greeting)
//
// function name(){
//     let greet= "hello all"
//     console.log("Learn Functions")
//     console.log("Learn Arguments")
//     console.log("Review Conditionals")
// }
// name()

//functions on there own do nothing they need to be invoked with ()
//after creating function any console.log inside of it will be printed to console

// function myName () {
//     console.log('Jay')
// }
//Function expressions are functions created inside another syntax like let and they dont have names
//-just like declaration are in a let
//function name is optional in expression but can not call the function by name if in expression


// let games = function () {  // this an anonymous function without a name
//     //is the same as function games() {}
//     console.log('sonic')
// }
// games()  //invoke by using variable name with ()
// let anothercallmethod = games   //can assign function to var as another way to call
// anothercallmethod()  // always use () or function will not work

//declarations can be invoked before function created

//**Parameters and Arguments

// function favgame (game) {   //now we can use parameter like a var
//     console.log("My favorite game is" + game)
// }
// favgame(" donkey kong") // but now we need include data that will be substituted for game
// favgame(" Sonic") // sonic would be considered an argument
//using the parameter allows me to constantly use and change the parable game
//when function defined parameters are set
//when function is invoked arguments are set

//now using multiple parameters
// function ninjaturtle (name, weapon) {
//     console.log(name + " uses the " + weapon)
// }
// ninjaturtle("Donatello ", "Bo Staff")
//
// //if missing arguments will be undefined
// function add (num1, num2) {
//     console.log(num1 + num2)        //no qoutes becasue there treated as variables
// }
//
// add(2, 10)  //if does not both numbers will be undefined
//                         //if you have more arguments that parameters they will be ignored
//
// function discount (food, service) {
//     console.log("food tip is " + food + "service was " + service)
// }
// discount("good", "bad")
// let newdiscount = discount
// console.log("this var is " + discount)
// newdiscount("good", "bad") // when calling a function inside a var with parameters must include arguments


//***************Functions Class Notes **************************
//to capture the result of a variable use a variable let or var

//function parts
//1keyword:function  words that are color labeled have specific meaning
//2 function name-- give it a easy name
//3parenthesis () contains parameter
//4{} curly braces set up body of code and where instructions are
//return gives back output and what is

// function MyFunction (input) {
//     var output = "do something"
//     return output;
// }
//
//
// function sayHello (){
//     return "Hello there";
//
// }
// console.log(sayHello())     //when return always put inside a variable

// function sayHello (input){
//     return "Hello there" + input;  // i can input the say into console and add the name and will print to console
//
//
// }
// sayHello("Class")
// var message = sayHello
// console.log(message("class"))
//
// //the parameter is a place holder for the value
// //return can be used in place of console.log
//
// //multi parameters
//
// function addthree (num1, num2, num3) {
//     return num1 + num2 + num3;
//
// }
// addthree(1, 2, 3) // enter all inputs
// var message = addthree(1, 2, 3)
// console.log(message)        // when store the function result in the message you only need the var name
// console.log( addthree(1, 2, 3)) //another option store function results to a var


//steps to storing a function results in a var with parameters
//1 call function with all the values to the parameters
//2 then create var with function inside along with inputs
//3 then console.log the var name only


// when doing return also use the param in the message
// function expressions
// let goodmorning = function(){
//     return "good morning everyone"
// }
// alert(goodmorning()) // with anonymous functions call it with the var name with ()

//write a function with no return  prints as undefined.
//if its just executoimg a code it ok to have a undefined needs to be an explicit return value
//but if returnexample
// function   function
// alert       return


// function message (){
//     return "Learning Functions"
// }
//
// console.log(message())
// //alert(message())


function formatnumber(num) {
    return num.toFixed(2)

}

var fn =formatnumber(2)
console.log(fn)

    // to use the (iife) immediatly invoked function surround your entire scope in () and end with ()
    // define a function and immediately invoke (i.e. call) it
    //example
    (function () {
        var iffeVar = "I'm local to the IIFE.";
    })();

// When doing prompt with numbers always add the Numbers() to the beginning of prompt to allow for numbers to be inserted
//when it comes to the to the alert always include the two prompt variables to pass them in