console.log("test test")
'use strict'

//Appendix Splice workout
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// console.log(colors);
// console.log("remove 2 colors")
// //console.log(colors.splice(0, 2)); //
// //console.log(colors); // now colors are 5 total
// let removed = console.log(colors.splice(0, 2));
// console.log(removed);
// console.log(colors);
// console.log(colors.indexOf('indigo'));
//
// console.log("remove indigo")
// console.log(colors);

//ADDing extra work

// var colors = ['red', 'orange', 'yellow', 'indigo', 'violet'];
// console.log(colors);
// console.log("adding green and blue after yellow")
// colors.splice('yellow', 0,'green', 'blue' )
// console.log(colors)

//if i want to add while in splice leave the second line as 0 and add the elements i want by including after 0 with commas

// Replacing with splice:

// console.log("replace indigo and violet with purple")
// console.log(colors)
// colors.unshift('dark blue')
// console.log(colors)
// colors.pop()
// console.log(colors)
//
// console.log(colors.length);
// console.log(colors[0])
// console.log(colors[3])
// console.log(colors[2])
// console.log(colors[1])
// //to access each individual element in an array use the name and array brakets name[] with the index number of the element.
// //colors[]
// console.log("the second element in the array is: " + colors[2])
// console.log("The third element in the array is: " + colors[3])
//
// console.log("in the colors array there are " + colors.length + " different colors")
//
// console.log(colors)
//
// for (var i = 0; i < colors.length; i++) {
//     console.log(`The the color at index ${i} is ${colors[i]}`)
// }
//
// array.forEach(function(currentValue, index, arr), thisValue)
// colors.forEach(function)







//--------------------------------------------------------classroom instruction
//manipulations are called methods and will always be used with ()
// example arrayname.push() etc

//Adding
//adding to arrays beginning and end. use Unshift()-beginning  and Push()- end acronym Add UP
//permanantly changes the array

//Removing
//removing from array beginning and end. use Shift()-beginning and Pop()-end R SP

//Locating

//use arrayname.indexOf(element) will return the number index
//lastIndexOf(element) is also an option
//best way to do it is save it under an variable will return is js console as a number

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
//
// var index = colors.indexOf('green');
// console.log(index);
// // 3
//
// index = colors.indexOf('red');
// console.log(index);
// // 0
//
// index = colors.lastIndexOf('red');
// console.log(index);
// // 7

//Sliceing
//slice will not modify the original array
//Reverse and Sort()
//will get a new array
//arrayname.slice(startindex, endindex)
//creates a new array but does not alter original array
//the numbers in paren will start the new array.

//slice stops before the number you selected.
//the end index is not needed if we remove it and just use the first digit now we are technically jus adding.
// if we get - numbers just satrt count ing backawrads

//if we do slice with no index in both it will return the whole array.
//example:

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
colors.slice(2, 4); // best to put in a variable

//var slice = colors.slice(2, 4);
//want to remove orange - blue
// console.log(colors); // colors is unchanged
// // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log(slice); // ['yellow', 'green']
//
// slice = colors.slice(3);
// console.log(slice); // ['green', 'blue', 'indigo', 'violet']

//Sort()
//

//sort also works with numbers and reads everything as if it is a string and so it does sort number the wrong way.

//Examples sorting different types
// if sorting with numbers and strings the numbers will come before the strings
//sorts alphabetically and sorts all values into strings


// Split()
// Split turns a string into a  array based off delimeter
// arrayname.split('seperator') (

// example
// let colorstring = 'blue, black green, yellow'
// console.log(colorstring)
// let newcolorstring = colorstring.split(' ,') // seperator is a comma
// console.log(newcolorstring);

//Example:
//     var namesString = "Joe,Bob,Sally";
//
// console.log(namesString);
// // Joe,Bob,Sally
//
// var namesArray = namesString.split(',');
//
// console.log(namesArray);

// Join() an array to a string
// have the option to leave the paren empty but it is recommended you add the comma
// without the seperator th words would be meshed together

