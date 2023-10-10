
function buycar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Buy a Car')
        },5000)

    })
}

function planATrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //reject('Error:Some Accident happen') /*code will stop here if uncomment it and comment line 15*/
            resolve('Lets go to Manali')

        },2000)
    })
}

function reachManali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Reached Manali')
        },1000)
    })
}

function goToFamaousMountain(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Reached Mountain')
        },2000)
    })

}

async function tripPlan(){
    try{
    const ms1=await buycar()
    console.log(ms1);
    const ms2=await planATrip()
    console.log(ms2);
    const ms3=await reachManali()
    console.log(ms3);
    const ms4=await goToFamaousMountain()
    console.log(ms4);
    }catch(err){
        console.log(err)
        
    }
}
tripPlan()