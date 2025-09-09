//types of datatypes are 
//number 
//string 
//boolean 
//null
//undefined
//How do we convert from one tyoe to another ?

//1. CONVERT STRING TO NUMBER ---->
//explicit conversion 
let str="1"
//parseInt converts the string to whole number
//parseFloat converts the string to floating number
console.log( typeof parseInt(str)) // gives number
// console.log(str)
// console.log(typeof str)


//2. CONVERT NUMBER TO STRING (Explicit)
let num =1.34 
console.log( typeof a.toString())

//IMPLICIT TYPE CONVERSION (js convert them both into the same type )
let num2= 1
const hi = "Hello"
//whenever we have + with strings and numbers the js alwayys convert the number into string
console.log(hi+num2) //string (ie Hello1) 
console.log(hi-num2) //gives NaN as hello is not a number and we cannot convert it into number 

//but but if we have "3" in hi it is converted to number and 3-1 we have got 2