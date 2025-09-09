
//The Below example is an Closure as we are using a function in which the variable used is a ie outside the scope of the function 

//The function uses the most recent assigned value eg if we assign a=2 before print then 2 will be displayed on the screen

// let a=1
// function print(){
//   console.log(a)
// }
// //a=2
// print()

//Closures are mainly defined as functions inside of other functions

// we have inner scope which has access to variable2 and also has access to variable1 from the outter scope of the function (print)
let val=3
function printl(variable1){
   return function funcl(variable2){
    console.log(variable1)
    console.log(variable2)
    console.log(val)//gives 3 
  }
}

let b= printl(1) //b here is a new function since we are calling print function which is returning us a brand new function funcl ie stored in b 
b(2) //b is reffred to funcl having variable2 as 2 and then both are printed 
