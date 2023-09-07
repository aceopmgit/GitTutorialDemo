const btn=document.getElementById('btn')
btn.addEventListener('click',submitDetails)
const itemlist=document.getElementById('items');
itemlist.addEventListener('click',editDetails)

function submitDetails(e){
    e.preventDefault();

//Creating li Element
    const li=document.createElement('li');

//Creating Span Element for Amoount,Description,Category
    const sAmount=document.createElement('span')
    const sDescription=document.createElement('span')
    const sCategory=document.createElement('span');

//Adding Class to Li
    li.className='list-group-item';

//Getting input Values entered by user
    const Amount=document.getElementById('eAmount').value
    const Description=document.getElementById('desc').value
    const Category=document.getElementById('category').value

 //Adding text node to span elements   
    sAmount.appendChild(document.createTextNode(Amount))
    sDescription.appendChild(document.createTextNode(Description))
    sCategory.appendChild(document.createTextNode(Category));

//Adding Class to Span elements
    sAmount.className='Amount'
    sDescription.className='Description'
    sCategory.className='Category'

//Adding span elements to li    
    li.append(sAmount," ",sDescription," ",sCategory);

//Creating Edit Button and adding class and Text Node to it
    const editbtn=document.createElement('button');
    editbtn.className='btn btn-sm float-rignt edit'
    editbtn.appendChild(document.createTextNode("Edit Expense"))

//Creating Delete Button and adding class and Text Node to it
    const deletebtn=document.createElement('button')
    deletebtn.className='btn btn-sm float-rignt delete'
    deletebtn.appendChild(document.createTextNode("Delete Expense"))

//Adding Edit and Delete Button to li
    li.appendChild(deletebtn)
    li.appendChild(editbtn)
    
//Appending li to ul 
    itemlist.appendChild(li)

//Creating object to store details
    const details={
        amount:Amount,
        desc:Description,
        category:Category
    }

//Adding details to local Storage    
    localStorage.setItem(details.desc,JSON.stringify(details))




}

function editDetails(e){

//Code for Delete Button    
    if(e.target.classList.contains('delete')){
        let li=e.target.parentElement;
        itemlist.removeChild(li);

        li=e.target.parentElement.getElementsByClassName('Description')[0].textContent
        localStorage.removeItem(li)
    }

//Code for Edit Button
    if(e.target.classList.contains('edit')){

    //Getting span element sDescription using its class name
        let li=e.target.parentElement.getElementsByClassName('Description')[0].textContent
        
    //getting data from local storage using li which stores description as key    
        let details=JSON.parse(localStorage.getItem(li))
    //removing data from local storage with key li    
        localStorage.removeItem(li)
    //Removing li element on which edit button is clicked
        let rli=e.target.parentElement
        itemlist.removeChild(rli);

    //placing the datils back into input
    document.getElementById('eAmount').value=details.amount
    document.getElementById('desc').value=details.desc     
    document.getElementById('category').value=details.category     


    }
    



}