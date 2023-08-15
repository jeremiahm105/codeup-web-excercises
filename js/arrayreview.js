"use strict"

//Arrays holds ordered list
//items in array are called elements seperated by commas
//declare array with []

//Array Literal
//number literal Example (42)
//string literal Example ('codeup')
// [] empty array
// [1] array with one element
// [1,2,3,4,5] array with 5 elements
// ["one", 42, [8, 9, 10]] nested array with 3 elements

//arrays can be stored in variables
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// console.log(shapes.length); // 4
//
// //Accessing array elements are zero indexed. first slot is always zero
// //access array elements by using square brackets [] before variable name
// var numbers = [1, 2, 3, 4];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
//
// //Remember accessing array elements only use numbers and returns the value
// console.log(shapes[0]); //returns square
//
// console.log(`For the shapes array there are ${shapes.length} shapes in the array`)
// //when using the template literal place both the name and element in the curly brackets also called backticks.
//
// console.log(`The first shape is ${shapes[0]}`)
// console.log(`The third shape is ${shapes[2]}`)
//
// //using a shape element not listed will return undefined.
//
// //Iterating Arrays
// //to iterate means to repeat a process which is used by looping
//
// //Example iterating with for loop
// // Using this loop allows me to return the entire shapes array
// //When looping use loop variable for both index and shape.
// for(let i = 0; i < shapes.length; i++) {
//     console.log(`The shape at index ${i} is ${shapes[i]}`)
// }
// console.log('-------------for each loop------------')
// //forEach can be used as an alternative to for loop
// //forEach method takes another function as a parameter that does not have a return value
// //the forEach takes up to three parameters to provide access to array element, the index and the array itself.
// //We can refer to the function passed in the forEach as a callback function.
//     //the callback function will be called everytime in the array.
//
// //syntax
// // arrayname.forEach(fucntion(element, index, array) {
// //     //code
// // })
// // by convention we name our arrays a plural and the elements as a singular
//     //Example: array name is shapes-- element is shape
// //Example using .forEach with shapes array
// //this example returns all
// shapes.forEach(function(element) {
//     console.log(`here is a shape ${element}`)
// })
// // when using the forEach whatever you list as the parameter should be used as the log
//
// //creating an array
// let lunchPlans =['tacos', 'burgers', 'pizza', 'dessert']
// console.log(lunchPlans.length);
// //accessing elements
// console.log(lunchPlans[0]);
// console.log(lunchPlans[1]);
// console.log(lunchPlans[2]);
// console.log(lunchPlans[3]);
//
// console.log(lunchPlans) //returns the complete array with length included
//
// //Looping the array with for loop
//
// for (let j = 0; j < lunchPlans.length; j++) {
//     console.log(`The lunch idea at index ${j} is ${lunchPlans[j]}`)
// }
// //the console.log list the j to loop through the entire array and the lunhplans[j] is to access each element and list it.
//
// //using forEach loop
//
// lunchPlans.forEach(function(value, index, array) {
//     console.log(`here is the lunch idea at index ${index} ${value}`)
// })
//
//

array manipulation
Syntax
Add to the start of an array
Array.unshift(element);

Add to the end of an array
Array.push(element);

let students = ['jim', 'rob', 'ross', 'ken', 'tom']

console.log(students)

console.log(students.unshift('ben'));
console.log(students)
students.push("sandy", "michelle")
console.log(students);
students.push(['goku',"vegeta", "picollo"])
console.log(students);

students.shift()
console.log(students);

//locating
// - The first method is `indexOf`, which starts searching from the beginning of the array
// - The second method is `lastIndexOf`, which searches at the end of the array

Syntax:
//     (*) Search for the element starting at the beginning of the array and return index
// Array.indexOf(element);
// (*) Search for the element at the end of the array and return index
// Array.lastIndexOf(element);

// index uses number that start from 0
// indexof uses element value and turns and index

console.log(students.indexOf('ross'))
students.push('ken')
console.log(students);

console.log(students.lastIndexOf("ken"));


//The `slice()` will not change the original array, it will create a new array)
//Syntax:
//     (*) `slice()` method allows us to copy a portion of an array
// (The start index)(The end index)     (end Optional)
// Array.slice(start, end);

let newList = students.slice(2,5)

console.log(newList);
//when using slice rename the varied you want sliced because it creates a new array
//also slice inputs must go one past the desire number if wanting to remove 2, 5 in paren select 2, 6.



console.log(students);

//first array remains unchanged, now i have 2 arrays

let copyOriginal =students.slice()
console.log(copyOriginal);
// if there no input in slice the array returns its complete self. this is done if you dont want to manipuate the original or you want a copy

let negatives = students.slice(-3, -1)
console.log(negatives);

console.log(students);

console.log(copyOriginal);
console.log(copyOriginal.reverse());

let removeArray =copyOriginal.splice(1,1)
console.log(removeArray);
console.log(removeArray);

console.log(copyOriginal);
console.log(copyOriginal.reverse());
console.log(copyOriginal.reverse());
console.log(copyOriginal.reverse().reverse().reverse());
console.log(copyOriginal.sort());

//sorting number //goes by first digit then second
let num = [100,"food", 20, 33, "cats",23, 5, 0, 11];
console.log(num.sort());  //returns [0, 100, 11, 20, 23, 33, 5]
//sorting numbers and strings numbers will take precedence over letters

let randomNums = [100, 'catfood', 23, -45, undefined, 'bob', NaN, true, 'zeeeeeebra']
randomNums.sort();
console.log(randomNums);

// Strings -> Arrays
//         .split(
//
//     - Splitting method will turn strings into arrays
// - will return a new array

// syntax:
//     Array.split(separator, limit);     // separator is optional, limit optional

let colorString = 'blue,red,green,yellow';

console.log(colorString);

//converting string to array
let colorArray = colorString.split(',')
console.log(colorArray);

let mlbString = "dodgers*yankees*angels*white sox";
console.log(mlbString);
let mlbArray= mlbString.split('*')
console.log(mlbArray);

//string to array
console.log(mlbArray);
mlbString = mlbArray.join()

let emptyString = 'Hey What you doing G!'
console.log(emptyString);

//if you convert a string to an array without any seperator it will return each individual word as a string.
console.log(emptyString.split(''));

let site = 'https://www.codeup.com/fasdfsad'
console.log(site);
let domain = site.split('/')
console.log(domain);

// Arrays -> Strings
//         .join()
//
//     - Creates and returns a new string by concatenating the elements in an array
//
// syntax:
//     Array.join(separator);     // separator is optional

let elements = ['fire', 'air', 'water'];
console.log(elements);

let stringElements = elements.join()  //concatenates with the seperator defau;t is a comma
console.log(stringElements);