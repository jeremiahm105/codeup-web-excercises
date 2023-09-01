// TODO: Reference your past code or write fresh code to make a book object. This object should have properties to store the book's title, the book's author, and (optionally) the genre or another property that would make sense for the object to have.

let books = [
    {
        title: 'Atomic Habits',
        author: {firstname: 'Maria', lastname: 'Snyder'},
        genre: 'Personal Development',
    },

    {
        title: 'Help Is Here',
        author:
            {firstname: 'Max', lastname: 'Lucado'},
        genre: 'Spiritual/Christian',
    },

    {
        title: 'The Road',
        author:
            {firstname: 'James', lastname: 'Clear'},
        genre: 'Tragedy',
    },

    {
        title: 'Eat That Frog',
        author:
            {firstname: 'Brian', lastname: 'Tracy'},
        genre: 'Personal Development',
    },

    {
        title: 'The Pursuit of Excellence',
        author:
            {firstname: 'George', lastname: 'Sweeting'},
        genre: 'Spiritual/Christian',
    },

];

//TODO: Uncomment the following variable - fill in the string interpolation expressions to access the properties of your book to finish the following card.



//TODO: Using JavaScript, add your finished HTML card to the DOM so our users will be able to see it on page load. We want target the innerHTML of #container.


//TODO: From prior work or fresh in this file, let's make an array of book objects (at least three).


//TODO: Refactor your above code - our HTML needs to build three HTML cards with the information from the objects. Hint: We would want to iterate through the array and add each fresh bit of HTML into the variable of allCards set up below.

let allCards = "";

for (let book of books) {
    let card = `<div class="card">
        <div>Book Title: ${book.title}</div>
        <div>Book Author: ${book.author.firstname} ${book.author.lastname}</div>
        <div>Book Genre: ${book.genre}</div>
    </div>`;

    allCards += card;
}

let container = document.getElementById("container");
container.innerHTML = allCards;
