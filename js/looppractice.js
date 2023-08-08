"use strict"

//From Teachables

//**********************While basic loop construct
//syntax same as function

// while () {
//
// }
//first a variable is declared
//next a condition goes in the parenthesis such as: i < 10
//third is the console.log with included iteration
//fourth is the increment under the console: i++ will be on its own line
//last is the closing brackets

// so everytime we get to the bottom of the while loop which is the bracket its going to go back to th condition and if it is true its going to repeat the loop untill it is no longer true.
//if we were to make the i =10 the loop would never work because the condition would never be true
//
// let i = 0
// while (i < 10) {
//     console.log(`while loop iteration ${i}`)
//     i++
// }

//*******************Do while: only difference is condition is evaluated at the end of loop instead of beginning
//syntax
// do {
//
// } while ()
//first declared var
//next do followed by curly brackets
//third  console.log on own line
//forth is increment on own line
//fifth is bracket close directly followed by the word while and parenthesis which icludes the conditon i ,10
//so basically all we did was copy while and condition replace with keyword do and paste the while with condition after closing bracket.
// do while loops will execute at least once unlike while who will not if the condition is never met

//important difference about do becasue it checks the condition last it will iterate at least once before it is stops.  meaning it does everythig in the curly brackets first then it will do condition afterwards.
//condition with do while happens after loop occurs.

//remember for the codition is the number you want to stop at.

// let i = 10
// do {
//     console.log(`do while loop iteration ${i}`)
//     i++
// } while (i < 10);

//practice to
//to do multiplication we might have to reassign the var in the form of an equation such as i = i * 2 to double the numbers after each loop.
// let i = 1
// while (i < 65536) {
//     i = i * 2
//     console.log(`while loop ex: ${i}`)
// }

//********************For Loops
//syntax for () {} just like while and fucntion
// for () {
//     console.log
// }
// is keyword for with parenthesis and brackets
//next inside the brackets are var declared then semicolon ;
//next is the condition i <10 then semi colon ;
//third is the increment
//fourth is next line console.log with var inserted
//fifth is closing bracket

//sequence: var declared before loop executes, condition is checked while executing and then it increments and after each iteration it will increment at the end.

//so var declared---checks condition-- logs--increments. will repeat until condition is met

// difference between for and while loop is the for loop compacts all the components inside it parenthesis

// in changing loops if you change the while into a for and and input semi colons before and after you have a while loop now
// also the var and increment are optional in the for loop

//in the for loop you can also declare multiple var and increments at the same time just seperate by a comma
// example for (var i = 0, j = 9; i<10, j <10; i++, j++)

//Other loops are for-in which allows you to iterate through properties and foreach used with arrays

// for(var i = 0; i < 10; i++) {
//     console.log(`for loop: ${i}`)
// }

//practice make the var whatever number you start with, if counting down use greater than to whatever the smallest number is and where the increment gos do your multiplication reassign your var and do whatever math is required such as j = j-5. short hand is j -= 5
// for (let j = 100; j >=5; j = j-5 ) {
//     console.log(`for loop: ${j}`)
// }

///***************Break and continue break allows you to exit loop and continue allows you to skip an iteration
//
// when using a break with if/else make sure its not included in the brackets but right outside of the brackets inside the while not the if.
// let m = 0
// while (m < 10) {
//     console.log(`${m}`)
//     if (m == 5) {
//         break;
//     }
//     m++
// }
// console.log("all done")


//if we wanted to use continue with the exmple above we would
//1 remove the break
//2 move the if statment above the log and right under while
//3 next we type continue inside the if statement under if.
//4 the console log with the variable attached goes outside the if brackets along with the incement


// this example is saying while i is less than 10 it will loop untill it reaches the 5 where it will skip and continue to iteration 6 till it reaches the condition 10

//when m = 5 it will not increment but jump back to the condition but it will continue to loop creating an infiniate loop therfore we must put an icrement right below the while line. doing this means we will no long get 0 becasue we will increment first.
//now we have two increment points where .
//an xtra step in to include a console.log where where the loop is skipping right before continue
// let m = 0
// while (m < 10) {
//     m++
//     if (m == 5) {
//         console.log(`skipping number 5`)
//         continue;
//     }
//     console.log(`${m}`)
//
// }
// console.log("all done")
// do so no infinite loop

