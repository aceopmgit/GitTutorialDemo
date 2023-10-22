console.log('person1:shows ticket')
console.log("person2:shows ticket")

const premovie=async()=>{
    const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })

    const getpopcorn=new Promise((resolve,reject)=>{
        resolve('Popcorn')
    })

    const addButter=new Promise((resolve,reject)=>{
        resolve('Butter')
    })

    //let ticket

    try{
    let ticket=await promiseWifeBringsTicket
    console.log(`wife:I have the ${ticket}s`)
    console.log('husband:we should go in')
    console.log('wife:no I am hungry')

    let popcorn=await getpopcorn;
    console.log(`husband: I got some ${popcorn}`)
    console.log('husband:we should go in')
    console.log('wife:I need butter on my popcorn')

    let butter=await addButter;
    console.log(`husband: I got some ${butter} on popcorn`)
    console.log('husband:Anything else darling ?')
    console.log(`wife:let's go we are getting late`)
    console.log(`husband:thank you for the reminder *grins*`)


    
    }catch(e){
        ticket='sad face'
    }

    
    

    return ticket;
}

premovie().then((m)=>{
    console.log(`person3:shows ${m}`)
})



console.log('person4:shows ticket')
console.log("person5:shows ticket")

