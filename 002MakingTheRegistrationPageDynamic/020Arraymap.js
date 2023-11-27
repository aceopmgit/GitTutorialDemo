let a=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

let b=a.map(function(element,index,array){
  if(element===" "){
    return 'empty string'
  }
  return element
})

//OR
/*
let c=a.map(function(element,index,array){
  if(element===" "){
    return a[index]='empty string'
  }
  return element
})
*/


console.log(b)