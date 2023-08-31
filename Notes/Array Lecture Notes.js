//Array literal notation - [] square / straight brackets

console.log([]);

console.log([1, 2, 3]);

console.log([true, "different data types in this array", 1, null, undefined]);

//okay - how do I store an array into a type of variable?

let lunchPlansArray = ["salad down the street", "chic-fil-a is open downtown now", "pizza at pizzaritas", "mexican food at the oasis cafe"];

console.log(lunchPlansArray);

//.length will tell us the "size" of the array as a number..

console.log(lunchPlansArray.length); //The length is the number 4

//If I want to look at the individual elements in the array. . arrays are zero-indexed, so the first element is 0

//Setting up a new array to look at

let fenrirClassPetNames = ["Peanut", "Jax", "Lindsey", "Clarence", "Snoop (Dawg)", "Luna", "Salem"]

console.log(fenrirClassPetNames);

console.log(`Hey thanks for asking me about my cohort's pets - the one that I own is ${fenrirClassPetNames[0]}`);

console.log("Jessica owns a dog and the dog's name is " + fenrirClassPetNames[1]);

for(let i = 0; i < fenrirClassPetNames.length; i++){
    console.log("Here's the name of one of our pets: " + fenrirClassPetNames[i]);
}

// for(let element of arrayName){
//
// }
console.log("~~~~ line break ~~~~");

let comboArray = [7, "Two", true, null, ["an array", "inside an array", "wow"]];

comboArray.forEach(function(element, index){

    console.log("Hello - we're learning about iterating thru arrays, and the current index we are on is " + index);
    console.log("The element is:");
    console.log(element);
})
console.log("~~~~ line break ~~~~");

//Question: Do we **need** the index parameter? Or is it optional?
let moviesArray = ["The Meg 2", "Willy Wonka and the Chocolate Factory", "Dodgeball", "Jurrasic Park"];

moviesArray.forEach(function(element){
    console.log(`Hey, have you ever seen ${element}? It was a pretty good movie.`);
});


console.log("~~~~ line break ~~~~");

//DLC content: for of

for(let petName of fenrirClassPetNames){

    if(petName === "Lindsey"){
        break;
    }
    console.log("Here's the name of one of our pets: " + petName);
}


//////////////////////////////Excercise

"use strict";

/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */

let names = ["Kenneth", "Gilly", "Gonzalo", "Jason"];

console.log(names);

/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */

console.log(names.length);

/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
/**
 * TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.
 */

console.log("~~~ for loop printing below ~~~");
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}


/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */

console.log("~~~ forEach loop printing below ~~~");
names.forEach(function(element){
    console.log(element);
})

/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */

let testNums = [1,2,3,4,5];

function first(array){
    return array[0];
}
function second(array){
    return array[1];
}
function last(array){
    return array[array.length - 1];
}

console.log(first(testNums));

console.log(second(testNums));

console.log(last(testNums));