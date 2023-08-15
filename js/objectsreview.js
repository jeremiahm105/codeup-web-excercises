'use strict'
// object grouping of data and functionality. items in a object are called properties and the functions on a object are methods.

// Custom objects uses prototypes whih allow existing objects to tbe used as templates to create new objects

//New object Instance
//let car = new Object()

//console.log(typeof car)
//The use of new Object() calls the Object constructor to build a new instance of Object.

//Object Literal Notation
//an object created using curly braces{}. Gets treated the same as new Object
// let cars = {}
// console.log(typeof cars);

//setting properties on custom object in dot notation **Most preferred
// let cars = {}
// cars.make ="toyota"

//use array notation to assign a "model" property
//only use if property is not a valid identifier
//you will ot know the name of property until run time
//car["model"] = "camry"

//---------------Third way to assign properties
//property names can be any valid string ''
//let car2 = {
//     make: "toyota",
//     model: "camry"
// }

//Accessing Properties: can be accessed through dot notation or array notation
// let car3 = {}
// car3.make = "nissian"
// car3.model = "bmw"
//
// //logging with dot notation
// console.log("dot notation")
// console.log(`the car model is ${car3.model}`)
// console.log(`the car make is ${car3.make}`)
// console.log("--------------------------------")
//
// //logging with array notation
// console.log("array notation")
// console.log(`the car make is ${car3["make"]}`)

//Nested Values: objects in side objects
//values of properties can be any valid value such as array or other object
//Example array with multiple objects
//objects with many nested values are common

var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "jane doe",
            age: 30
        }

    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner:{
            name: "john doe",
            age: 31
        }
    },
];
//becasue the objects are i an array we will be acessing the values with the []
console.log(`the first car is a ${cars[0].make} ${cars[0].model}`)
console.log(`the owner of the second car is ${cars[1].owner.name} and he drives a ${cars[1].make} ${cars[1].model}`)

//when accessing the properties and nested objects include both the properties ex .name.age
//also the objects are indexed staring from 0 so object 1 is index 0 and object 2 is index 1.

// Using the forEach loop with nested arrays

// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });


//Assigning fucntionality to an object
//besides properties can also have functions known as methods. it uses the same process in creating a property except the value is a function.
//
// let newCar = {}
// newCar.make = "Mercedes"
// newCar.model = "C-Class"
// newCar.honk = function () {
//     alert("Honk Honk")
// }
//
// console.log(newCar.honk());


let firstCar = {
    year: 2010,
    color: "blue",
    make: "Chevy",
    model: "S10",
    transmission: "automatic",
    features: ["power windows", "CD Player", "AC", "powerseats"]

}

console.log(firstCar);

//to add other properties
firstCar.numberofseats = 5

console.log(firstCar);

let secondCar = {
    year: 2020,
    color: "silver",
    make: "nissian",
    model: "sentra",
    transmission: "automatic",
    features: ["power windows", "CD Player", "AC", "powerseats"]

}

//Now I combine the two objects into an array

let myGarage = [firstCar, secondCar]
console.log(myGarage)

//Using for loop on combined array

for (let i = 0; i < myGarage.length; i++) {
    console.log(`Here are the two cars that i owned ${myGarage[i].make} ${myGarage[i].model}.It is a year ${myGarage[i].year} and has the features ${myGarage[i].features}`)
    //console.log(``)
}
//when using the for loop to access the array insert the name[].property desired
//can use multiple properties if .make will return both makes of the array.


// Hey, go to the zero index of this array and access the .make property - concatenate that with a space and then the .model property from the same index"

//to target only one element from the array use the index and property desired

console.log(`${myGarage[0].make} ${myGarage[0].model}`)

//Using the "this" keyword
//used to reference the current object
//Creating a method on  the object
secondCar.logMakeModel = function () {
    console.log(`here is the information for this car ${this.make} ${this.model}`)
}

secondCar.logMakeModel()

firstCar.logMakeModel = function () {
    console.log(`here is the information for the first car ${this.make} ${this.model}`)
}

console.log(firstCar.logMakeModel());

//Using for of

for(let car of myGarage) {
    car.logMakeModel()
}