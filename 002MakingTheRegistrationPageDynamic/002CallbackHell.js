function buycar(cb1,cb2,cb3){
    
        setTimeout(()=>{
            console.log('Buy a Car')
            cb1(cb2,cb3)
        },5000)

    
}

function planATrip(cb2,cb3){
    
        setTimeout(()=>{
            console.log('Lets go to Manali')
            cb2(cb3)

        },2000)
    
}

function reachManali(cb3){
        setTimeout(()=>{
            console.log('Reached Manali')
            cb3()
        },1000)
    
}

function goToFamaousMountain(){
        setTimeout(()=>{
            console.log('Reached Mountain')
        },2000)

}

buycar(planATrip,reachManali,goToFamaousMountain)