//     var namesArray = ['Joe', 'Bob', 'Sally'];
//
// console.log(namesArray);
// // ['Joe', 'Bob', 'Sally']
//
// var namesString = namesArray.join(',');
//
// console.log(namesString);
// // Joe,Bob,Sally

//extra examples worked through course materials

//Appendix Splice workout
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// console.log(colors);
// console.log("remove 2 colors")
// //console.log(colors.splice(0, 2)); //
// //console.log(colors); // now colors are 5 total
// let removed = console.log(colors.splice(0, 2));
// console.log(removed);
// console.log(colors);
// console.log(colors.indexOf('indigo'));
//
// console.log("remove indigo")
// console.log(colors);

//ADDing

// var colors = ['red', 'orange', 'yellow', 'indigo', 'violet'];
// console.log(colors);
// console.log("adding green and blue after yellow")
// colors.splice('yellow', 0,'green', 'blue' )
// console.log(colors)
//
// //if i want to add while in splice leave the second line as 0 and add the elements i want by including after 0 with commas
//
// // Replacing with splice:
//
// console.log("replace indigo and violet with purple")
// console.log(colors)
// colors.unshift('dark blue')
// console.log(colors)
// colors.pop()
// console.log(colors)
//
// console.log(colors.length);
// console.log(colors[0])
// console.log(colors[3])
// console.log(colors[2])
// console.log(colors[1])
// //to access each individual element in an array use the name and array brakets name[] with the index number of the element.
// //colors[]
// console.log("the second element in the array is: " + colors[2])
// console.log("The third element in the array is: " + colors[3])
//
// console.log("in the colors array there are " + colors.length + " different colors")
//
// console.log(colors)
//
// for (var i = 0; i < colors.length; i++) {
//     console.log(`The the color at index ${i} is ${colors[i]}`)
// }
//
// array.forEach(function(currentValue, index, arr), thisValue)
// colors.forEach(function)




//for loop examples
// for (let i = 0; i < 1; i++) {
//     console.log(`The item at the first spot in the array ${i} is ${namess[i]}`)
// }
// for (let i = 1; i < 2; i++) {
//     console.log(`The item at the second spot in the array ${i} is ${namess[i]}`)
// }
// for (let i = 2; i < 3; i++) {
//     console.log(`The item at the last spot in the array ${i} is ${namess[i]}`)
// }

// console.log("More forEach examples")
//
// let heros = ['Superman','Batman', 'Flash','Goku',"Joker", "Vegeta" ]
// console.log(`List of heros: ${heros}`)
// console.log("--------------------------")
// console.log(` How many heros in array: ${heros.length}`)
// console.log(heros.indexOf("Joker"));
//
// console.log("--------------------------")
// console.log(heros)
//
// for (let h = 0; h < heros.length; h++) {
//     console.log(`The hero `)
// }


//-----------------------------------------ClassNotes Arrays
//Examples
// let namess =["Jim", "Bob", "Lisa","Russ"]
// console.log(namess);
//examples
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
//-------to find length of array use .length
// console.log(shapes.length);
//
//-------Acessing array done by using name.[} with index you want inside
// console.log(shapes[2]);
//when trying to access an array that does not exist will come back as undefined

//------------iterating arrays
//
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // // loop through the array and log the values
// // for (var i = 0; i < shapes.length; i++) {
// //     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
// // }
//
// // --------------For Each Loop alternate to for loop
// //takes another function as a parameter and does not return value
// //forEach also refered to as callback
//
// shapes.forEach(element, index, array) {

//}
//--------------storing na array in a varaible

//arrays are 0 index so the first array will always be 0
// let lunch = ["salas", "burgers", "pizza", "drinks"]
//
// console.log(lunch);
//
// for (var i = 0; i < lunch.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + lunch[i]);
// }

//index is an optional parameter, element is usually always used gives value, index just gives the name.

//-----------------------for of loop
// for (let element of arrayname) {
//     //code
// }


