//OBJECT is the collection of information/ variables all related to each other somewhere 

//these are information of a person which are not related with each other 
//to relate them as of a person we use objects
let name="Anushka"
const age =19
const favNum=3

//CREATING OBJECT 
//store as key and value 
let person={ 
  name: "Anushka",
  age: 25, 
  favNum: 3,
  //addinng function to the object
  sayHi: function(){
    console.log("Hi")
  },
  //this is preferred leave off the function keyword and just have the name of function 
  sayHi2(){
    console.log("Henlo")
  },

  property: "value"
}
console.log(person)
//give value of the name property (key name)here Anushka
console.log(person.name)

//console is an object it has a function called log inside of it

person.sayHi() //gives hi 
person.sayHi2()


//ASSIGNMET ---->
//Create an object called car with the properties 
//1. Make
//2. Model
//3. isUsed
//add a function called makeNoise which logs out Vroom

let car={
  make: 1922,
  model: "Scorpio",
  isUsed: false,
  makeNoise(){
    console.log("Vroom...Vroom")
  },

}
car.makeNoise()
//2nd way to access value by making use of the property name 
property="make"
console.log(car[property])



// the placing of objects inside other objects is allowed
let person2={
  name2: "Jiya",
  hobbies: ["programming", "Music"],
  //the address is itself an object 
  address: {
    street: "782bypass",
    city: "Meerut",
  }
}

console.log(person2.address.street)
console.log(person2.hobbies[0])


//ASSIGNMENT 2--->
//Create an object called book with the following properties 
//1. Title-string
//2. Author-object
//2.a Author- object with the propertied name and age 

let book= {
    bookTitle: "Kacha Ghada",
    Author: {
      AuthorName: "Shilpa Rao",
      AuthorAge: "32"
    }
}
console.log(book)

book.bookTitle="Great Book"
console.log(book.bookTitle)// we get the new name of the book this can be applied to other properties as well 

//whenever we try too access the property which is not present in an object undefined is procided 