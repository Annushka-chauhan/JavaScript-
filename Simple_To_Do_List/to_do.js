//1. Select All elements
const form= document.querySelector('#new-item-form')
const list =document.querySelector('#list')
const input=document.querySelector('#item-input')
//2. When i submit the foem add  a new element
form.addEventListener('submit',e=>{
  e.preventDefault()

  //1. Create a new item
  const item = document.createElement("div")
  //for creating this ==>
  // <div class=​"list-item">​gfhtr​</div>​
  item.innerText=input.value 
  item.classList.add("list-item")
  console.log(item)
  //2. Add that item to the list 
  list.appendChild(item)
  //3. Clear input
  input.value =" "
  //4. Setup event listener to delete item when clicked
  list.addEventListener('click',() =>{
    item.remove()
  })
} )

