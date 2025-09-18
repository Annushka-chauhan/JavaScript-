const btn =document.querySelector('[data-btn]')
const input= document.querySelector('[data-input-text]')
const form= document.querySelector('[data-form]')
//add an event listener to it this .addEventListener() => takes two properties: -
//1st is the name of the event we want to listen for
//2nd property is the function that i actually want to run every single time when this event happens
function printClick(){
  console.log("Clicked")
}
btn.addEventListener('click',printClick)
//We can add more than one event listner to an element and each of them works simultaneously
// btn.addEventListener('click',()=>{
//   console.log("Clicked2")
// })

//How to remove an event listener 
btn.removeEventListener('click', printClick )


//set up an event listener that checks every single time a character is typed inside the box


//1.Change Event:
// Fires only when the input loses focus (blur) after its value was changed.

//For text inputs, it won’t trigger until you click/tab away from the field.

//For checkboxes, radio buttons, and select dropdowns, it triggers immediately after a change in selection.
input.addEventListener('change', ()=>{
  console.log("Changed")
})


//2.Input Event
//Fires every time the value changes in real-time.

//Triggered as soon as the user types, deletes, or pastes into the field.

//Works immediately for text-based inputs (text, search, password, email, etc.).
input.addEventListener('input',()=>{
  console.log("Input Changed")
})
input.addEventListener('input', e =>{

  //Makes us check weather the input has a value or it does not have a value
  console.log(e.target.value==="")
})


//We have created a form and selected it and we need to check what it does when we select our form
form.addEventListener("submit", e=>{
  e.preventDefault()
  console.log("Submitted")
}) 


//ASSIGNMENT: 
//Add an anchor tag to the HTML and when it is clicked prevent the default and log something to the console
const link =document.querySelector('a')
link.addEventListener('click', e=>{
  e.preventDefault()
  console.log("We Have not reached to the Google but to the site where we want ")
})
//Other events (ie Property 1)
//mouseenter
//mouseleave
//mouseover
//focus => an focus is formedd ont that object whenever we tab on it
//blur=>when we have focus on an object and we do opposite of it blur is used that is opposite of focus(when we loose focus the blur event runs)
//resize(on Window)