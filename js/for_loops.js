"use strict"
//****Question 2

// function showMultiplicationTable(num) {
//     for (let x = 1; x <= 10; x++) {
//         console.log(x * num)
//     }
// }
// showMultiplicationTable(7)


//****Question 3
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


// for (let  x= 1; x <= 10; x++) {
//     let randomNumber = Math.floor(Math.random() * (200-20) +20);
//     if (randomNumber % 2 !== 0) {
//         console.log(`${randomNumber} is odd.`)
//     } else {
//         console.log(`${randomNumber} is even.`)
//     }
//
// }



// ****Question 4
//Create a for loop that uses console.log to create output shown.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


let linebreak = " ";
for(let i = 1; i <= 9; i++){

    for(let x= 1; x  <= i; x++){
        linebreak += i ; //allows me to concat ito the loop
    }
   linebreak += "\n"; // allows for complete iteration inner loop
}
console.log(linebreak);

//*****Question 5
for (let i = 100; i >= 0; i -= 5 ) {
     console.log(`Table List ${i}`)
}





