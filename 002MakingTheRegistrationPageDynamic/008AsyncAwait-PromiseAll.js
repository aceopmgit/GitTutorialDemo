async function planTrip(){
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
    
    let[a,b,c,d]=await Promise.all([buycar,planATrip,reachManali,goToFamaousMountain])
    console.log(`${a}`)
    console.log(`${b}`)
    console.log(`${c}`)
    console.log(`${d}`)
    
}
planTrip()