// console.log("More forEach examples")
//
// let heros = ['Superman','Batman', 'Flash','Goku',"Joker", "Vegeta" ]
// console.log(`List of heros: ${heros}`)
// console.log("--------------------------")
// console.log(` How many heros in array: ${heros.length}`)
// console.log(heros.indexOf("Joker"));
//
// console.log("--------------------------")
// console.log(heros)
//
// for (let h = 0; h < heros.length; h++) {
//     console.log(`The hero `)
// }






//console.log("array")
//******************************************Arrays-
//arrays are non primitive types are arrays and onjects and functions
//array is a ordered list of valuescan be numbers string and different arrays

//to create array literal
// let super = [hold all array values seperated by comma]
// consoist of 4 values as a string
// each value represented by an index or number
//to add to an array list the name with brackets and add the number you want to add i brakets

//Example
// let supers = ['superman','batman', 'flash','aqua']
// console.log(super[2]) // to acces values list the name and index number in[]
// supers[4] = 'wonderwoman'
// console.log(supers)
// //to delete
// delete supers[2] // index you want to delete
//
// //we can replace the deleted value by typeing in the arry name.[] with the index we like to add to.
// //then we console.log toget results
// console.log(supers)
//when we delete a value the value is deleted but the index number remains the same and says empty in jsconsole
//arrays can also contain other data type
//to add an array inside another array use square brakets[]
//when we add an array inside another array its considered a multi dimensional array
// let supers = ['superman','batman', 'flash','aqua', 1,'hello',true, ['good', 'eveil', 'neutral']]
// to access an array in an array we console,log
// console.log(supers[8][2])      //we count to array positon and put it in brakets after name then we add anpther square braketto in clude the array value starting with index 0 to which ever one you want.


//practice create array with 3 countries and add another country
// let countires = ['england','france', 'spain']
// //to add a country use next index number and name
// countires[3] = 'italy'
// console.log(countires);
//

//*********************************************Array Methods and properties
// Length property

// let supers = ['superman','batman', 'flash','aqua']
// //console.log(supers.length) // to see results. in js console we get 4
// //console.log(supers[supers.length - 1 ]) // to get index of last index we use length -1. js console gives us aqua
// //the length value is mutable so we can change its value
// supers.length =2 // array only pulls up first two indexes
// console.log(supers);

// if we were to do supers.length = 3 we would get back and empty in the js console becasue we just made the length = 2

//--------------------Array Methods
//method 1: ---------------------indexOf:  used to find out of an array has a specific value
//let supers = ['superman','batman', 'flash','aqua']

//console.log(supers);
//console.log(supers.indexOf('flash'));

// if use do index for a value that doesnt exit it print -1 in js console

//.-----------------includes a value adds a boolean value
//console.log(supers.includes('batman')); // so were checking to see if supers array includes batman and it returns true if true or false
// its also good to remember that includes is case sensitive

//----------------pop()- out and push() -in methods use to add things to an array
//pop removes last item from array
// --------------for removeing its SP for shift and pop front and last
//---------------for adding its UP. unshift and push front and last
// console.log(supers.pop()); //removes last item
//
// console.log(supers.shift()); //removes first item

// supers.push('green') //adds to last item in array
// console.log(supers.push('beetle'))// adds to beginning of array
// console.log(supers.unshift('thor'))
// console.log(supers);

//--------------concat() method used to merge an array with another array
// console.log(supers.push('spiderman'));
//
// console.log(supers);
// // so now were going to ceate a new array and merge that array with this one
//
// let newsupers = supers.concat(['wolverine', 'cyclops', 'prof x'])//our original array. in parenthesis include new array with brakets
//
// console.log(supers);
// console.log(newsupers);

//concat method will not change the original array

//.join() methods used to turn array into a string with all the values seperated by comma

// console.log(supers.join('|')); //returns a string of our array with commas
// in the join () we can also add our own details in parenthesis like adding extra space or using pike symbol | instead of comma just use the array qoutes as above

// ----------split() method is opposite to join takes a string and turns it into array

