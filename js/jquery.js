// "use strict";

// $(function () {

    // INSERT JAVASCRIPT CODE SAMPLE HERE
    //alert( 'The DOM has finished loading!' );


    // console.log($("p"));
    // console.log($('li').html());
    // //console.log($('p').css("border"));
    //
    // // grab elements and store results into variables
    //
    // let borderprop = $('p').css("border");
    //
    // $("li").css('border', '1px solid red')
    // $("*").css("color", "purple")

    // console.log($("p"));
    // console.log($("#ice-cream-list"));

    //     Class Selectors
    //
    // Remove your custom jQuery code from previous exercises.
    //
    //     Update your code so that at least 3 different elements have the same class named codeup.
    //
    //     Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    // $(".codeup").css("border", "1px dashed red")
    //
    //     Remove the class from one of the elements. Refresh and test that the border has been removed.
    //
    //
    //     Element Selectors
    //
    // Remove your custom jQuery code from previous exercises.
    //
    //     Using jQuery, set the font-size of all li elements to 20px.
    // $("li").css("font-size", "20px")
    //
    //     Craft selectors that highlight all the h1, p, and li elements.
    // $("h1, p, li").css('background-color', "yellow")
    //     Create a jQuery statement to alert the contents of your h1 element(s).
    //
    //     Multiple Selectors
    //
    // Combine your selectors that highlight all the h1, p, and li elements.
    // $('h1, p, li').css("border", "3px solid red")
// jQuery
    // uses arrow function
    // let alertFunction = () => {
    //     alert("you click me")
    // }
    //
    //new method for jquery replaced click with on and passed the arrow function as the
    //
    // $("h1").on("click", alertFunction)  // this passes in an anonymous function

    //     Add jQuery code that will change the background color of an h1 element when clicked.
$("h1").on(function() {
    $("body").css("background-color", "cornflowerblue")
})
    //     Make all paragraphs have a font size of 18px when they are double clicked.
$("h1").on("dblclick",function() {
    $("body").css("fontSize", "18px")
})

$("li").on("dblclick",function() {
    $("body").css("fontSize", "18px")
})
    //     Set all li text color to red when the mouse is hovering; reset to black when it is not.


$("li").on({
    mouseenter: function () {
        $("li").css("color", "red");
    },
    mouseleave: function () {
        $("li").css("color", "black");
    } })





