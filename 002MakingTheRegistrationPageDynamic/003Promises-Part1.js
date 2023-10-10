const posts=[
    {title:'Post one',body:'this is post one'},
    {title:'Post two',body:'this is post two'}
]

function getPosts(){
    setTimeout(()=>{
        let output=''
        posts.forEach((element,index,array)=>{
            output+=`<li>${element.title}</li>`;
        });
        //console.log(ele)
        document.body.innerHTML=output;
        

    },1000)
}

function createPost(push){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(push)

            const error=false;
            if(!error){
                resolve()
            }
            else{
                reject('Error:Something went wrong')
            }
            
        },2000)

    })
    
}

//getPosts()
createPost({title:'Post three',body:'this is post three'},)
.then(getPosts)
.catch((err)=>{console.log(err)});