// let supers = "superman, batman, flash, aqua"
// console.log(supers);
//
// let supersArray = supers.split(', ')
// console.log(supersArray);
//let supers = ['superman','batman', 'flash','aqua', 'joker', 'harley', 'spiderman', 'goku,', 'gohan', 'piccolo', 'vegeta']
//console.log(supers);
// //---------slice() method takes a a sub array;it cuts out from one position to another
//
// // if we only wanted to pull out one value we create a var and
// let gothem = supers.slice(4, 6) // now i have created another array with the selected values
//count 1 past the one you want
// console.log(gothem);
//
// //slice is a nondestructive method which measn out original array of supers is untouched
// console.log(supers);

//-------------------------------------splice()
//removes items from an array and replaces them with new ones.

//supers.splice(6, 1, 'geenlantern')     // if we wanted to remove spiderman with green lantern use index of spiderman in () the second number is how many items you want to remove at this point in the array if we select one we will only be removing spiderman only
// last in the splice () we need to supplt th new value as a string ''
//console.log(supers); //now the new array has removed spiderman and replaced it with green lantern

//if we wanted to add a new value without removing a value and wanted to include it in the middle of array
//we do this by removing the second value in splice to 0 we have now added green lantern as the 6 index without removing anything
//supers.splice(6, 0, 'geenlantern')


//with splice we can also delte items from an array
//with the splice we can completely remove the the method and its value
// to do this we dont add a new value. we supply the index number of the item we want to delete and select 1 which is only aqua
// supers.splice(3, 1,)
// console.log(supers);
//
//
// //splice is considered a destructive method becasue it permanatly changs out array
//
//
// ///reverse() reverses the order of the array
//
// console.log(supers.reverse());
// //sort() method alphbetize the array
//
// console.log(supers.sort());

//---------------------------------------------//Array iterator Methods
//forEach Loop;

// let supers = ['superman','batman', 'flash','aqua', 'joker', 'harley', 'spiderman', 'goku,', 'gohan', 'piccolo', 'vegeta']
// console.log(supers);

//loops over our array values and does certain action
// inside paren add a function which will perfomr some form of action on our values. it does not need a name but it does use  parameters. theres up to 3 we can provide
//first is required and the other two are not.
//1 is a reference to the value of array
// 2 index optional
//3 array reference to entire array and is optional

// so if insert values into the console.log we see the complete array values
// supers.forEach(
//     function (value, index, array) {
//     console.log(`${value}`) // we could also just use the word value instead of using the temperant litrals ${}
//     }
// )

//Example:
//this example gives us a list of the array with the index and value
//     supers.forEach(
//         function (value, index, array) {
//             console.log(`The index of ${value} is ${index}`)
//         }
//     )

//Example:
//if we wanted to print out the array
// this prints out our entire array according to the number of values in the array
//     supers.forEach(
//         function (value, index, array) {
//             console.log(`${array}`)
//         }
//     )



//*********************************************   For each Loop ---random youtube video notes
// called a call back function
//executes a given function on every elemnt in an array
//calls a fucntion once for each element in a array in order
//has 3 arguments: the value, the index and the array object in parenthesis seperated by comma

//so this example were saying for each item in or names array i want to print out individually and add the string is the best to each item.
// let names = ['ann','dave','hannah','bob' ]
// names.forEach(name => {
//     console.log(`${name} is the best`)
// })     //name is what we have chosen to call each item in our array followed by arrow function


//const numbers = [1, 2, 3, 4,5 ]; //we want to console.log these numbers
// numbers.forEach(consoleItem) // parenthesis considered parameters and can accept up to 3, value, index, and array object
// now when we pass in a function as a callback into the .forEach we get the array list 1-5 going downward
// function consoleItem(item, index, arr) {
//     console.log('a['+index+'] = '+ item); // use to highlight the parameters description
// }

// if select item shows list numbers 1-5
//if select index list 0-4
//if select arr list array 1-5 going horizontal with commas

//Example with item

//console.log('a['+index+'] = '+ item) // example displays items in [] brackets  = to index numbers of each
//can be used to

// we can also write this function as an arrow function by taking the example and pasting it directly into the forEach (). and it gives you the same result.
// numbers.forEach((item, index, arr) => {
//     console.log('a['+index+'] = '+ item)
// })


