//(function() {
    "use strict";

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
    // let person= {
    //     firstname: "Jimmy",
    //     lastname: "Bob",
    // }
    // console.log(`${person.firstname} ${person.lastname}`)
//
// //option 2
// let person ={}
//     person.firstname = "Jay",
//     person.lastname = "matt",
//
//     `${person.firstname} ${person.lastName}
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


//     person.sayHello = function () {
//        return `Hello from ${this.firstname} ${this.lastname}!`
//     }
//
// console.log(person.sayHello())


/** TODO:
 *
 *
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
     * and console.log the relevant messages for each person in java script
     */
        //create an array of objects where each object represents one shopper.
        //if spend >200 * 12% = 24 discount should
        // how much ryan pays  bought 250
        //how much cameron pays bought 180 needs 20 or more to qualify
        // george pays          bought 320
        //display line name,amount before, discount if any, amount after discount


    //this is already an array of objects  will use [] to target
//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//     //
//
//     //Option 3: complete by doing a conditional before forEach to easier compile forEach
//     let qualifiesForDiscount = function (element){
//
//     if(element.amount > 200){
//         return `${element.name} is shopping with us today - they have purchased ${element.amount} which qualifies for our discount offer. ${element.name} now has to pay $${(element.amount - (element.amount * .12)).toFixed(2)}`;
//     } else {
//         return `${element.name} is here and purchased $${element.amount} - that does not qualify for our discount today, but we appreciate you shopping with us.`
//     }
//
// }


    // shoppers.forEach(function(element,index,array) {
    // console.log(element)
    //
    // let beforeDiscount = element.amount
    // let discount = .0
    // if (beforeDiscount > 200) {
    //     discount = beforeDiscount * 0.12
    // }

    //option2
    //     shoppers.forEach(function(element,index,array) {
    //         // console.log(element)
    //         //
    //         // let beforeDiscount = element.amount
    //         // let discount = .0
    //
    //         if (element.amount > 200) {
    //             return `${element.name} shopping ${element.amount}`
    //             //discount = beforeDiscount * 0.12
    //         } else { `${element.name} shopping ${element.amount}`
    //         }
    //     })

        //target by fucntionname(shoppers[])
    //
    //     let afterDiscount = beforeDiscount - discount
    //     console.log(element.name + " amount bought was $ " + beforeDiscount.toFixed(2) +
    //     " received a discount of $ " + discount.toFixed(2) +
    //     " and needs to pay $ " + afterDiscount.toFixed(2));
    //
    // })


    /** TODO: //nested object example
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let books = [
    //     {
    //         title: 'Atomic Habits',
    //         author:
    //             {firstname: 'Maria', lastname: 'Snyder'},
    //     },
    //
    //     {
    //         title: 'Poison Study',
    //         author:
    //             {firstname: 'Cormac', lastname: 'McCarthy'},
    //     },
    //
    //     {
    //         title: 'The Road',
    //         author:
    //             {firstname: 'James', lastname: 'Clear'},
    //     },
    //
    //     {
    //         title: 'Eat That Frog',
    //         author:
    //             {firstname: 'Brian', lastname: 'Tracy'},
    //     },
    //
    //     {
    //         title: 'The Pursuit of Excellence',
    //         author:
    //             {firstname: 'George', lastname: 'Sweeting'},
    //     },
    //
    // ];
    //             console.log(books[0].title);
    //             console.log(books[0].author.firstName + " " + books[0].author.lastName);
    //
    //             console.log(books[3].title);
    //             console.log(books[3].author.firstName + " " + books[3].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    //for (let i = 0; i < books.length; i++) {
   // console.log("Book # " + ( i + 1 ) + " \n" +  "Title: " + books[i]. title + " \n" + books[i].author.firstname  +  books[i].author.lastname);
// could have also did line by line.

//with using the for could have done multiple console.log instaed of a long sentence
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
//



//})();