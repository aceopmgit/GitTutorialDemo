/* Question 1

  getName()
  console.log(x)
  console.log(getName())
  var x=7
  var getName=()=>{
    console.log("Namaste Javascript")
  }

  */

  /*Question 2

  console.log(a)
  var a=5;
  var printName=(name)=>{
    console.log(name)
  }
  console.log(printName("Sachin"))

////////////Output 
undefined
Sachin 
undefined because printname function does not return anything
*/

/*Question 3
var a = 3;



function printName(name){

console.log(name)

}



printName("YAVTECH");

console.log(a)

//Output line41=Yavtech
//output line43=3
*/

/*Ques 4
printName("YAVTECH");

console.log(a);



var a = 3;



function printName(name){

console.log(name)

}
//Output line50=YAVTECH
//Output line52=undefined
*/

/*Ques 5

console.log(printName());

console.log(a);



var a = 3;



var printName = (name) => {

console.log(name)

}
//Output =Uncaught TypeError: printName is not a function
    at 002HoistinginJavascript.js:71:13

*/

/*Ques 6
console.log(printName);

console.log(a);



var a = 3;



var printName = function (name) {

console.log(name)

}

//Output line92 =undefined because arrow function here is treated as variable and we are trying to access it befor it is intialised 
//output line 94=undefined because we are tring to access a before it is intialised in line98
*/

//For Each use case
/*
let arr=[1,2,3,4,5]
arr.forEach(function(element,index,array){
  array[index]=element+100
})

console.log(arr)
*/
