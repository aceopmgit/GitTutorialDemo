console.log('person1:shows ticket')
console.log('person2:shows ticket')

const premovie=async ()=> {
    const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    
    })

    const getPopcorn=new Promise((resolve,reject)=>{resolve(`popcorn`)});
    const getButter=new Promise((resolve,reject)=>{resolve(`butter`)});
    const getColdDrink=new Promise((resolve,reject)=>{resolve(`Cold drink`)})

    let ticket=await promiseWifeBringsTicket;
    console.log(`wife:I got the ${ticket}`)
    console.log('husband:we should go in')
    console.log('wife:no I am hungary')
    
    let popcorn=await getPopcorn;
    console.log(`husband:I got some ${popcorn}`)
    console.log('husband:we should go in')
    console.log('wife:no I need butter on my popcorn')

    let butter=await getButter;
    console.log(`husband:I got some ${butter} on popcorn`)
    console.log('husband:we should go in')
    console.log('wife:no I need Cold Drink')

    let coldDrink=await getColdDrink;
    console.log(`husband:I got the ${coldDrink} `)
    console.log(`husband:anything else darling`)
    console.log(`wife:let's go we are getting late`)
    console.log(`husband:thank you for the reminder *grins*`)
    


    return ticket

};

premovie().then((m)=>console.log(`shows ${m}`));

console.log('person3:shows ticket')
console.log('person4:shows ticket')
