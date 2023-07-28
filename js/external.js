let LM = prompt("How many days would you like to rent the Little Mermaid?")
let BB = prompt("How many days would you like to rent the Brother Bear?")
let HERC = prompt("How many days would you like to rent the Hercules?")
let PPD = 3

let LMtotal  = (LM * PPD)
let BBtotal  = (BB * PPD)
let HERCtotal = (HERC * PPD)

let OverAllTotal= LMtotal + BBtotal + HERCtotal


alert("Total cost for all movies rented will be: $" + OverAllTotal.toFixed(2))

