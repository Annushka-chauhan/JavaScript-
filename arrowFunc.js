function sum(a,b){
  return a+b
}
console.log(sum(1,2))

//In arrow function we dont use the word as function but create a variable and then have a = sign to assign them to something (parameters)
// followed by an arrow to perform task with these parameters

//IN ARROW FUNCTION if we have a single parameter then the parenthesis around it is optional 

//IF we have just one return statement in an arraow function then we can simply return it without making use of parenthesis and return word

//These Arrow Function makes us create small function and easy to understand funtions

let sumArrow = (a,b) => {
  return a+b
}

console.log(sumArrow(2,6))


//we can also pass an arraw function to another function exactly the same as passing passing function as argument

let giveName = (name)=>{
  return name
}
console.log(giveName("Anni"))

//Simplified 
let displayHi = val=>"Hi "+val

console.log(displayHi("Ria"))

//Why arrow functions => for passing functions to other functions write much less code
function func(x, callback){
  callback(x)
}
func(10, variable=>{
  console.log(variable)
})