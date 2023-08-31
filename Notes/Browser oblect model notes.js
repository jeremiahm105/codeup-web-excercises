//window is an object, console is a  and .log is a method for example window.console.log
//the BOM is the top object as a developer
// second is equuvilant to 1000 miliseconds in
// the set interval and the clear interval are used together to start and stop a fuction or process.
//bot take in a function
//both methods are assigned to the window object

'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);

//if you dont incluse a clear interval the count will continue
// setInterval()
// The setInterval() method allows code to be executed at a specified time interval. The specified code will continue executing at the given interval until the method clearInterval() is called.

// he setInterval() function takes in a function and an interval as parameters and returns an interval id. The function will continue to be executed at the interval until clearInterval() is called with the correct interval id. Intervals should be specified in milliseconds.

//to count backwards
var count = 10;
var max = 0;
var interval = 1000; // interval time in milliseconds the interval can changed and will return a faster result

// var intervalId = window.setInterval(function () {  //the window is optional. it means the same thing without it.
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         //count--;
//         console.log('Repeating this line ' + count--);
//     }
// }, interval); //could also type 1000

//to have ut start at 10 and not
//the interval id will always be numeric or a number and will be passed to the clearinterval

// everything in viewport dom
// the console and dev tools are the bom

// the above function now allows you to run your code for a specific amount of time.

// setTimeout() say it does a thing after a set amount of time
// setTimeout()
// The setTimeout() method allows code to be executed after specified time interval has passed. The specified code will only be executed once. The timeout code execution can be cancelled via the clearTimeout() method.
//     it also returns
// so it only runs once and activates after a certain amount of time has passed
'use strict';

// var delay = 5000; // delay time in milliseconds

// var timeoutId = setTimeout(function () {
//     alert('Here is a delayed hello!');
// }, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring

// example is if my user performs this action and setTimeout to perform an action after a certain amount of time has elasped.

// Location object: part of bom to let you know where your in the browser
// s accessible though both the window object, and also the document

// he location object is aware of the currently loaded document and provides detailed url information. The location object can also be used to redirect the browser to a new location.

// redirect browser to google.com

// window.location = 'http://www.google.com';
//location.reload(); // reload page, possibly from cache reload the current page your own

//DOM
// has a hierachy of nodes or trees querying and modification of individual parts of the document.

// Several ways to locate an element ----document.getElementById()
//get by id document.getElementById()
// to use in js console type document.getElementID() and pass the required id in the paren. we are typing in thr string and return a node
//to get result in html console.log the document

// the getelementsbyclass name pulls all elements with that name

// for queryselector must use css syntax for class and id before the word # .
when we see the word selectors write as css selector style.
