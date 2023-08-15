"use strict"
// Hashes and Pluses
// * Create a function named hashPlusCount that returns the number of hashes and pluses in a string.
// *
// * Examples
// *
// * hashPlusCount("###+") ➞ [3, 1]
// * hashPlusCount("##+++#") ➞ [3, 3]
// * hashPlusCount("#+++#+#++#") ➞ [4, 6]
// * hashPlusCount("") ➞ [0, 0]
// *
// * Notes
// * Return [0, 0] for an empty string.
// * Return in the order of [hash, plus].
// */

//at the end convert to an array using splice from a string to an array splice()

// Sure, here's a JavaScript function named hashPlusCount that takes a string as input and returns an object containing the counts of hashes ('#') and pluses ('+') in the input string:

function hashPlusCount(string) {
    let hash = 0
    let plus = 0

    for (let i =0; i < string.length; i++ ) {
        if(string[i]) === "#"
        return hash++
    } else if(string[i]=== "+") {
        return plus++
    }
         return {hash, plus};

}

console.log(hashPlusCount(0));

