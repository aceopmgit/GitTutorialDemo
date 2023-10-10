const posts=[];
const user={
    username:'Suresh',
    lastActivityTime:new Date()
}

function updateLastUserActivityTime(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivityTime=new Date().getTime()
            resolve(user.lastActivityTime)


        },1000)
        
    })

}

function createPost(post){
    return new Promise((resolve,reject)=>{
        posts.push(post)
        resolve(posts)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        posts.pop()
        resolve(posts)

    })
}
console.log(user.lastActivityTime)
createPost({title:'post1',body:'This is post 1'})
createPost({title:'post2',body:'This is post 2'})
createPost({title:'post3',body:'This is post 3'})
createPost({title:'post4',body:'This is post 4'})
Promise.all([createPost({title:'post5',body:'This is post 6'}),updateLastUserActivityTime(),deletePost()]).then((values)=>{
    console.log(values)
})