//practice

// Math.floor((Math.random()*50)+1) //creates a random number 1 -50
//syntax is Math.floor((Math.random()*Max)+Min)
// let random = Math.floor((Math.random()*50)+1)


//layout for continue
//1declare var
//2 while (condition)
//3 increment
//4 if statement
// console in if statement
//6 continue
//7 closing if bracket
//8consolelog var
//closing loop bracket

// console.log(`Random odd number to skip is: ${random}`)
// let i = 0
// while (i < 50){
//     i++
//     if (i === random) {
//         console.log(`Yikes im skipping ${random}`)
//         continue
//     }
//     console.log(`Only odd numbers: ${i}`)
// }


//Notes: best way to use break and ontinue is to first ake the numbers look like the example displayed do this before making them even or using break and continue.

//Thi example give me a list of 1-49 odd numbers with an selected random number
// let israndom = Math.floor((Math.random()*50)+1)
//
// console.log(`Random odd number to skip is: ${israndom}`)
// for (let i = 0; i < 50; i++) {
//     if (i % 2 !== 0) {
//         console.log(`Here is the odd number ${i}`)
//     }
//
// }

//Using same example but with continue
//we should add the continue under the if statement line
//move the console.log to right after the if statement clsing bracket
// Now do a second if satment under the


//eachb time you choose to use cotinue and break create another if statment

// let israndom = Math.floor((Math.random()*100)+1)
//
// console.log(`Random odd number to skip is: ${israndom}`)
//
// for (let i = 1; i < 99; i++) {
//     if (i % 2 === 0) {
//         //skip the even numbers
//         continue;
//     }
//
//     if (israndom === i) {
//         console.log(`Yikes skipping number: ${i}`)
//     } else {
//         console.log(`Here is the odd number ${i}`)
//     }
//
//     if (i === 55) {     // could also say if 1 > 39
//         break;
//     }
//
// }


//*****************************************Youtube Practice

//--------------------------For Loop
// has 3 parts the
// initalizaer
// the condition
// final expression
//and the actual code lies in the curly braces

//first thing after creating a loop is console.log the value of i
//the loop begins with condition and stops when the condition no longer applies
//can also declare the variable out side the for loop but still must include it in the loop, just not declaring

// for (let i=0;i<=10;i++ ) {
// console.log(i) //considered the code block
// }

//Example: For loop example with an array
// Create array of 5 colors and use a 'for loop' to iterate over each color with a statement. [color] is my fav color
// in this example so beasue its 4 colors its like saying colors < 4. and will loop until it reaches ll 4 colors.

// const colors = ['red', 'blue', 'green', 'orange']
// for (let color = 0; color < colors.length; color++) {
//     console.log(`${colors[color]} is my fav color`);
// }
//-------------------------While and Do While

//While loop will repeat a block of code if condition rmains true
//also requires the 3 elements th initalizr, the condition and the final expression
//diference between while and for loop are the initializer is written before and outside the loop and the final expression is included inside the braces. only the conditio is inside the parenthesis

// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }

//Example
//so in this example the .lenght would be 4
//the (`${}`) are considered temporal literals which allows us to catenate and use the array which is th name of arry followed by box brackets with the declard variale inside.
//the way we access values in an arrya is use the array name followed by square brakets and inside the brckets are the index of each which we know is 4. so if we wanted to access the the color
//but in this example were not hardcoding the numbers becasue we want to loop through the indexes.
// const colors = ['red', 'blue', 'green', 'orange'] // now to log these values to the console we console.log
//
// let color = 0
// while (color < colors.length) {
//     console.log(`${colors[color]}`)  //[] goes by 0 starting at 0 so if we wanted to access green we would insert 2
//     color++
// }

//------------------------------Do While
//only differnce from while is that the code will run at least once before condition is tested. so even if condition is false the the code will run one time then stops.
// do loop say: do this (run code) while condition is true

