//In js as we know everything goes from top to bottom that is first we declare and then use but 

//IN CASE OF FUNCTION : 
//we can use/ access the function before we are even defining it but this still works as below 
//          ||
//          ||      
//REASON-----> the reason is that before javascrioot runs the file from top to bottom it takes all the functions in our file and pretends that the functions are moved to the top of our file

//THIS IS WHAT HOISTING DONE TAKE ALL THE FUNCTION AND PUT THEM AT THE TOP OF THE FILE (so we can use them anywhere in our file no matter at top or bottom )

console.log(sum(10,2))
function sum(a,b){
  return a+b
}

//HOSTING DOESNOT WORK WITH ARROW FUNCTIONS
//         BECAUSE 
//A normal diffrence between arrow function and normal function is that arrow function are defined as variable and THE VARIABLES NEVER GET HOISTED 
//this works as the same way that the error iis provided when we use a variable which we use before declaring it
