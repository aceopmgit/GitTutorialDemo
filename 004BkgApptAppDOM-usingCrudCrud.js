const button=document.getElementById('button')
button.addEventListener('click',submitUser)
const itemList=document.getElementById('items')
itemList.addEventListener('click',removeInfo)
let count=0

function submitUser(e){
    e.preventDefault()
    
        
    //getting input values
    const tName=document.getElementById('name').value
    const tEmail=document.getElementById('email').value
    const tPhone=document.getElementById('phone').value
     
    
    const details={
        Name:tName,
        Email:tEmail,
        Phone:tPhone

    }
    //Storing data to crudcrud
    
        axios.post('https://crudcrud.com/api/f3d02e64e3c345bf8b86e3bef1fce9f6/appointmentData',details)
    .then((res)=>{
        showData(res.data)
    }).catch((err)=>{console.error(err)})

    
    console.log(details);

    
    
    
    
}

function showData(obj){
    //Creating element li
    const li=document.createElement('li');
    //creating span element to store name,email,phone
    const spanName=document.createElement('span');
    const spanEmail=document.createElement('span');
    const spanPhone=document.createElement('span');
    const spanId=document.createElement('span')
    
    
    //Adding class to li
    li.className='list-group-item'

    //Second Method of combining input values
    //First method is in Item lister Dom    
    
    //Adding TextNode to li
    //li.appendChild(document.createTextNode(tName));
    //li.appendChild(document.createTextNode(" "+tEmail));
    //li.appendChild(document.createTextNode(" "+tPhone+" "));

    //Adding TextNode to span elements
    spanName.appendChild(document.createTextNode(obj.Name));
    spanEmail.appendChild(document.createTextNode(obj.Email));
    spanPhone.appendChild(document.createTextNode(obj.Phone));
    spanId.appendChild(document.createTextNode(obj._id))

    //Adding class to span element
    spanName.className='name'
    spanEmail.className='email'
    spanPhone.className='phone'


    //Making the id invisible
    spanId.className='id'
    spanId.style.display='none'
    

    //Adding span Element to li Node
    li.append(spanName," ",spanEmail," ",spanPhone," ",spanId);

    //creating delete button element
    const delbtn=document.createElement('button');
    //creating edit button element
    const editbtn=document.createElement('button');
    
    //adding class to delete button
    delbtn.className='btn btn-sm float-right delete'
    delbtn.style.backgroundColor='Tomato'

    //Adding class and style to Edit Button
    editbtn.className='btn btn-sm float-right edit'
    editbtn.style.backgroundColor='#ADD8E6'
    

    //Adding textNode to delete button
    delbtn.appendChild(document.createTextNode('Delete'));

    //adding text node to Edit button
    editbtn.appendChild(document.createTextNode('Edit'));

    //Adding delete button to li
    li.appendChild(delbtn);

    //Adding edit button to li
    li.appendChild(editbtn)

    //Adding li to itemList
    itemList.appendChild(li);


}
//Code for showing data on screen when page is refreshed
window.addEventListener("DOMContentLoaded",()=>{
    const data=axios.get("https://crudcrud.com/api/f3d02e64e3c345bf8b86e3bef1fce9f6/appointmentData")
         .then((res)=>{
           // console.log(res);
           console.log(res)
            for(let i=0;i<res.data.length;i++){
                showData(res.data[i])
            }
         })
         .catch((err)=>{
            console.error(err)
         })
        console.log(data)  //this will not give data inside 'data' but will print promise.
        //the data inside can only be printed inside .then because axios.get is an asynchronos call 
        //which returns a promise and console.log() is a synchronos call and thus gets printed before promise gets fullfilled
})



function removeInfo(e){
     
    //code for delete button
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure ?')){
            let li=e.target.parentElement;
            itemList.removeChild(li)

            //console.log(li)
            ///itemList.removeChild(li);
        }
        const li=e.target.parentElement.getElementsByClassName('id')[0].textContent;
        //removing item from local storage using key
        console.log(li)
        axios.delete(`https://crudcrud.com/api/f3d02e64e3c345bf8b86e3bef1fce9f6/appointmentData/${li}`)
        .then().catch((err)=>console.error(err))
        //localStorage.removeItem(li);
    }
    // Code For Edit Button
    if(e.target.classList.contains('edit')){
        let id=e.target.parentElement.getElementsByClassName('id')[0].textContent
        let li=e.target.parentElement;
        itemList.removeChild(li);

        document.getElementById('name').value=e.target.parentElement.getElementsByClassName('name')[0].textContent
        document.getElementById('email').value=e.target.parentElement.getElementsByClassName('email')[0].textContent
        document.getElementById('phone').value=e.target.parentElement.getElementsByClassName('phone')[0].textContent

        axios.delete(`https://crudcrud.com/api/f3d02e64e3c345bf8b86e3bef1fce9f6/appointmentData/${id}`)
        .then().catch((err)=>console.error(err))



        /*
        count=1
        

        button.addEventListener('click',reSubmitUser)

        function reSubmitUser(e){
            e.preventDefault()
            axios.put(`https://crudcrud.com/api/f3d02e64e3c345bf8b86e3bef1fce9f6/appointmentData/${id}`,{
            Name:document.getElementById('name').value,
            Email:document.getElementById('email').value,
            Phone:document.getElementById('phone').value
        })
        
          .then((res)=>{showData(res.data)})
          .catch((err)=>{console.error(err)})
          count=0;
        }



        
        axios.patch(`https://crudcrud.com/api/7e6285a2be5249bb93067d4d474f77d6/appointmentData/${id}`,{
            Name:e.target.parentElement.getElementsByClassName('name')[0].textContent,
            Email:e.target.parentElement.getElementsByClassName('email')[0].textContent,
            Phone:e.target.parentElement.getElementsByClassName('phone')[0].textContent
        })
          .then((res)=>{showData(res.data)})
          .catch((err)=>{console.error(err)})

        
        let li=e.target.parentElement.getElementsByClassName('id')[0].textContent;
        //let editinfo=JSON.parse(localStorage.getItem(li));
        //console.log(editinfo.Name)

        //localStorage.removeItem(li);
        let li1=e.target.parentElement;
        itemList.removeChild(li1);
        
        document.getElementById('name').value=editinfo.Name
        document.getElementById('email').value=editinfo.Email
        document.getElementById('phone').value=editinfo.Phone


    const tName=document.getElementById('name').value
    const tEmail=document.getElementById('email').value
    const tPhone=document.getElementById('phone').value
        */
        


    }


    
    //let delemail=document.getElementById('email').value
}


//this form some functionalities not added  watch the video from 1:30:00 --> https://www.youtube.com/watch?v=hdI2bqOjy3c


