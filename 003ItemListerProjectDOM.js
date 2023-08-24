const form=document.getElementById('addForm');
const itemList=document.getElementById('items');
//console.log(itemList)

//Form Submit event
form.addEventListener('submit',addItem) // addItem function will run when button is submittted

//Delete Event
itemList.addEventListener('click',removeItem) //removeItem Function will be called on delete button click

//Add Item
function addItem(e){
    e.preventDefault();

    const newItem=document.getElementById('item').value
    
    //Create Element Li on click
    const li=document.createElement('li');
    
    //Add ClassName
    li.className='list-group-item'

    //Add Text Node with Input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    const deletebtn=document.createElement('button');

    //Add Class to delete Button
    deletebtn.className="btn btn-danger btn-sm float-right delete"

    //Append Text Node
    deletebtn.appendChild(document.createTextNode('X'));

    //Append deleteButton to li
    li.appendChild(deletebtn);
    
    

    //create Edit button Element
    const editBtn=document.createElement('Button');
    editBtn.className='btn btn-sm  float-right info';
    editBtn.appendChild(document.createTextNode('Edit'));

    //add edit button to li
    li.appendChild(editBtn);

    //Append li to list
    itemList.appendChild(li);

    


}


//removeItem Function 
function removeItem(e){
    // we want it to function only when delete button is clicked so if condition is needed
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            const li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }

}


