"use strict"
console.log("hello practice")

//--------------------------------This Self Study---------------------------

// This: can be used multiple ways:
// 1.global object  --gets reference to window object in js console opens up gloabl window which represents the global window such as alert,
// 2.method with a project
// 3.as a constructor on a function or class
// 4.as a DOM event handler

//window.alert or this.console.log
//represents the object that calls it

//*******Example inside a function
// function thisKeyword () {
//     console.log(this) //this represent the object that calls it
// }
// thisKeyword()  //refers to window object and is a global fucntion .// very rare to be used this way

//Example  best used inside  object surrounded by {} brakets method with a project

// let game = {
//     name: "sonic",
//     platform: "SEGA",
//     year: 1991,
//     release: function() {
//         console.log(this)//(`this game was releases in ${this.year}`) // same as saying game.year
//         //we also jus console.log(this) and it would reference the game object becasue it is bound to our object.
//     },
// };
//
// game.release()  //calling a function with in an object

//**********Examples of this with nested objects as a constructor on a function or class
//inside the object we will create and object with the characters property do so with {} becasue its an object
// we also added a method which is a behavior which is the list()
//must use with paren and brakets(){}
let game = {
    name: "sonic the headgehog",
    platform: "SEGA",
    year: 1991,
    characters: {
        main: "sonic",
        side: "tails",
        enemy: "robot",
        list() {
            console.log(`${this.main}, ${this.side}, ${this.enemy}`) // a method
            console.log(this)
        }

    }
};

//to target the object use name.property.method to pull from the nested object characters followed by the list method which remeber is a function therefore it requires () when loging it.
game.characters.list() // now it returns all 3 side characters in charactaer property

//to call the release property use name.release
//game.release() // if i called the year it would come up as year undefined therefore we if we use this.year in the.
//so to properly reference the property we use this.year in the ${this.year}
//console.log(`this game was releases in ${year}`)

// this will always refer to the object that the message is in could be a property or a property object like chacter is
// the list method is inside of the characters object so this refers to characers


//remember the method will contain the info where this is referencing the data method are functions so include the () and the {} to make
//Example using this a DOM Handler
//skips

// let book = {
//     title: 'Harry Potter',
//     author: 'J.K Rowlings',
//     info() {
//         console.log(`${this.title} by ${this.author}`)
//     }
//
// }
// book.info().log  //once called will get message book tile and author
//remember when calling the object with a method you use objectname.method()

// if working on a nested object and using this will refer to the nested object property its listed in to fix this just remove the this.author and instead use the object name.author or property

//Example  exercise rework

// Create an array of objects that represent books and store it in a
// variable named `books`. Each object should have a title and an author
// property. The author property should be an object with properties
//     `firstName` and `lastName`. Be creative and add at least 5 books to the
// array

// let books = [
//     {title: 'Good Book',
//     year: 2023,
//     author: {
//         first: 'Jimmy',
//         last: 'Bob'
//     }
//     },
//
//     {
//         title: 'Bad Book',
//         year: 2020,
//         author: {
//             first: 'Silly',
//             last: 'Beans',
//         }
//     },
// ]

//to target the array use the name followed by [] because we created an array and the number inside should always begin with [0] because that how arrays begin their counting followed by the property desired.

// if i select number[1] oin the brackets it will reference my second object and property.

//console.log(books[1].author);  // when done it will return the names of good book

//Now to loop through the results with books numbered line breaks after title, author and year
// let ibook = books + 1
// for (let i = 0; i < books.length; i++) {
//     console.log(" Book # " + (i + 1) + "\n" + " Year " + books[i].year + "\n" + " Author " + books[i].author.first + books[i].author.last);
// }


// console.log("Book # " + ( i + 1 ) + " \n" +  "Title: " + books[i]. title + " \n" + books[i].author.firstname  +  books[i].author.lastname);

