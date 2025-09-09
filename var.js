//Originally when js was created var was the only way to create variables then later let and const are added (to create 2 ways to create variable)

//Because var works very strangly compared to how variables works in other programming language and very diffrent from how let and const works

//by using var we can redefine as well as redeclare 

var b=1
// var b=3 // gives 3 redeclare 
//b=7 // reassign gives 7
console.log(b)

//we have defined var in a scope but we are able to access it outside the scope as well ie everywhere(let doesnt allow this) 

//var breaks all the scoping role that are defined 

{
  var c=1 

}
console.log(c)


//can do hoisting 
//when we try to access d ie defined by the var keyword for the first console we have got undefined as initially the var d is undefined then we have reassigned it with 10 which we are making use of


var d= undefined
console.log(d);
var d=10
console.log(d)
