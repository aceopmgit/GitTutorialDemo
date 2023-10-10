/*function x(){
  this.val=5
  setTimeout(function() {
    this.val++
    console.log(this.val)
  }, 10);
}
x()
*/

/*
function x(){
  this.val=5
  setTimeout(()=>{
    this.val++
    console.log(this.val)
  })
}
x()
*/

/*
function x(){
  console.log(arguments[0])
}
x(1,2,3)
*/

/*
x=(...a)=>{
    console.log(a[0])
  }
  x(1,2,3)
  */

  
  /*
  //this.name="Sachin"
  let me={
    name:'Anand',
    age:25,
    
    thisInArrow:()=>{
      console.log('my name is '+this.name)
    },
    
    thisInRegular(){
      console.log('my name is '+this.name)
    },
    printDetails(){
        const findName=()=>{
            console.log('my name is '+this.name)

        }

        const findAge=()=>{
            console.log('my age is '+this.age)
        }
        findName()
        findAge()
    }
  }
  me.thisInArrow()
  me.thisInRegular()
  me.printDetails

  Output
  with this.name commented
  my name is undefined
  my name is Anand
  my name is Anand
  my age is 25

  without this.name commented
  my name is Sachin
  my name is Anand
  my name is Anand
  my age is 25

*/


/*Spread Operator
const arr1=[1,2,3]
const arr2=[5,6,7]
const arr=[...arr1,4,...arr2]
console.log(arr)

Output [1,2,3,4,5,6,7]
*/
