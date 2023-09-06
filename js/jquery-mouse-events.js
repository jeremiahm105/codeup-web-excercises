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

// $("h1").on("dblclick",function() {
//     $("body").css("background-color", "blue")
// })

$("h1").on("dblclick",function() {
    $("body").css("fontSize", "80px")
})

// $("li").hoverOver(function() {
//     $("body").css("color", "red");
// }, function () {
//     $("body").css("color", "black")
// })


// $(h1).on("dblclick",function() {
//     $("body").css("fontSize", "80px")
// })
// $("h1").on("dblclick",function() {
//     $("body").css("font-size", "30px")
// })


$("li").on({
    mouseenter: function () {
    $("li").css("color", "red");
},
    mouseleave: function () {
        $("li").css("color", "black");
    } })


// $("#doubleClickMe").on("dblclick", function () {
//     $("body").css("background-color", "cornflowerblue")
// });

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

// $(".hoverOver").on("mouseenter", function () {
//     $(this).css("background-color", "yellow");
// })
// $(".hoverOver").on("mouseleave", function() {
//     $(this).css("background-color", "inherit");
// })