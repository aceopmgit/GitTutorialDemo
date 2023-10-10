const button=document.getElementById('button');
button.addEventListener('click',submitDetails);
const itemsRem=document.getElementById('itemsRem')
itemsRem.addEventListener('click',moveDetails)
const itemsDone=document.getElementById('itemsDone')

function submitDetails(e){
    e.preventDefault()

    
 //Getting input text   
    const name=document.getElementById('name').value;
    const desc=document.getElementById('desc').value;

    const res=name+ " "+desc;

//Creating span element and adding class to it
    const detail=document.createElement('span');
    detail.className='detail'

//Adding input text to span
    detail.appendChild(document.createTextNode(res))

    const li=document.createElement('li');
    li.className='list-group-item'

//Adding span element to li
    li.appendChild(detail)   

    
//Creating delete button and adding it to li
    const deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-small float-right delete'
    deletebtn.appendChild(document.createTextNode('x'))

    li.appendChild(deletebtn)

//Adding complete button and adding it to li
    const add=document.createElement('button');
    add.className='btn btn-primary btn-small float-right add'
    const tick="\u2713"
    add.appendChild(document.createTextNode(tick))
    li.appendChild(add)

    
    itemsRem.appendChild(li)

}
function moveDetails(e){
    e.preventDefault()
    if(e.target.classList.contains('add')){
        const details=e.target.parentElement.getElementsByClassName('detail')[0].innerText
        console.log(details)
        const remove=e.target.parentElement
        itemsRem.removeChild(remove)

        //Addind details to To-Do Done
        const li=document.createElement('li')
        li.className="list-group-item";
        li.appendChild(document.createTextNode(details))
        //Addind li to itemsDone in To-Do Done Section
        itemsDone.appendChild(li)

        
    }
    if(e.target.classList.contains('delete')){
        const remove=e.target.parentElement;
        itemsRem.removeChild(remove)
    }

}