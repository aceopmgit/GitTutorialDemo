/*Ques 1
function x(){
let a = 10;
function y(){
console.log(a);
}
y()
}

x();

Output
10
*/

/*Ques 2
function x(){
let a = 10;
function y(){
return a;
}
console.log(y());
}

x();

Output
10
*/

/*Ques 3
function x(){
let a = 10;
function y(){
console.log(a);
}
return y;
}

console.log( x());

//Output
f y(){
    console.log(a);
    }
 */

 /*Ques 4

function x(){
let a = 10;
function y(){
console.log(a);
}
return y;
}

const z = x() //this will store function y that is returned by x
console.log(z()); //this will call function y and print a i.e., 10 and undefined since y doesn't return anything

Output 
10 undefined

*/

/*Ques 5
function x(){
let a = 10;
function y(){
console.log(a);
}
a= 50;
return y;
}

const z = x()
console.log(z());

Output 
50 
undefined
*/




