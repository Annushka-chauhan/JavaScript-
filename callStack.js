// to identify error and some of debugging function while making use or working with functions
function doStuff(a,b, name){
  print(sum(a,b))
  print(sayHi(name))
}

function print(variable){
  console.log(variable)
}
function sum(a,b){
  return a+b;
}
function sayHi(name){
  return "Hi "+name
}
doStuff(1,2, "Annu")