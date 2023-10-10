/*QUESTION 1

console.log(a)
console.log(b);
let a =5;
var b =6;
console.log(b);

//Output line3=ReferenceError: Cannot access 'a' before initialization
*/

//Question 2
//What is the difference between type error vs syntax error vs reference error.Give Examples of when you can encounter each one of them.


/*QUESTION 3

console.log(a);
var a = 5;
console.log(b) //we havent initialized b, Guess the output

//Output ReferenceError: b is not defined at
*/


/*QUESTION 4

let a = 5;
var b = 6;
console.log(this.b);
console.log(window.b)
console.log(window.a)
console.log(this.a);

//Output 6 6 undefined undefined
*/


/*QUESTION 5

let a =5;
let a = 6;

Output =>SyntaxError
*/

/*QUESSTION 6

let a =6;
const b
b=100;

Output =>SyntaxError
*/


/*QUESSTION 7
const a=10;
a=20
console.log(a)

//Output =>TypeError: Assignment to constant variable.
*/


/*Take any sample object and write the code to iterate through object. 
const details={
    fName:'Sachin',
    lName:'Kumar',
    Age:24
}

//Using for in loop
for(let i in details){
    console.log(details[i])
}

//Using forEach loop
let keys=Object.keys(details)
keys.forEach(k=>{
    console.log(details[k])
})
*/

