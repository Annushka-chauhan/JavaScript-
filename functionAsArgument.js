//printVariable is the variable created having the function defination and it is the kind of function

function printVariable(variable){
  console.log(variable);
}
//here the printVariable function is mapped to the variable x and we are using x("hello World")to call that function that is printVariable with the parameter hello world

function func(x){
  //recalling the function 
  x("hello World")
}


func(printVariable)

//abovee
//this is what taht is called callback

function sumCallback(a, b, callback){
  //we provided the callback function argument as the sum of the two values a and b ie the result
 callback(a+b)
}
//handleSum reference to this function and also provided as an callback function ie recalled
function handleSum(sum){
  console.log(sum);
}
sumCallback(2,3, handleSum)




//ASSIGNMENT
// create a new function that takes two parameters
//1. name
//2. callback that prints out what we pass to it 
//(printName)
//take name and append "Hello" to the begining of the name (If i pass "Anushka "it will print "Hello Anushka")
function printName(variable){
  console.log(variable)
}
function appendName(name,callback){
  callback("Hello "+name)
}

//COMMON PROLEM : Whenever we pass a function to use it as a callback and to reference it also we dont use paranthesis and just use it by its name ie printName here
appendName("Anushka", printName)



//We have anonymous functions as well which are created without giving any name to them we can define it incide of our arguments as 


//appendName("Anushka" , function (variable){
// console.log(variable)
// })





