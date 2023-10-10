/*const promise1=Promise.resolve('Hello World')
const promise2=10
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'GoodBye')
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
})
*/
const buycar=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Buy a Car')
        },5000)

    })


const planATrip=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Lets go to Manali')

        },2000)
    })


const reachManali=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Reached Manali')
        },1000)
    })


const goToFamaousMountain=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Reached Mountain')
        },2000)
    })

Promise.all([buycar,planATrip,reachManali,goToFamaousMountain]).then((value)=>{
    console.log(value)
})

