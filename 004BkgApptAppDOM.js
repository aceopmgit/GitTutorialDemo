const button=document.getElementById('button')
button.addEventListener('click',submitUser)
const itemList=document.getElementById('items')
itemList.addEventListener('click',removeInfo)

function submitUser(e){
    e.preventDefault()
    
    //Creating element li
    const li=document.createElement('li');
    
    //Adding class to li
    li.className='list-group-item'
    
    //getting input values
    const tName=document.getElementById('name').value
    const tEmail=document.getElementById('email').value
    const tPhone=document.getElementById('phone').value
     
    //Second Method of combining input values
    //First method is in Item lister Dom    
    
    //Adding TextNode to li
    li.appendChild(document.createTextNode(tName));
    li.appendChild(document.createTextNode(" "+tEmail));
    li.appendChild(document.createTextNode(" "+tPhone+" "));

    //creating delete button element
    const delbtn=document.createElement('button');
    //creating edit button element
    const editbtn=document.createElement('button');
    
    //adding class to button
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

    const details={
        Name:tName,
        Email:tEmail,
        Phone:tPhone

    }
    const details_serialised=JSON.stringify(details)
    localStorage.setItem(tEmail,details_serialised);
    //console.log(localStorage)

    

}

function removeInfo(e){
        
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure ?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
        const li=e.target.parentElement.textContent.split(' ')[1];
        //removing item from local storage using key
        console.log(li)
        localStorage.removeItem(li);
    }
    // Code For Edit Button
    if(e.target.classList.contains('edit')){
        let li=e.target.parentElement.textContent.split(' ')[1];
        let editinfo=JSON.parse(localStorage.getItem(li));
        //console.log(editinfo.Name)

        localStorage.removeItem(li);
        let li1=e.target.parentElement;
        itemList.removeChild(li1);
        
        document.getElementById('name').value=editinfo.Name
        document.getElementById('email').value=editinfo.Email
        document.getElementById('phone').value=editinfo.Phone
        


    }


    
    //let delemail=document.getElementById('email').value
}


//this form some functionalities not added  watch the video from 1:30:00 --> https://www.youtube.com/watch?v=hdI2bqOjy3c


