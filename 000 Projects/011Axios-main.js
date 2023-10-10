//AXIOS GlOBALS
axios.defaults.headers.common['x-Auth-Token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'


// GET REQUEST
function getTodos() {
  
  /*First way 
  axios({      //this returns promise
    method:'get',
    url:'https://jsonplaceholder.typicode.com/todos' ,  //To limit no of data shown add ?_limit=5 after todos 
    params:{//this places a limit on no of data shown to five
      _limit:5
    }
  }).then((res)=>{
    showOutput(res)
  }).catch((err)=>{
    console.error(err);
  })
  */

  //Second way--This is shorter way
  axios
       .get('https://jsonplaceholder.typicode.com/todos?_limit=5',{timeout: 5000})
       .then(res =>showOutput(res))
       .catch(err=>console.error(err))

}

// POST REQUEST
function addTodo() {
  /*First Way ----Long way
  axios({
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
    data:{
      title:'New Todo',
      completed:false
    }
  })
    .then(res =>showOutput(res))
    .catch(err=>console.error(err))
  */
 //Second way
 axios.post('https://jsonplaceholder.typicode.com/todos',{
  title:'New Todo',
  completed:false
 })
   .then(res=>showOutput(res))
   .catch(err=>console.error(err))
}

// PUT/PATCH REQUEST
function updateTodo() {
//if we make any kind of update or delete we need to know which todo we are deling with
//we need to include the id if we need to put request of patch or delete in the URL
// go to site https://jsonplaceholder.typicode.com/ and in Routes we can see the id we need to put
//.put resplaces th entire resourse
//here it removes the userId
/*
axios.put('https://jsonplaceholder.typicode.com/todos/1',{
  title:'Updated  Todo',
  completed:true
 })
   .then(res=>showOutput(res))
   .catch(err=>console.error(err))
   */
//.patch replaces only what we have specified which is here title and completed
axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
  title:'Updated  Todo',
  completed:true
 })
   .then(res=>showOutput(res))
   .catch(err=>console.error(err))
}

// DELETE REQUEST
function removeTodo() {
  //we deleting the data at the url and since we deleted the data it returns just an empty object
  //Every backend every API can be different this one just returns an empty object

  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
   .then(res=>showOutput(res))
   .catch(err=>console.error(err))
}

// SIMULTANEOUS DATA
function getData() {
  axios
       .all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
       ])/*First way
       .then((res)=>{
        console.log(res[0]);
        console.log(res[1]);
        //here we have access to both todos and posts through rest[0] and rest[1]
        showOutput(res[1]);
       }).catch((error)=>{
        console.error(error)
       })
       */
      //Second Way
      //here we have access to both todos and posts in spread
      .then(axios.spread((todos,posts)=> showOutput(todos)))
      .catch((error)=>{
        console.error(error)
       })
}

// CUSTOM HEADERS
function customHeaders() {
  const  config={
    headers:{
      'Content-Type':'application/json',
      Authorization:'sometoken'
    }
  }

  axios
       .post('https://jsonplaceholder.typicode.com/todos',{
        title:'New Todo',
        completed:false
      },config)      
       .then(res=>showOutput(res))
       .catch(err=>console.error(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options={
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
    data:{
      title:'Hello World'
    },
    transformResponse:axios.defaults.transformResponse.concat(data=>{
      data.title=data.title.toUpperCase();
      return data;
    })
  }

  axios(options).then(res=>showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios
       .get('https://jsonplaceholder.typicode.com/todoss',{
        //validateStatus:function(status){
        //return status<500;//reject only if greater or equal to 500i.e.,server error}
      })
       .then(res=>showOutput(res))
       .catch(err=>{
        if(err.response){
          //server responded with a status other than 200 range
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)

          if(err.response.status===404){
            alert('Error:Page Not Found')
          }
          else if(err.request){
            //Request was made but no response
            console.error(err.request)
          }
          else{
            console.error(err.message)
          }
        }
       })
}

// CANCEL TOKEN
function cancelToken() {
  const source=axios.CancelToken.source();


  axios
  .get('https://jsonplaceholder.typicode.com/todos',{
    cancelToken:source.token
  })
  .then(res=>showOutput(res))
  .catch(thrown=>{
    if(axios.isCancel(thrown)){
      console.log('Request cancelled',thrown.message)
    }
  })

  if(true){
    source.cancel('Request cancelled !')
  }
  
}

// INTERCEPTING REQUESTS & RESPONSES
//This will give info about the operations we do 
axios.interceptors.request.use(
  config =>{
    console.log(`${config.method.toUpperCase()} requset sent to ${config.url} at ${new Date().getTime()}`);
    return config;
  },error=>{
    return Promise.reject(error);
  }
);


// AXIOS INSTANCES
const axiosInstance=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})
//axiosInstance.get('/comments').then(res=>showOutput(res))

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
