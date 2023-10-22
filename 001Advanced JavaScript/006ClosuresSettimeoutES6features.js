/*QUESTION 1

console.log('a');
console.log('b');

setTimeout(()=> console.log('c'), 1000);

console.log('d');

Output=>abdc
*/


/*QUESTION 2 

console.log('a');
console.log('b');

setTimeout(()=> console.log('c'), 1000);

setTimeout(()=> console.log('d'), 0);

console.log('e');

Output=>abedc

*/


/*QUESTION 3

Write down the 10 new features introduced in ES6 along with what they mean and where they could be used

*/


/*QUESTION 4

What is array.map function . Array.map is used a lot in javascript (Please understand the use case properly) ---> 
99% interviewers will ask you this

///////////////////////////////////Use example of forEach and map
/*Method1 forEach
const arr=[1,2,3,4,5].forEach(x)
const x=function(element,index,array){
  console.log('array['+index+']='+element)
 
}
const arr=[1,2,3,4,5].forEach(x)
console.log(arr)
*/


/*Method2 forEach
const arr=[1,2,3,4,5].forEach(x);
function x(element,index,array){
  console.log('array['+index+']='+element)
}
*/


/*Method3 forEach
const arr=[1,2,3,4,5]
console.log(arr)
const newarr=arr.forEach((element,index,array)=>{
  console.log(element+'=='+index+'=='+array)
  arr[index]=element+10;
  return arr[index]
})
console.log(newarr)
*/

/*map in javaScript
const arr=[1,2,3,4,5]
console.log(arr)
let newarr=arr.map((element,index,array)=>{
  console.log(element+'=='+index+'=='+array)
  arr[index]=element+10;
  return arr[index]
})

console.log(newarr)
the only difference between map and forEach in javaScript is that forEach returns
undefined while map returns the new array*/ 

/*
4a)

var arr = [1, 2,3,5]
var newArr = arr.forEach((item, i ) => {
console.log(item + 'index' + i)
return item + i
})

console.log(newArr)

//Output =>1index0 2index1 3index2 5index3 undefined


4b)

var arr = [1, 2,3,5]

var newArr = arr.map((item, i ) => {
console.log(item + 'index' + i)
return item + i
})

console.log(newArr)

//Output =>1index0 2index1 3index2 5index3 [1,3,5,8]


4c) What is the main difference between forEach and map function? [Favourite Interview Question]


*/





