const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
/*
create2ndPost().then(()=>{
    deletePost().then((dpost)=>{
        console.log(dpost.title)
        create3rPost().then(()=>{
            deletePost().then((dpost)=>{
                console.log(dpost.title)
                
                    deletePost().then((dpost)=>{
                        console.log(dpost.title);
                        deletePost().then().catch((err)=>{
                        console.log(err)
                    })
                    })
                
            }).catch((err)=>{
                console.log(err)
            })
        })
    }).catch((err)=>{
        console.log(err)
    })
})
*/

/*
create2ndPost().then(()=>{
    deletePost().then((dpost)=>{
        console.log(dpost.title)
        create3rPost().then(()=>{
            deletePost().then((dpost)=>{
                console.log(dpost.title)
                
                    deletePost().then((dpost)=>{
                        console.log(dpost.title)
                        deletePost().catch((err)=>{
                            console.log(err)
                        })
                    })
                
                
                
                
            })
        })
    })
})
*/


/*
//using async await

async function process(){
    try{
        await create2ndPost();
        let dpost2=await deletePost();
        console.log(dpost2.title);
        await create3rPost();
        let dpost3=await deletePost();
        console.log(dpost3.title);
        let dpost1=await deletePost();
        console.log(dpost1.title);
        await  deletePost();


    }
    catch(err){
        console.log(err)
    }
}
process()

*/
create2ndPost().then(function(){
  deletePost().then(function(dpost){
    console.log(dpost.title);
    create3rPost().then(function(){
      deletePost().then(function(dpost){
        console.log(dpost.title)
        deletePost().then(function(dpost){
          console.log(dpost.title);
          deletePost().catch(function(err){
            console.log(err)
          })
        })
        
      })
    })
  })
})



