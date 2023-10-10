const posts=[
    {title:'Post one',body:'this is post one'},
    {title:'Post two',body:'this is post two'}
]

function getPosts(ele){
    setTimeout(()=>{
        let output=''
        posts.forEach((element,index,array)=>{
            output+=`<li>${element.title}</li>`;
        });
        console.log(ele)
        document.body.innerHTML=output;
        

    },1000)
}

function createPost(push,callback){
    setTimeout(()=>{
        posts.push(push)
        callback('sachin')
    },2000)
}

//getPosts()
createPost({title:'Post three',body:'this is post three'},getPosts);
