/*1)
var obj = {
val: 100
}

function fun(){
console.log(this.val)
}
fun()

Output
undefined
*/

/*2)
var obj = {
val: 100
}

function fun(){
console.log(this.val)
}
obj.fun()

Output 
TypeError
*/

/*3)
var obj = {
val: 100
}

function fun(){
console.log(this.val)
}
fun.call(obj)

Output
100
*/

/*4)
var obj = {
val: 100
}

function fun(a){
console.log(this.val + a)
}
fun.call(obj)

Output 
NaN(not an number)
*/

/*5)
var obj = {
val: 100
}

function fun(a){
console.log(this.val + a)
}

fun.call(obj, 3)

Output
103
*/

/*6)
var obj = {
val: 100
}

function fun(a, b , c){
console.log(this.val + a + b + c)
}
fun.call(obj, 3, 4, 5)

Output 112
*/

/*7)
var obj = {
val: 100
}

function fun(a, b , c){
console.log(a)
console.log(b)
console.log(c)
}
fun.call(obj, [3, 4, 5])

Output
[3,4,5]
undefined
undefined
*/

/*8)
var obj = {
val: 100
}

function fun(a, b , c){
console.log(this.val + a + b + c)
}
fun.apply(obj, 3, 4, 5)
 
Output 
Error
*/

/*9)
var obj = {
val: 100
}

function fun(a, b , c){
console.log(this.val + a + b + c)
}

const fun2 = fun.bind(obj)
fun2(1, 2,3)

Output
106
*/

/*10)
What are the differences between call apply and bind?
Bind returns a function with object attached to it
Call and apply invokes the function with the object and arguments
*/

//Understand it properly
var b=function xyz(x) {
  
    console.log(x)
    return function c() {
      console.log('hi')
    }
    }
    
    
    function a(){
      console.log('All')
      return 10
    }
    
    console.log(b(a()))










