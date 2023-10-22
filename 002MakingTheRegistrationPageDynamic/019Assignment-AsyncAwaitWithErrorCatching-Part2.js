console.log('person1:shows ticket')
console.log("person2:shows ticket")

function promiseWifeBringsTicket(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let value=true;
            if(value){
                resolve('ticket')
            }
            else{
                reject('Forgot Ticket')
            }
            
        },3000)
    })

}
function getpopcorn(){
    return new Promise((resolve,reject)=>{
        let value=true
        if(value){
            resolve('Popcorn')
        }
        else{
            reject("Popcorn Not Availaible")
        }
        
    })
}

function addButter(){
    return new Promise((resolve,reject)=>{
        let value=true
        if(value){
            resolve('Butter')
        }
        else{
            reject("Butter Not Availaible")
        }
        
    })

}

function showsTicket(){
    return new Promise((resolve,reject)=>{
        resolve('Ticket')
    })
}

const premovie=async()=>{
    

    try{
    let ticket=await promiseWifeBringsTicket()
    console.log(`wife:I have the ${ticket}s`)
    console.log('husband:we should go in')
    console.log('wife:no I am hungry')

    let popcorn=await getpopcorn();
    console.log(`husband: I got some ${popcorn}`)
    console.log('husband:we should go in')
    console.log('wife:I need butter on my popcorn')

    let butter=await addButter();
    console.log(`husband: I got some ${butter} on popcorn`)
    console.log('husband:Anything else darling ?')
    console.log(`wife:let's go we are getting late`)
    console.log(`husband:thank you for the reminder *grins*`)

    let show= await showsTicket();
    console.log(`person3:shows ${show}`); 

    }catch(err){
        console.log(err)
    } 
    
    
}

premovie()



console.log('person4:shows ticket')
console.log("person5:shows ticket")

