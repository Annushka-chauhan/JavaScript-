//  const test=document.querySelector('[data-test]')
//  //this dataset is giving to us the javascript object of all of our data attributes

//  //data-test="1234"
//  //it does is takes the data portion delets it and has test left (in dataset) which is the key of the object having value 1234

//  console.log(test.dataset)
 
//  //We can also access the individual property of our dataset
//  console.log(test.dataset.test) //1234
//  console.log(test.dataset.testTwo)

//  //We can also change the values of our data attributes
//  test.dataset.test="5555"

//CREATING A COUNTER 
const buttons= document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      let currentCLicks= button.dataset.clicks
      currentCLicks++
      button.dataset.clicks=currentCLicks
      console.log(`Button clicked ${currentCLicks} times`)
  })
})