const grandParent =document.querySelector('#grand-parent')
//makes the div where grandParent is red in color
grandParent.style.color= "red"
//this dives html collection div 1 and 2 (ie parent 1 and parent 2)
console.log(grandParent.children)



//to get the first parent and make changes to
  const parentOne=grandParent.children[0]
 // const parentTwo=grandParent.children[1]
  parentOne.style.color="blue"
  
  //we want to go from parentOne to parentTwo
  const parentTwo=parentOne.nextElementSibling
  parentTwo.style.color="pink"
  
  //Now getting the actual children
  const childOne= parentOne.children[0]
  const childTwo= parentOne.children[1]
  childOne.style.color= "brown"


  //How to get the parent fromthe child (ie reverse) firsly provide an id to the child 
  const childOnee= document.querySelector('#child-one')
   const parentOnee = childOne.parentElement
   const grandParentt =parentOne.parentElement



  //To take it a step further we think of moving from child directly to the grand parent rather than first to parent and then grand parent

  //closest => instead of selecting the elements by its class/id or data name we can directly selects elements that are parents acc to the class/id or if two or more have same classes then acc to the closest
 const directGrandParent =childOnee.closest('.grand-parent')
 directGrandParent.style.color="green"

 //if we have provided the same class to the children(.child) and we want to select the children we follow through parent
 //const grandParent = document.querySelector('#grand-parent')
 //const children = grandParent.querySelectorAll('.child')
//  children.forEach(child => (child.style.color="red"))

  
  
  

