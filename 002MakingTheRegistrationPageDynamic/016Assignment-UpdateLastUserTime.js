const user={
    name:"Vishal Kumar",
    lastActivityTime:new Date()
}


let posts=[];

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve()
        },1000)
    })
}

function updateLastUserTime(){
    return new Promise((resolve,reject)=>{
        let prev=user.lastActivityTime.getTime();
        let curr=new Date().getTime()
        let updated=curr-prev;
        user.lastActivityTime=curr;
        resolve(updated);
    })

}

function getPost(updatedAgo){
    setTimeout(()=>{
        let output="";
        posts.forEach((ele,index)=>{
            output+=`<li>${ele.title}</li>`
        })
        output+=`<li>Last Updated :${Math.floor(updatedAgo/1000)} seconds ago</li>`

        document.body.innerHTML=output;
    },0)
}

createPost({title:"Post one"})
createPost({title:"Post two"})
createPost({title:"Post three"})
createPost({title:"Post four"}).then(()=>{
    updateLastUserTime().then((updatedAgo)=>{
        getPost(updatedAgo)
    })
})


//Not perfectly working;


