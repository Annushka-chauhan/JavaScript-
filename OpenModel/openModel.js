/*TODO 2. Select the foloowing elements with the folloeing IDs 
  *modal
  *open-model-btn
  *close-model-btn
   *BONUS: overlay
*/
const modal=document.querySelector('#modal')

const openModelBtn= document.querySelector('#open-model-btn')
const closeModelBtn= document.querySelector('#close-modal-btn')
const overLay=document.querySelector('#overlay')

//TODO 3: Create a click event listener for the open modal btn that adds the class "open" to the modal
//BONUS: Also add the class "open" to the overlay
openModelBtn.addEventListener('click', ()=>{
  //Add the class open to the model
  modal.classList.add("open")
  overLay.classList.add("open")
})

//TODO 4: Create a click event listener for the close-model-btn that removes the class "open" from the modal
//BONUS: Also remove the class "open" from the overlay
closeModelBtn.addEventListener('click',()=>{
 closeModal()
})

//BONUS: Adda click event listener to the overlay that removes the class "open" from the model and the overlay
overLay.addEventListener('click',()=>{
  closeModal()
})

function closeModal(){
  modal.classList.remove("open")
  overLay.classList.remove("open")
}