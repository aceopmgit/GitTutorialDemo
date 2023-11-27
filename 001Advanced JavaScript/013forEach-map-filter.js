const todo=[
    {id:1,text:"Take our Trash",isCompleted:true},
    {id:2,text:"Metting with Boss",isCompleted:true},
    {id:3,text:"Dentist Appointment",isCompleted:false}]
    
    //converting todo to JSON format
    const todoJson=JSON.stringify(todo);
    //console.log(todoJson)
    
    /*
    for(let x of todo){
      console.log(x)
    }
    */
    
    /*for Each 
    todo.forEach((element,index)=>{
      //todo[index].id=todo[index].id+1
      console.log(element.id)
    })
    */
    /*map
    todotext=todo.map((element)=>{
      return element.text;
    })
    console.log(todotext)
    */
    
    const todoCompleted=todo.filter((x)=>{
      return x.isCompleted===false
    })
    console.log(todoCompleted)