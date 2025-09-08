//Scoping basically refers to the scope in which a particular variable or other things are defined so that we can access them and also modify them it can ===> global scope or local scope 
//Sets of curly braces essentially define a scope


//Here the function sayHi act as a oneWay door ie we can see what is outside of it (ie global scope can be accessed) but from outside we cannot see the inside of the function 

// The inner and the outter scope can have the same name of variable and this will not connflict as these are defined within diffrent scopes 

function sayHi(name){
  let result= "Hi " +name+a
 
  console.log(result);
}
let a=1
let result= "Anushka"
sayHi(result)


//THING TO REMEBER ---------->
//we can use variable from outter scope to the inner scope that is inside the function as we have a=1 outside the function sayHi scope but we are able to access it in our inner scope as well 
//            BUT 
//The reverse of thiss does not work thhe same as when we try to access the variable from the inner or local scope to outter scope for that scope we get an error 

//NESTED SCOPES

let c=3
{
  let a=1
  {
    let b=2
    //gives 1 2 and 3 since we are in the most inner scope thats why we are able to access the things inside our current scope inside the scope and also outside that 
    console.log(a)
    console.log(b)
    console.log(c)
  }
}