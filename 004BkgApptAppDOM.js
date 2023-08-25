const button=document.getElementById('button')
button.addEventListener('click',submitUser)
let itemList=document.getElementById('items')

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
     
    //combinning the input values
    const combineT=tName+" "+tEmail+" "+tPhone
    
    //Adding TextNode to li
    li.appendChild(document.createTextNode(combineT));

    //Adding li to itemList
    itemList.appendChild(li);

    const details={
        Name:tName,
        Email:tEmail,
        Phone:tPhone

    }
    const details_serialised=JSON.stringify(details)
    localStorage.setItem(tEmail,details_serialised);
    console.log(localStorage)

}


//this form some functionalities not added  watch the video from 1:30:00 --> https://www.youtube.com/watch?v=hdI2bqOjy3c


