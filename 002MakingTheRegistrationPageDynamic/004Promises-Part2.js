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

buycar().then((msg1)=>{
    console.log(msg1)
    planATrip().then((msg2)=>{
        console.log(msg2)
        reachManali().then((msg3)=>{
            console.log(msg3)
            goToFamaousMountain().then((msg4)=>{
                console.log(msg4)
            })
        })
    })
})