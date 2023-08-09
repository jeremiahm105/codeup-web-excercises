/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */

    // let person = {};
    //
    // person.firstName = "Kenneth";
    // person.lastName = "Howell";

let person = {
        firstName: "Kenny",
        lastName: "Howell"
    }

console.log(`${person.firstName} ${person.lastName} is here and attending class`);

/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

person.sayHello = function(){

    return `Hello from ${this.firstName} ${this.lastName}!`;
}

console.log(person.sayHello());

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

let shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

//Function - take in an element from an array
//Conditions : if amount > 200; .12 (12 percent) off
//display a line with the name of the person, the amount before the
// discount, the discount, if any, and the amount after the discount.
//Use a foreach loop to iterate through the array,
//We decided: our functions is going to be called in the forEach, so our function is going to work with the elements of that array

let qualifiesForDiscount = function (element){

    if(element.amount > 200){
        return `${element.name} is shopping with us today - they have purchased ${element.amount} which qualifies for our discount offer. ${element.name} now has to pay $${(element.amount - (element.amount * .12)).toFixed(2)}`;
    } else {
        return `${element.name} is here and purchased $${element.amount} - that does not qualify for our discount today, but we appreciate you shopping with us.`
    }

}

shoppers.forEach(function(element){
    if(element.amount > 200){
        console.log(`${element.name} is shopping with us today - they have purchased ${element.amount} which qualifies for our discount offer. ${element.name} now has to pay $${(element.amount - (element.amount * .12)).toFixed(2)}`);;
    } else {
        console.log(`${element.name} is here and purchased $${element.amount} - that does not qualify for our discount today, but we appreciate you shopping with us.`);
    }
});

//Way numero uno - book objects then dec / init Array with book obj vars

let book1 = {
    title: "Fahrenheit 451",
    author:{
        firstName: "Ray",
        lastName: "Bradbury"
    }
}

let book2 = {
    title: "Cat's Cradle",
    author: {
        firstName: "Kurt",
        lastName: "Vonnegut"
    }

}
let book3 = {
    title: "Nine Stories",
    author: {
        firstName: "J.D.",
        lastName: "Salinger"
    }

}
let book4 = {
    title: "Foundation",
    author: {
        firstName: "Isaac",
        lastName: "Asimov"
    }

}
let book5 = {
    title: "Test Driven Development by Example",
    author: {
        firstName: "Kent",
        lastName: "Beck"
    }

}

let books = [book1, book2, book3, book4, book5];

//Books.push(book1)
//books.push({title: , author: {firstName: , lastName: }})


console.log(books[0].title);
console.log(books[0].author.firstName + " " + books[0].author.lastName);

console.log(books[3].title);
console.log(books[3].author.firstName + " " + books[3].author.lastName);


//books looping part
for (let i = 0; i < books.length; i++) {
    console.log(`Books # ${i + 1}`);
    console.log(`Title: ${books[i].title}`);
    console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
}


last part of bonus
//We could have accepted a "author object" but. . that seems more remote?

function createBook(bookTitle, authorFirstName, authorLastName){
    //We got fancy :( :) definitely can make this multiple lines using variables not saying this is 'best way', but it is working
    // return {title: bookTitle, author: {firstName: authorFirstName, lastName: authorLastName}};

    //This is great: Readable, functional, and also great code
    let bookObject = {};
    bookObject.title = bookTitle;
    bookObject.author = {
        firstName: authorFirstName,
        lastName: authorLastName
    };

    return bookObject;
}

let booksArray = [];

booksArray.push(createBook("Title1", "Dude", "McDude"));
booksArray.push(createBook("Title2", "Dude", "McDude"));
booksArray.push(createBook("Title3", "Dude", "McDude"));
booksArray.push(createBook("Title4", "Dude", "McDude"));
booksArray.push(createBook("Title5", "Dude", "McDude"));


//We wrote purrrrrfectly good code above that shows book info - why re-write it when we can refactor and D R Y?

function showBookInfo(array){

    for (let i = 0; i < array.length; i++) {
        console.log(`Books # ${i + 1}`);
        console.log(`Title: ${array[i].title}`);
        console.log(`Author: ${array[i].author.firstName} ${array[i].author.lastName}`);
    }
}

showBookInfo(booksArray);