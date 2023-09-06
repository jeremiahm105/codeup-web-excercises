"use strict";

$(function () {

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

    console.log($("p"));
    console.log($("#ice-cream-list"));

    //     Class Selectors
    //
    // Remove your custom jQuery code from previous exercises.
    //
    //     Update your code so that at least 3 different elements have the same class named codeup.
    //
    //     Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    $(".codeup").css("border", "1px dashed red")
    //
    //     Remove the class from one of the elements. Refresh and test that the border has been removed.
    //
    //     Give another element an id of codeup. Does this element get a border now?
    //
    //     Element Selectors
    //
    // Remove your custom jQuery code from previous exercises.
    //
    //     Using jQuery, set the font-size of all li elements to 20px.
    $("li").css("font-size", "20px")
    //
    //     Craft selectors that highlight all the h1, p, and li elements.
    $("h1, p, li").css('background-color', "yellow")
    //     Create a jQuery statement to alert the contents of your h1 element(s).
    //
    //     Multiple Selectors
    //
    // Combine your selectors that highlight all the h1, p, and li elements.
    //$('h1, p, li').css("border", "3px solid red")

});