//Note the general rule of thumb on wwhen to use each of the 3 loops is: Use the for loop when we know ahead of time how many loops or iterations are required
// we use the while or do while loop when th number of iterations is not known ahead fo time.
// for example if we know how many indexes are in array we should use the for loop
//while loop example is if we need to loop a piece of code based off user input. so because we dont know ahead of time
// let i = 0;
// do {
//     console.log(`The number is ${i}`)
//     i++
//
// } while (i <= 10)

//Example
//logging mph of a car from 0-100 in increments of 10
// let mph = 0
// while (mph <= 100) {
//     console.log(`The speed of the sports car is: ${mph} MPH`)
//     mph = mph += 10 // in this step we must increment in stages of 10 so we do declared variable + 10
// }

//Example2
//create 2 variables a=1 b=10 use the right loop to print out 1-10 exeuting the code at least once

// let a = 1
// let b = 10
// do{
//     console.log(a)
//     a++
// } while (a <= b)


//  --------------------------Nested Loops

//Everytime the outer loop runs you will do an entire cycyle of the in nested loop
//where a loop is run inside another loop
//

//in this example the outer loop will run once with 0 and the entire nested loop will run all iterations untill conditions are met.

// for (let i = 0; i < 5; i++) {
//     console.log(`The current value of i is: ${i}.`)
//     for (let j = 0; j < 5; j++) {
//         console.log(`j: ${j}`)
//     }
// }

//Nested loop creating a multiplication table
// for (let i = 0; i < 10; i++) {
//         console.log(`${i} I value`)
//     for (let j =0; j < 11; j++) {
//         console.log(`${i} x ${j} = ${i * j}`)
//     }
//     console.log(`-----------------------`) // creates a border between the for loop and nested loop
// }

// loop
// store inventory example





//empty string answer
//You need to assign message the empty string value because you are trying to concatenate it in the for loop. message += something is the same as message = message + something. In this case, if you didn't assign a string value to message, you would be trying to concatenate an undefined variable with a string.
// x = ""
// x = x + "Hello "
// x = x + "World"
// console.log(x); //Will print out "Hello World"

// Javascript handles different 'types' of values differently.
//
//     If you were to have for example console.log(3 + 3), the output would be 6.
//
// If you console.log('the ' + 'dog') the output would be "the dog".
//
//     So what happens in this case: console.log('the' + 3)?
//
//     Since it is impossible to add a string to a number, it is assumed, that the number should be converted to a string, and the output is "the3".
//
//     Ok, so what about this case: console.log('' + 1 + 2)? The same logic is applied, and the result is "12". So an empty string forces Javascript to interpret the operator + as string concatenation (joining strings), rather than numerical addition.
//
//     Finally, and importantly, concatenating undefined would result in NaN, so it is important that you don't just declare your variable, but that you set it to an empty string ''.



////////////////////////////////////////



// let countstring = "Welcome to the Doghouse"
//
// for(let x =6; x<=5;x++){
//     console.log("counter: " + countString.charAt(x));
// }

// for (let i = 1; i <= 9; i++) {
//     let output = '';
//     for (let j = 0; j < i; j++) {
//         output += i;
//     }
//     console.log(output);
// }



//--Nested //in this example the i iteration will go to 1 then then the x goes to 5 then i goes to 2 and x loops to 5
// let num = prompt("something number")
//
// for(let i =0; i<=num;i++){
//     for (let x =0; x<=5;x++) {
//         console.log("iteration i" + i + "iteration j" + i)
//         for(let x = i; x<=5; x++){
//             console.log("iteration x: " +  x)
//         }
//     }
//  }


// let y =0
// do{
//     console.log ("y " + y)
//     y++
// }while(y<=5)

//



//Exercise
// function showMultiplicationTable () {
//     console.log()
// }

// for is there more to go through
// do and while = do i keep going
// for loo is essentiall for numbers



//**While Loops basic looping construct that will execute as long as condition are met.
//syntax:
//while(condition ){
//body
//}

