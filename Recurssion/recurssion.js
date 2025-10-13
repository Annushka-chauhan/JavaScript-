//Recurssion means looping through things but do it inside of a function instead of a norml loop 
//Print numbers from 1 to 10

function printNumbers(number){
  if(number>10)return
  console.log(number)
  printNumbers(number+1)
  //stop
  console.log("Exiting function")
}
printNumbers(1)

//sum of numbers 
function sumNumberBelow(num){
  if(num<=0)return 0
  return num+sumNumberBelow(num-1)
}
console.log(sumNumberBelow(10))


const person={
  name: "Anu",
  friend: {
    name: "Joe",
    friend: {
      name: "Hoe",
    }
  }
}
function printNames(currentPerson){
  if(currentPerson==null)return
  console.log(currentPerson.name)
  printNames(currentPerson.friend)
}
printNames(person)