"use strict";

$(function() {

    // INSERT JAVASCRIPT CODE SAMPLE HERE
    alert( 'The DOM has finished loading!' );


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

$('.important').css('background-color', 'yellow')

ELEMENT SELECTOR EXAMPLES
$('tag_name')
$('p')

Using the Multiple Selector SEPERATE BY COMMA
$('.important, p').css('background-color', '#FF0');

The All Selector USES THE WILDCARD ASTERISK *
$('*')
