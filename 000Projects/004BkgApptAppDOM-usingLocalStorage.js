const button=document.getElementById('button')
button.addEventListener('click',submitUser)
const itemList=document.getElementById('items')
itemList.addEventListener('click',removeInfo)
function submitUser(e){
    e.preventDefault()

    //Creating element li
    const li=document.createElement('li');
    //creating span element to store name,email,phone
    const spanName=document.createElement('span');
    const spanEmail=document.createElement('span');
    const spanPhone=document.createElement('span');


    //Adding class to li
    li.className='list-group-item'
    
    //getting input values
    const tName=document.getElementById('name').value
    const tEmail=document.getElementById('email').value
    const tPhone=document.getElementById('phone').value
     
    //Second Method of combining input values
    //First method is in Item lister Dom    

    //Adding TextNode to li
    //li.appendChild(document.createTextNode(tName));
    //li.appendChild(document.createTextNode(" "+tEmail));
    //li.appendChild(document.createTextNode(" "+tPhone+" "));

    //Adding TextNode to span elements
    spanName.appendChild(document.createTextNode(tName));
    spanEmail.appendChild(document.createTextNode(tEmail));
    spanPhone.appendChild(document.createTextNode(tPhone));

    //Adding class to span element
    spanName.className='name'
    spanEmail.className='email'
    spanPhone.className='phone'

    //Adding span Element to li Node
    li.append(spanName," ",spanEmail," ",spanPhone);

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
    const details={
        Name:tName,
        Email:tEmail,
        Phone:tPhone

    }

    localStorage.setItem(details.Email,JSON.stringify(details));
    //console.log(localStorage)



}

function removeInfo(e){

    //code for delete button
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure ?')){
            let li=e.target.parentElement;
            itemList.removeChild(li)

            console.log(li)
            ///itemList.removeChild(li);
        }
        const li=e.target.parentElement.getElementsByClassName('email')[0].textContent;
        //removing item from local storage using key
        console.log(li)
        localStorage.removeItem(li);
    }
    // Code For Edit Button
    if(e.target.classList.contains('edit')){
        let li=e.target.parentElement.getElementsByClassName('email')[0].textContent;
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