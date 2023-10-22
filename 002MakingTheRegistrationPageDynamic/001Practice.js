const posts=[
    {title:"post one",body:"This is post one"},
    {title:"post two",body:"This is post two"}
]
function getPost(){
    setTimeout(()=>{
        let output="";
        posts.forEach((element,index,array)=>{
            output+=`<li>${element.title}</li>`

        })
        document.body.innerHTML=output;

    },1000)
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();

    },2000)
}

createPost({title:"post three",body:"This is post three"})
createPost({title:"post four",body:"This is post four"})
createPost({title:"post five",body:"This is post five"},getPost)