// ----------adding the sum of arrays example-------------
//other ways to use the forEach method is to calculate the sum of the numbers from the array
//to do thi first create a var labeled sum = 0 and in the foreach so sum += item and it adds up all the numbers in the array = 15.

// const numbers = [1, 2, 3, 4,5 ]
// let sum =0
// numbers.forEach(item => {
//     sum += item;
// })
// console.log(sum)

//---------------calculating the number of  times letter appears in array
//we create an object that keeps track of the count with each letter

// const letters = ['a', 'b', 'a', 'b','c', 'd', 'a' ]
// let count = {} //keeps track of the count with each letter
// letters.forEach(item => { // say count item value +=1 or ++
//     if (count[item]) {
//             count[item]++
//     } else {
//         count[item] = 1
//     }
//
// })
// console.log(count) // gives us back how many letters of each in array

//**************For in loop

//used to iterate over innumerable properties of an object or object properties.
//objects are made up of key value pairs
//we create an object with curly braces with names and key in strings followed by a value and a comma
//outside of the brakets we console.log the variable
//so now when we console.log we these 3 elements appear with their values
//so we can use a for in loop to loop over these property names

//to begin the loop we use keyword for () {}
//parenthesis has variable name followed by keyword 'in' followed by object name.
//inside of curly braces is block of code

//whats happening is the for loop is using our variable to iterate over our object property names
// we can alos us the for in loop to access the property values as well by doing the another temporal string oin console.log seperated by a colon and adding in the object declaring name folowed by box brakets with the for declaing varibal in the middle in this case the x. doing tis gives both property names and values.


// let character = {
//     name: 'Sonic',
//     color:'blue', // considered the key with a value of blue
//     speed: 1000,
// }
// console.log(character);
//
// for (let x in character) {
//     console.log(`${x}: ${character[x]}`) //inside curly braces is block of code after printing we receive out property names only
// }

// const salaries = {
//     peter: 24000,
//     james: 34000, // considered the key with a value of blue
//     john: 55000,
// }
// console.log(salaries);
//
//
// //Example:
// for (let i in salaries) {
//     let salary = ` $${salaries[i]}` //do this to put a $ in front of the values
//     console.log(`${i} earns $${salary} per year`) //inside curly braces is block of code after printing we receive out property names only
// }

//When we use the term inumerables we mean
//by default when we create an object were free to modify add or delete a property
//do this by using object name. property name you want to modify = 'new name in qoutes' outside brackets seen below

//we can also completely remove a property by using delete in front of object var and property
// we can add to object by saying object name. nw property = its value
//its important to know that each of these properties
// let character = {
//     name: 'Sonic',
//     color:'blue', // considered the key with a value of blue
//     speed: 1000,
// }
// character.name ='Knuckles';
// delete character.speed;
// character.alignment = 'good'
// //it important to kow that each of these properties have their own attributes/property
// //so in js console type Object.getOwnPropertyDescriptor(character, 'name') and supply two things: the object name wih is character followed by a comma and space and then as a string the name of the property
//     // in js console this gives us all the properties of the property.
//     //one of these propeties is enumerable set to true. if it were false then when using a foreign property to loop over the object name would not appear.
//
// //to change these attributes of properties in js console. inside js file code type object.defineProperty(character or object name, 'property name', {followed by brackets with object values})
//
// Object.defineProperty(character, 'name', {
//     value: 'Tails', //name of property
//     writable: true, // can it be changes
//     enumerable: false, // will it show up in loop
//     configurable: true,// can it be deleted
// })      // now we can change the attributes of the properties
// //by default all of these are set to true
//
// console.log(character) // so now when we console.log we can see the name has changed
//
// // now we can use our for in loop to loop through these properties
// // in js console it give us the property names and values with changes
// //if we modify the object.defineproperty line to false on enumerable it removes the name property when looking on the js console.
//
// //so when we say for in loop iterates over enumerable properties we mean properties that have their enumerable attribute set to true.
//
// for (let x in character) {
//     console.log(`${x}: ${character[x]}`) // use x for property names and character[x] for values
// }

//for of is usd as the same as for in except it breaks down the values in strings in arrays instead of the property