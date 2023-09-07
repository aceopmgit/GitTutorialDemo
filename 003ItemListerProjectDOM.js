const form=document.getElementById('addForm');
const itemList=document.getElementById('items');
console.log(itemList)
const filter=document.getElementById('filter');

//Form Submit event
form.addEventListener('submit',addItem) // addItem function will run when button is submittted

//Delete Event
itemList.addEventListener('click',removeItem) //removeItem Function will be called on delete button click

//Filter Event
filter.addEventListener('keyup',filterItems)//filterItem function will be called from here

//Add Item
function addItem(e){
    e.preventDefault();

    const newItem=document.getElementById('item').value
    const newItem1=document.getElementById('item1').value;
    
    //Create Element Li on click
    const li=document.createElement('li');
    
    //Add ClassName
    li.className='list-group-item'

    //Add Text Node with Input values
    const res1=newItem+' '+newItem1
    li.appendChild(document.createTextNode(res1));

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

//Filter Items
function filterItems(e){
    //Converts Item to lowerCase so that we do not match lowercase to upperCase
    const text=e.target.value.toLowerCase();
    //get li elements from ItemList
    const items=itemList.getElementsByTagName('li')
    const desc=
    //convert to array
    
    Array.from(items).forEach(function(item){
        const itemName=item.firstChild.textContent;
        //console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
    
   /*
    for of method
    let a=Array.from(items);
   for(let i of a){
    const ItemName=i.firstChild.textContent
    console.log(ItemName)
   }
   */


}


