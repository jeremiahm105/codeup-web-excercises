
alert("Hello from Javascript")
alert("Welcome to my Website")
let favcolor = prompt("What is you favorite color")
let coloranswer = confirm("Great " + favcolor + " is my favorite color as well!! ")



//Question 1

let LM = prompt("How many days would you like to rent the Little Mermaid")
let BB = prompt("How many days would you like to rent the Brother Bear")
let HERC = prompt("How many days would you like to rent the Hercules")
let PPD = 3

let LMtotal  = (LM * PPD)
let BBtotal  = (BB * PPD)
let HERCtotal = (HERC * PPD)

let Overalltotal= LMtotal + BBtotal + HERCtotal


alert("Total cost for all movies is: " + Overalltotal)

//Question 2

alert("You worked at Google Amazon and Facebook this week")

let googlerate = Number(prompt("Google rate"))
let googlehrs = Number(prompt("How many hours did you work at Google"))

let amazonrate= Number(prompt("amazon rate"))
let amazonhrs = Number(prompt("How many hours did you work at Amazon"))

let facebookrate = Number(prompt("facebook rate"))
let facebookhrs = Number(prompt("How many hours did you work at Facebook"))

let googletotal = (googlerate * googlehrs)
let amazontotal = (amazonrate * amazonhrs)
let facebooktotal = (facebookrate * facebookhrs)

let totalpay = googletotal + amazontotal + facebooktotal

alert("Total hours worked is : " + totalpay)

//Question 3

let classOpen = confirm("Is the class occupancy open?")
let clearSchedule = confirm("Does the class fit your schedule?")

if (classOpen && clearSchedule) {
    alert("Congratulations! You have been accepted into the class !")
} else {
    alert("Unfortunately, you have not met the requirements for this class.")
}
// Question 4

let moreThanTwo = confirm("Did you purchase at least two of our Award Winning Products?")
let offerNotExpired = confirm("Has the offer expired?")
let premium = confirm("Are you a premium member?")
if (moreThanTwo && offerNotExpired, offerNotExpired && premium) {
    alert("Congratulations! A product offer will be applied!")
} else {

}
    alert("Unfortunately a product offer can not be applied at this time")