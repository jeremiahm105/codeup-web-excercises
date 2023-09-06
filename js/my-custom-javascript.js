"use strict";

$(function() {

    // INSERT JAVASCRIPT CODE SAMPLE HERE
    //alert( 'The DOM has finished loading!' );


});

//-------------- NOTES

// Basic syntax: $(function(){}) IIFE
// In jQuery, we commonly use the dollar sign $, an alias of jQuery to reference the jQuery object,

// can be written two ways
// $('selector')
// jQuery('selector')

// If we put our JavaScript at the bottom of our document, it will already be loaded by the time the JavaScript is loaded. Using the function above will ensure the DOM is loaded before running.

// JQUERY SELECTORS

// .html: returns the HTML contents of selected element or the first element in a collection. Similar to the innerHTML property we previously covered.

// .css: allows us to change CSS properties for a given element or elements. Similar to the style property previously discussed.

// The syntax for selecting an element by id
// $('#some-id'); to demo this code <h1 id="codeup">Hello Codeup</h1>
// // to add or manipulate put in a variable with the element were trying to alert using css syntax based on class or function
// $('#codeup').html()
// let content = $('#codeup').html()

// working example
// <h1>Example Page</h1>
// <div class="important">
//     <h3>NOTICE</h3>
//     <p>This is an important message!</p>
// </div>
// <div class="not-important">
//     <h2>Lorem Ipsum</h2>
// <p>
// Lorem ipsum dolor sit amet, incididunt ut <span class="important">labore et dolore magna aliqua.</span>, quis ut aliquip ex ea commodo.
// </p>
// </div>
// <p class="important">This is also very important.</p>
//
// We will add some jQuery to select all the elements with a class of important and use the .css method to change the background color to yellow.


// lecture notes

// console.log($("p"));
//
// console.log($("#ice-cream-list"));
//
// console.log($(".list-item"));
//
// //       Okay - so we can use CSS selector syntax and get back collections of matching. . ids, classes, elements, etc. What now?
//
// //.html()
// //jQuery - console.log the innerHtml of a p tag
// console.log($("p").html());
//
// // Retrieves first of available (similar to querySelector)
// console.log($("li").html());
//
// //.css() go GET a property from selector
//
// console.log($("p").css("border"));
//
// //    Let's see- can I get the return values and store them in vars?
//
// let borderProperties = $("p").css("border");
//
// console.log(`Hey : The border properties are ${borderProperties}`);
//
// //       So we used html() and css() to go GET information - let's try setting some information
//
// let interestingParagraph = "I went down the street the other day to go get some ice cream, and you wouldn't believe what happened to me on the way. I ran into a cop car - the officer got out of the vehicle and said 'HEY' 'WHAT ARE YOU DOING' and I said 'I am on the way to go get some ice cream'. Then I got a ticket, and I went on to have some ice cream: I had an almond joy type of thing. . kinda chocolatey, IDK, you know what I mean";
//
// $("p").html(interestingParagraph);
//
// //       Let's change the color of the paragraph to something less aggressive - like a nice cornflowerblue <3<3<3
//
// $("p").css("color", "cornflowerblue");
//
// //       We now see .html() and .css() can SET information with argument(s)
//
// // Method chaining : .method().method().method().method().method()
// $("li")
//     .css("border", "1px dashed red")
//     .css("margin", ".2em")
//     .css("padding", "2em");
//
// //       Multiple selectors and all selectors
//
// console.log($("#ice-cream-list, h1")
//     .html());
//
// $("*").css("color", "rebeccapurple");


//Vanilla JS

// let h1 = document.querySelector("#clickMe");
//
// h1.addEventListener("click", function () {
//     alert("You clicked me!")
// })

//jQuery
//Deprecated
// $("h1").click(function (){
//     alert("You clicked me!")
// })

let alertFunction = () => {
    alert("You clicked me!")
}

// $("h1").on("click", alertFunction);


$("#").on("dblclick", function () {
    $("body").css("background-color", "cornflowerblue")
});

//Deprecated
// $(".hoverOver").hover(function () {
//     $(this).css("background-color", "yellow");
// }, function () {
//     $(this).css("background-color", "red");
// })

// $(".hoverOver").on({
//     mouseenter: function () {
//     $(".hoverOver").css("background-color", "yellow");
// },
//     mouseleave: function () {
//         $(".hoverOver").css("background-color", "inherit");
//     } })

$(".hoverOver").on("mouseenter", function () {
    $(this).css("background-color", "yellow");
})
$(".hoverOver").on("mouseleave", function() {
    $(this).css("background-color", "inherit");
})