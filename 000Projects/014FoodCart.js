const add=document.getElementById('add');
add.addEventListener('click',addFood);
const items=document.getElementById('items')

function addFood(e){
    e.preventDefault()
    
    const food=document.getElementById('name').value;
    const quant=document.getElementById('quant').value;
    const pay=document.getElementById('pay').value;

    const details={
        food:food,
        quant:quant,
        paymentMode:pay
    }


    
    async function postDetails(){
        try{
            let res=await axios.post('https://crudcrud.com/api/49cbd928c3744621a45dcac5abcb5fd8/foodDetails',details)
            showDetails(res.data);
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
        

    }
    postDetails();
    
}

function showDetails(obj){

    let food=document.createElement('span');
    let quantity=document.createElement('span');
    let payment=document.createElement('span');
    let sid=document.createElement('span');

    food.className="food";
    quantity.className="quantity";
    payment.className="payment";
    payment.style.display='none';
    sid.className="id";
    sid.style.display='none'

    food.appendChild(document.createTextNode(obj.food));
    quantity.appendChild(document.createTextNode(obj.quant));
    payment.appendChild(document.createTextNode(obj.paymentMode));
    sid.appendChild(document.createTextNode(obj.id));


    const li=document.createElement('li');
    li.className='list-group-item';
    li.append(food," ",quantity," ",payment," ",sid);

    items.appendChild(li) 


}

window.addEventListener("DOMContentLoaded",async ()=>{
    try{
        const res= await axios.get('https://crudcrud.com/api/49cbd928c3744621a45dcac5abcb5fd8/foodDetails')
        for(let i=0;i<res.data.length;i++){
            showDetails(res.data[i]);
        }

    } catch(err){
        console.log(err)
    }

})




/*
ecommerce
    axios.post('https://crudcrud.com/api/f3cd011d0b5348bcb36f187bda35eca4/cartDetails',details)
         .then((res)=>{showDetails(res.data)})
         .catch((err)=>{console.error(err)})



            const data=axios.get('https://crudcrud.com/api/f3cd011d0b5348bcb36f187bda35eca4/cartDetails')
         .then((res)=>{
            for(let i=0;i<res.data.length;i++){
                showDetails(res.data[i]);
            }
         })
         .catch((err)=>{console.error(err)})
         */


         //8942908195
