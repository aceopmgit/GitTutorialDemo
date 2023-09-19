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

    let ticket
        try{
            ticket=await promiseWifeBringsTicket;
        } catch(e){
            ticket='sad face'

        }
    
    
    let[popcorn,butter,coldrink]=await Promise.all([getPopcorn,getButter,getColdDrink])
    console.log(`${popcorn},${butter},${coldrink}`)
    


    return ticket

};

premovie().then((m)=>console.log(`shows ${m}`));

console.log('person3:shows ticket')
console.log('person4:shows ticket')
