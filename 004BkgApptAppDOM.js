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
     
    //combinning the input values
    const combineT=tName+" "+tEmail+" "+tPhone
    
    //Adding TextNode to li
    li.appendChild(document.createTextNode(combineT));

    //creating button element
    const delbtn=document.createElement('button');
    
    //adding class to button
    delbtn.className='btn btn-sm float-right delete'
    delbtn.style.backgroundColor='Tomato'

    //Adding textNode
    delbtn.appendChild(document.createTextNode('Delete'));

    //Adding delete button to li
    li.appendChild(delbtn);

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
    //converting text content of item on which delete button is clicked into an anrray to get key i.e.,email
    let li=e.target.parentElement.textContent.split(' ')[1];
    //removing item from local storage using key
    localStorage.removeItem(li);
    
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure ?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
    //let delemail=document.getElementById('email').value
}


//this form some functionalities not added  watch the video from 1:30:00 --> https://www.youtube.com/watch?v=hdI2bqOjy3c


