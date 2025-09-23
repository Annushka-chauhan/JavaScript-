 const userIsLoggedIn =true
// console.log("Please log in")
if(userIsLoggedIn){
   console.log("This is true User Logged In")

}
else {
  console.log("This is false Please Login")
}

if(2+2 === 4){
  console.log("Correct Arithmatic")
}
//If type convert the value to true or false from 0/1
//For example
if(0){
  console.log("True")
}
else {
  console.log("False")
}
//False is printed as whenever we convert the 0 its boolean to true/false we get false as 0=> false  "" => false 


//MULTIPLE IF STATEMENTS MERGED TOGETHER
const totalPrice =5
if(totalPrice == null){
  console.log("There is no total Price")
}else if(totalPrice< 10){
  console.log("This is pretty Cheap")
}else if(totalPrice<50){
  console.log("This is not too Bad")
}else {
  console.log("This is Expensive")
}
//Only one condition out of the if or else if is runned at a time from top to bottom and if one condition is matched then all other conditions from top to bottom is ignored


//If i want to print each of the statement (meanss does not want the condition to break through) then just use multiple ifs without any else statement, this will print each one of the statement on the console



//Assignment 
//Create a variable that contains an array 
//Using an if statement with else if blocks We want to check the length of the array
//if it is empty print out "Empty"
//if it has less than 5 elements print out "Small"
//if it has less than 10 elements print out medium 
//otherwise print out "Large"
const Arr = [1, 4, 5]
const n =Arr.length
if(n==null){
  console.log("Empty Array")
}else if(n<5){
  console.log("The array has small number of elements")
}else if(n>10){
  console.log("Array has medium number of elements")
}else {
  console.log("The array has a large size")
}