//Let is scope defined we cannot access a variable defined by let outside its scope 

//can reassign but cannot redeclare 

//hoisting cannot be done we firstly have to define the variable then work on it 

//Block specified 
{
  let f=4
  console.log(f)//works fine 
}
//console.log(f) //gives error accessed outside scope


let num =32
console.log(num)
num=40 // num can be reassign 
console.log(num)//works fine

//let num =56 gives error cannot be redeclared using var


//console.log(name2) //gives error cannot be used until declared
 let name2="Jiya"
console.log(name2)