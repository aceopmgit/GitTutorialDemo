/*Ques1

var a = 2;
var c = 2;
function b(){
var x = 2;
var c = 4
console.log(c)
}


console.log(a);
console.log(this.a);
console.log(this.c)
console.log(this.x)
console.log(window.a)
console.log(window.x)
console.log(b());

//Output
line12=2
line13=2
line14=2
line15=undefined
line16=2
line17=undefined
line18=4,undefined because function b() is not returning anything
*/

/*Ques 2
const x=()=>{
    let b=10;
    
    const y=()=>{
      let c=15;
      
      const z=()=>{
        let d=20
        console.log(a,b,c,d)
      }
      z();
    }
    y();
  }
  let a=5
  x()

  //Output 5 10 15 20
  //this works in the following way
  //once x() is called it goes to line 31 and then after assingning value to b and once y() is declared it
  //goes to line 34 and then this keep continuing till we reach z() as no function inside it is called
  //Inside z() d is assigned 20 and to it tries to access the variable a,b,c which are not inside it.So it goes
  //to its lexical environment of its parent i.e.,y
  //there it gets access to c but to find a,b it goes to lexical environment of its parent ie.,x
  //here it finds b but to find a it goes to its lexical environment of its parent i.e., global execution context
  //there it finds a and thus prints 5 10 15 20
  //if it didn't find a in GEC then it would have gone to its lexical environment which points to null as there
  //is no parent of GEC and thus will give error
  //This whole process of findind the required variable is called SCOPE CHAIN  

*/

/*Ques 3
let x=()=>{
    console.log(a)
    var  a=15
    
    let y=()=>{
        console.log(a)
        console.log(window.a)
        console.log(this.a)
    }
    y();
}
var a=80
x()

//Output line65=undefined because a is redeclared inside x and in phase 1 undefined is assigned to it and 
//before its value is assigned to it line 66 it is printed i.e undefined
//Output line69= 15 due to not finding a in y and going to its lexical environment of its parent and finding it there
//output line70=80 because window.a point to a window object in global execution context
//Output line71=80 because this.a points to window object when it is not called by an object
*/


    

    