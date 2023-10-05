// ARRAY ITERATING METHODS

// MAP

// Takes in an array and transforms it

let three =[1,2,3];
console.log(three);

// Doubles the original array
let doubled= three.map(function (item) {
    return item * 2
});
console.log(doubled);

// FILTER


// ---CHECKS EACH ITEM IN ARRAY AND CHECKS CONDITION IF TRUE OR FALSE
//if true it puts item back into array if not it will not. new evens array will now only include even numbers

// Example: filter evens
let ints =[1,2,3,4,5,6,7,8]
let even= ints.filter(function (item) {
    return item % 2 === 0
});
console.log(ints);
console.log(even);



// REDUCE

//TAKE AN ARRAY, PERFORM A ACTION AND PASS RESULT TO NEXT ITERATION ALONG WITH NEXT ITEM IN THE ARRAY
//--1: so the first time it goes through the array it gets the result parameter
//--2: next it sends that result/accumulation to the next item in the iteration.  the number at the end is what the initial result will be which is usually 0, otherwise it will be first number in the array which is 1.

// Function Layout
// arrayname.reduce(function (result, item) {
// }, 0);

let reduceSum =[1,2,3,4,5,6,7,8]
let sum = reduceSum.reduce(function (result,item) {
    return result + item;
}, 0);

console.log(sum);

// SOME


// --Checks if any number in the entire array meet a certain condition if they do it returns true

let numbers = [1,2,3,-4,5,6,-7,-8]
let negatives = numbers.some(function (item) {
    return item > 0;
});
console.log(negatives); //prints true

// EVERY

// - similar to some but now every number must meet condition


let allPositive = numbers.every(function (item) {
    return item > 0;
});
console.log(allPositive);// prints false

// FIND

// --GOES THROUGH EVERY ITEM IN THE ARRAY AND CHECKS IT AGAINST AN CONDITION-- IT TRUE IT RETURNS THAT ITEM
//---   is searching for a specific item in the array and if it finds it, it then returns it.
let objects =[{id: "a"}, {id: "b"}, {id: "c"}]
let findExample = objects.find(function (item) {
    return item.id === "b"
});
console.log(findExample); //prints object:  {id: "b"} if it finds it otherwise will return undefined

// FINDINDEX


//--same as find just includes the index, so instead of returning the actual item it returns the index of the item

let findIndexEx =objects.findIndex(function (item){
    return item.id === "b"
}) ;
console.log(findIndexEx); //prints index 1 if not found return -1












