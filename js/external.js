

/*
console.log("Hey! Im external JS")

console.log("Heres another test")

let cohort = "Fenir"

alert("Hey there, " + cohort);
prompt("Did you have a good lunch");
confirm("Are you sure")
*/
/*
console.log("Complete Exercise")


alert("Welcome to my Website")
let favcolor = prompt("What is you favorite color")
let coloranswer = confirm("Great " + favcolor + " is my favorite color as well!! ")

Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.




 */
console.log("Questions 1")

let LM = prompt("How many days would you like to rent the Little Mermaid")
let BB = prompt("How many days would you like to rent the Brother Bear")
let HERC = prompt("How many days would you like to rent the Hercules")
let PPD = 3

let LMtotal  = (LM * PPD)
let BBtotal  = (BB * PPD)
let HERCtotal = (HERC * PPD)

let Overalltotal= LMtotal + BBtotal + HERCtotal


alert("Total cost for all movies is: " + Overalltotal)


