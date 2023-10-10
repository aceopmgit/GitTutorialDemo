//Challenge 1: Promise Construtor
//vist this webpage to undestand it properly =>
// https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec

console.log(1)
console.log(2)

const pr=new Promise((resolve,reject)=>{
    console.log('3 Pending')
    setTimeout(()=>{
        resolve('3 resolved')
    },3000)
})

pr.then((msg)=>{
    console.log(msg)

})

console.log(4)
console.log(5)