// let count = 0
// while(count <= 5) {
//     console.log("count is: " + count)
//     count++
// }
//
// do{
//     console.log("the number is  " + count)
//     count++
//     while (count <=5)
// }
//dowhile examples**************


// let userGuess = 0;
// let randomNumber = Math.floor(Math.random() *3) +1;
//
// do{
//     userGuess = parseInt(prompt("Guess a number 1 -3"))
// } while(userGuess !== randomNumber);
//
// console.log("user:" + userGuess)
// console.log("random number: " + randomNumber)
// console.log("yay")

// let word = "boo"
//
// while (false) {
//     console.log("will you see me);
// }
// do {
//     console.log("do while will you see me");
// } while (false);

// while check condition first
// dowhile runs code before it checks condition
//using break will stop a infinite loop
//cmd w also closes a loop





// let i = 0;
// while (i < 10) {
//     console.log("while loop iteration #"+ i)
//     i++
// }
//
// let x = 10;
// while (x <= 10){
//     console.log("while loop iteration number 2. # " + x)
//     x++;
// }

//****Do While Loop
//only different from a while is because the condition is evaluated at the end of loop instead of the beginning.

// do while run the code at least once. could be used in like a number guessing game.


// syntax
// do {
//    //body of code
// }

//example
// let v = 5
// do {
//     console.log("while loop iteration # " + v)
//     v++
// } while (v <= 10);

//With loops its better to console log  first with loop name before incrementing

//above
//***************************For Loop
//used for

//**For Loop
//Syntax:
//for () {
// }

//for (/*initialization*/; /*condition*/; /*increment*/) {
// body
//}

// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }

//first expression is called once before the first loop iteration starts and allows for initialization of loop variables

//The second expression is a condition that will decide if the loop should start/continue. It is called before each loop iteration. In the example, the loop will run as long as i is less than the number 10

//The third expression allows for code that should be executed at the end of each loop iteration. Most often, the incrementing of loop counters takes place here

// the first and third expressions are optional which looks like this
//var i = 0;
// // DONT DO THIS
// for (; i < 10;) {
//     console.log('for loop iteration #' + i);
//     i++;
// }

// for (var = i; i > 10; i++) {
//
// }

// for (var i = 0; i <= 10; i++) {
//     console.log("for loop iteration # " + i)
// }
// // can alos be written as
// let x = 0;
//
// console.log("same as first for loop just written different")
//
// for (; x <= 10;) {
//     console.log("another loop iteration # " + x);
//     x++
// }
//
// console.log("best way to write loop")
//
// for (let q = 0; q <= 6; q++) {
//     console.log("for loop iteration v2 # " + q)
// }

//Break keyword used to break a loop and iteration is immediatly halted.
// when using break in loops put it under the console log within the for loop.
// let numberToSpot = 5
// for (var i = 1; i < 20; i++) {
//     console.log("loop counter is # " + i);
// if (i === numberToSpot) {
//     console.log("Where the loop stops: break")
//     break;
// }
// }
//
//break helps stop the loop and kicks you out of the loop
//continue helps you skip over some work and makes the loop start from the next
// Contimnue Example with foor loop
//continue is only for loops


//example says if number = 3 it skips it and continues to 4
// for (let num =0 ; num <=5; num++) {
//     if (num === 3) {
//         continue
//     }
//     console.log("number" + num)
// }
// console.log("For loop has been continued")

//could also use or

// for (let num =0 ; num <=5; num++) {
//     if (num === 3 || num ===1) {
//         continue
//     }
//     console.log("number" + num)
// }
// console.log("For loop has been continued")

//example while loop with continue
// let num = 0
// while(num <=5) {
//     if (num === 3){
//     num++
//     continue
//     }
//     console.log("number " + num)  //with the second increment it will continue to loop
//     num++                           //always use to increments with while
// }



//loop example stated to loop a number less than 20 but to stop at 5 because we received a break
//to continue after a break is used to skip to the next loop without completeing the current loop
//use key continue.

//example
//in this example we used the modulus to only get even numbers so i % 2 !== 0
// for (var i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//      console.log("Here is the even number " + i)
// // }   }
//

