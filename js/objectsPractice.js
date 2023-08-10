
let inventoryArray; //declaring array

inventoryArray = []; //initialize with a value using ' [] ' < the array literal notation, so now we have an empty array in our variable

let inventoryToolOne; //declaring

inventoryToolOne = {

    name: "Hammer",
    price: 29.99,
    stock: 20

} //init with an object - this object has three properties (string, num, num values)

inventoryArray.push(inventoryToolOne)

//What does the entire array look like?
//We could console.log(arrayName)

console.log(inventoryArray);

//Let's make a second tool - we'll use dot notation

let inventoryToolTwo = {}; //All in one - dec and init

inventoryToolTwo.name = "Screwdriver";
inventoryToolTwo.price = 10.00;
inventoryToolTwo.stock = 15;

inventoryArray.push(inventoryToolTwo)

console.log(inventoryArray); //Array now has two elements - our two objects

//"Javascript, I want to open up my array - I want to go to the element at index 1 and see what price it is"

console.log("$" + inventoryArray[1].price + " is the price of this tool in the array at index 1");

//What is the name of the object at the 0th index in my array?

console.log(inventoryArray[0].name + " is the name of the first object [0th index] in our array");

//a forEach - what array do we want to call a forEach on? array.forEach(function(element) { //what to do with the parameter called 'element' })

inventoryArray.forEach(function (element, index) {
    console.log(`We are talking to ${element.name} and that tool has a price of $${element.price} at index: ${index}`);
})