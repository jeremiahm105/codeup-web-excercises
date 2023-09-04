// TO ADD ELEMENTS

// create var and set to element you want to create
//let body = document.body

// to add element to the body we append has two ways
//body.append("Hello World", " bye World") //--- allows you to append strings and appears on browser and also append elements and multiple things at one
//body.appendChild() // ------this does not work with the child version because it requires  node meaning you can only append elements like div and span or anchor tags

// to append an element much more common-- to create an element and place in a variable
//let div = document.createElement('div') // you then pass the element you want to create in qoutes
//after we create the element in var we must add it to our page
//body.append(div) //now it has been appended to the page and can be seen in js console

//to add text to div or page 2 ways
//div.innerText = "Hello World x2" //method 1 to provide inner text innerText only looks at css to see whats visible and prints it only. inner text actually displays your text exactly how it appears on your html
// div.textContent = "Hello World x4"//method 2 to create inner text textContent print out all the text and indentation

// TO MODIFY AN HTML INSIDE AN ELEMENT

//to render html inside of a div or any element use innerHTML
//this allows to to render to HTML directly form javascript buit is a security problem
//div.innerHTML = "<strong>Hello World</strong>"

// TO REMOVE ELEMENT FROM DOM
let body = document.body
let spanhey = document.querySelector("#hey")  //selctors are the id
let spanall = document.querySelector("#all")

// to remove the bye element do variable name .remove()
//spanall.remove() //automatically removes from the web page nothing else needs to be done *better*
// to add it again
//div.append(spanall) //and it reappears

//can also remove element from parent element name.removeChild() and pass in the child var name
//div.removeChild(spanhey)

// HOW TO MODIFY GET PROPERTIES ADD CLASSES TO ELEMENTS

//HOW TO MODIFY ATTRIBUTE OF ELEMENT use varname.getAttribute('') and pass the id you want to access and then console.log it
//console.log(spanall.getAttribute('id')); //now in js console it print out id selected
//console.log(spanhey.title) //you could also just use var name.id or method wanted id, title ect

// TO SET AN ATTRIBUTE VALUE
console.log(spanall.setAttribute('id', 'ABCDEFR')); //this now changes the id to the value we typed if you look in js console
// or i could jsut use the var name.id = "ABCDEFR"

// to remove element use variable name.removeAttribute)("id")

spanall.classList.add("new-class") //allows you to add a class by passing in () appears in js console
spanall.classList.remove("hi1")//removes a class
spanhey.classList.toggle("h13") //removes if exist or add it if not already there

// Directly Modifying style element directly allows you to modify any css property

//spanhey.style.color ="red"
spanhey.style.backgroundColor ="red"

Transverse the DOM with Broswer

//document.getElementById() is same as querySelector() except you need to use css when passing in elements . # for class and id
ease of use create a variable named after the element you are selecting
let parent = document.querySelector("#parent") //this means i am selecting an id element