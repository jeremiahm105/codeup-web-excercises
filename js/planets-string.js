"use strict"

//(function(){


// let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
// let planetsArray;

/**
 * TODO:
 * Convert planetsString to an array, and save it in a variable named
 * planetsArray.
 * console.log planetsArray to check your work
 */

// Splitting will take a string and turn it into an array. String splitting uses a delimiter to decide where the splitting should occur. To split a string, call the split method passing the delimiter as a parameter. For example:

// console.log(planetsString)
// planetsArray = planetsString.split('|')
// console.log(planetsArray);
//an empty string would just return eaxh individual charater as string
/**
 * TODO:
 * Create a string with <br> tags between each planet. console.log() your
 * results. Why might this be useful?
 *
 * BONUS:
 * Create another string that would display your planets in an undordered
 * list. You will need an opening AND closing <ul> tags around the entire
 * string, and <li> tags around each planet.
 */

// Joining will take an array and convert it to a string with the delimiter of your choice. The join method is available on an array and it takes a delimiter as a parameter. Let's look at the first example again, but in reverse.

let planetsArray = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn","Uranus","Neptune"]
let planetsString;

planetsString = planetsArray.join('<br>')  //
console.log(planetsString);

let planetString += "</ul>"

for (let i = 0; i < planetsArray.length; i++) {
    planets
}

