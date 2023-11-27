/*
2) console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)

setTimeout(() => console.log('d'), 0)

console.log('e');



Challenge

Can you make the above code print in the following sequence using promises and async/await. Write the code and paste it here



Expected Output

a

b

c

d

e
*/

const promiseC=()=>{
    
    return new Promise((resolve,reject)=>{
      setTimeout(() =>{
         console.log('c')
         resolve()
      },3000)
      
    })
  }
  
  const promiseD=()=>{
  
    return new Promise((resolve,reject)=>{
      setTimeout(() =>{
         console.log('d')
         resolve()
      },0)
      
    })
  }
  
  let promise= async ()=>{
    try{
        console.log('a')
        console.log('b')
        await promiseC();
        await promiseD();
        console.log('e')
    }catch(err){
      console.log(err)
    }
  
  }
  promise()