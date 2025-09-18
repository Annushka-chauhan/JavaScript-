//By making use of querySelector we can select the elements by making use of absolutly anything 

//Query Selectors make use of css selecting way of eleemts in the order to get elements (ie div, classes, input)

//Selecting the data Attribute
const dataAttributeElement= document.querySelector('[data-test]') //Selecting the attribute by css selecting way '[]'
//if i do querySelectorAll then the array of elements is obtained to us having its length and elements
console.log(dataAttributeElement)

//Selecting the query class which are here more than one 
const divWithClasses= document.querySelector('.div-class')
console.log(divWithClasses) //This gives the very first element having the class name as div-class 
//as querySelector selects only one element and it selects the very first elemment that is defined 


//to get all of them use QUERYSELECTORALL
const allDivClasses= document.querySelectorAll('.div-class')
//convert to array for more methods to be applied
Array.from(allDivClasses)
//since we are provided with the nodeList and we can use forEach on it there is no intruption
allDivClasses.forEach(div => (div.style.color = "red"))
dataAttributeElement.style.color="Pink"
//gives an array or HTML collection of elements 
console.log(allDivClasses)


//Selecting the input field
const input= document.querySelector('input')
console.log(input)
