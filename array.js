const a= [1,2,3,4,5,6,7,8,9,10]
console.log(a);
//to get length 
console.log(a.length)
//to access the elements are done by index based 
console.log(a[1])//gives 2nd element 
//to push an element to the array 
a.push(11)
// the array can be of any datatype string bolean number etc ie let
a.push("Hi")
//we can also add an array to the existing array
a.push("Hi, Hello")


//This is the nested or array of array 
const b= [
  ["Hi" ,"Hello"],
  [1,2]
]
console.log(b)
console.log(b[0]) //get the first element of the array ie the array itself [hi, hello]
console.log(b[0][0])//we get hi each index has their own index as well which we can access


//ASSIGNMENT --->
//Create an array with the first 5 letters of alphabet and then print out the middle element in the array (ie c)
const arr =['a','b','c','d','e']
console.log(arr[2])


const arr2=[
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15]
]
//print 4,9 and 11
console.log(arr2[0][3])
console.log(arr2[1][4])
console.log(arr2[2][0])