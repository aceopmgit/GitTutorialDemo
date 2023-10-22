console.log('person1:shows ticket')
console.log('person2:shows ticket')

const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)

})

const getPopcorn=promiseWifeBringsTicket.then((t)=>{
    console.log('wife:I got the ticket')
    console.log('husband:we should go in')
    console.log('wife:no I am hungry')
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    })
})

const getButter=getPopcorn.then((t)=>{
    console.log('husband:I got some Popcorn')
    console.log('husband:we should go in')
    console.log('wife:no I need butter on my popcorn')
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
    })
})
const getColdDrink=getButter.then((t)=>{
    console.log(`husband:I got some butter on popcorn`)
    console.log('husband:we should go in')
    console.log('wife:no I need Cold Drink')
    return new Promise((resolve,reject)=>{
        resolve(`${t} Cold Drink`)
    })
    

})

const theatreEntry=getColdDrink.then((t)=>{
    console.log(`husband:I got the coldDrink `)
    console.log(`husband:anything else darling`)
    console.log(`wife:let's go we are getting late`)
    console.log(`husband:thank you for the reminder *grins*`)
    console.log(`shows ticket`)
    console.log(`${t} Enters Theatre`)

})

console.log('person4:shows ticket')
console.log('person5:shows ticket')