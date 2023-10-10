const button=document.getElementById('button');
button.addEventListener('click',submitDetails)
const itemDetails=document.getElementById('itemDetails')
itemDetails.addEventListener('click',removeDetails);

function submitDetails(e){
    e.preventDefault();

    //Getting the value from input 
    const price=document.getElementById('price').value;
    const name=document.getElementById('name').value;

    const details={
        Price:price,
        Name:name
    }

    axios.post('https://crudcrud.com/api/b6f343ba58de434b95107d1c49b4d426/cartDetails',details)
         .then((res)=>{showDetails(res.data)})
         .catch((err)=>{console.error(err)})


/*
    
*/

}

function showDetails(obj){
    //Creating span elements to store data
    const sprice=document.createElement('span')
    const sname=document.createElement('span')
    const sId=document.createElement('span')

    //Adding class to span elements
    sprice.className='sprice'
    sname.className='sname'
    sId.className='sId'
    sId.style.display='none'

    //Adding value to span elements
    sprice.appendChild(document.createTextNode(obj.Price));
    sname.appendChild(document.createTextNode(obj.Name));
    sId.appendChild(document.createTextNode(obj._id))

    //Creating delete button
    const delbtn=document.createElement('button');
    delbtn.className="btn btn-light delete float-right"
    delbtn.appendChild(document.createTextNode("Delete"));

    //creating li Element
    const li=document.createElement('li');
    li.className='list-group-item'
        //Addind span elements to li
    li.append(sprice," ",sname,"",sId)
        //Adding deletBtn to li
    li.appendChild(delbtn);   
    
    itemDetails.appendChild(li)
     
    //Adding the price of products
    const total=Number(document.getElementById('amount').textContent)+Number(obj.Price)
    //console.log(total)
    document.getElementById('amount').innerHTML=`${total}`


}

window.addEventListener("DOMContentLoaded",()=>{
    const data=axios.get('https://crudcrud.com/api/b6f343ba58de434b95107d1c49b4d426/cartDetails')
         .then((res)=>{
            for(let i=0;i<res.data.length;i++){
                showDetails(res.data[i]);
            }
         })
         .catch((err)=>{console.error(err)})
})

function removeDetails(e){
    if(e.target.classList.contains('delete')){
        //getting price and id from details
        
        const price=e.target.parentElement.getElementsByClassName('sprice')[0].textContent;
        const id=e.target.parentElement.getElementsByClassName('sId')[0].textContent;
       // console.log()

        //deleting the item from list
        const li=e.target.parentElement;
        itemDetails.removeChild(li);

        console.log(id)

        //deleting the item from crud crud server
        axios.delete(`https://crudcrud.com/api/b6f343ba58de434b95107d1c49b4d426/cartDetails/${id}`)
            .then().catch((err)=>{console.error(err)})

        const total=Number(document.getElementById('amount').textContent)-Number(price)
        //console.log(total)
        document.getElementById('amount').innerHTML=total




    }
    //console.log('Hi')

}