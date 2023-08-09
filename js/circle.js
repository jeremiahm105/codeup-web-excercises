(function() {
    "use strict";
    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            //Math PI * radius 2

            return Math.PI * this.radius * this.radius
            //Math.PI * Math.pow(3,2)
            //Math.PI * this.radius * this.radius

            //or method taught in class
            let area = Math.PI *Math.pow(this.radius, 2))
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
                if (doRounding) {
                    console.log("Area of circle radius is " + this.radius + " and the area is  " + Math.round(this.getArea()));
                    } else {
                    console.log("Area of circle radius is " + this.radius + " and the area is  "+ this.getArea());
                }

                // console.log(`Area of circle radius is ${this.radius} and the area is ${this.getArea}`)

                //console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea())
        }
    };

    // If doRounding is true, round the result to the nearest integer.
    // Otherwise, output the complete value


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5 //to reassign use object name and property = to 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();


//Diameter of a Circle	D = 2 × r
// Circumference of a Circle	C = 2 × π × r
// Area of a Circle	A = π × r2

// the equation of a circle is (x-u)²+(y-v)²=r² , where (u, v) is the center of the circle and r is the radius of the circle. So we plug them in and find that the equation of this circle is (x-3)²+(y-5)²=26 !

// //Math.sqrt retuerns the square root of a number
// Math.random
// // Returns a random integer between min and max.
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// The Math.round() function returns the value of a number rounded to the nearest integer.
//
// Math.round(20.49);  // 20
// Math.round(20.5);   // 21
// Math.round(-20.5);  // -20
// Math.round(-20.51); // -21
//
// //will round up past .5 and down if under
// The Math.floor() function returns the largest integer less than or equal to a number.
//     examples
// Math.floor( 45.95); //  45
// Math.floor(-45.95); // -46
//
//
// The Math.ceil() function returns the smallest integer greater than or equal to a number.
//
//
//     The Math.ceil() function returns the smallest integer greater than or equal to a number.
//
//     The Math.pow() function returns the base to the exponent power, that is, base^exponent.
//
//     Example:
//
//
// // 2 raised to the 16 power
// Math.pow(2, 16); // 65536