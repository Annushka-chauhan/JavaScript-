const a= "awefrwg"
console.log(parseInt(a)) // gives NaN ie not a number
console.log(parseInt(a) == NaN) //gives false as NaN is never equal to anything thats why insted the parseInt(a) gives NaN but its not equal to NaN.

//TO CORRECT THIS

const b= parseInt("fegewvrwb")
console.log(b) // gives NaN
console.group(a === NaN) //provides false as nothing is never equal to NaN
//USE A BUILTIN FUNCN 
console.log(isNaN(b))//it will return true if our variable is NaN 