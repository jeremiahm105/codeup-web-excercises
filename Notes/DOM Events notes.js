// The DOM provides an Event Model that allows you to write code that responds to events that happen within the web browser
// The process of detecting and responding to events involves registering an event listener
// This means that specific code is tied to a specific event, on a specified target.

//REGISTER AN EVENT LISTNER using addEventListener method
//can be registered on windows, document or element
// the object it is registered on is called a target
// register with addEventListener method

// EXAMPLE
// target.addEventListener(type, listener);
// The target is the object the event listener is registered on. The type is the type of event that is being listened for. The listener is the function that is called when an event of type occurs on the target.

// EVENT TYPES
// keyup (key is released)
// click (mouse is clicked)
// change (input loses focus after it has been modified)
// submit (form is submitted)

// EXAMPLE

// in the example below the function listener will be called anytimethe button btn is clicked
// <body>
// <button id="btn1">Click Me!</button>
// <script>
// 'use strict';
//
// // create a handler function
// var listener = function (event) {
//     alert('You clicked the button!');
// }
//
// // register the listener to handle clicks on btn1
// document.getElementById('btn1').addEventListener('click', listener);
//
// </script>

// REMOVE AN EVENT LISTENER
// // just call removeEventListener, on the same target and parameters
//
// EXAMPLE
//
// <script>
// 'use strict';
//
// var listener = function (event) {
//     alert('You clicked the button!');
// }
//
// // add event listener to btn1
// var btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', listener);
//
// var remover = function (event) {
//     // remove event listener from btn1
//     btn1.removeEventListener('click', listener);
//     console.log('Event listener removed.');
// }
//
// // add event listener to btn2
// var btn2 = document.getElementById('btn2');
// btn2.addEventListener('click', remover);
//
// </script>

// In the example above, the 'Click Me!' button will show an alert until the click event listener is unregistered via the 'Remove Event Listener' button.
//
// //with removing a event listener. type it out and in paren type out event type in qoutes followed by remover if removed or listner if added
// EXAMPLE ADD
// // add event listener to btn1
// var btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', listener);
//
// EXAMPLE REMOVE
// // add event listener to btn2
// var btn2 = document.getElementById('btn2');
// btn2.addEventListener('click', remover);



