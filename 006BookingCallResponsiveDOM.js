const btn=document.querySelector('.btn')

/*btn.addEventListener('click',(x)=>{
    x.preventDefault()
    document.querySelector('#button').style.color='black'
})
*/
btn.addEventListener('mouseout',(x)=>{
    x.preventDefault()
    document.querySelector('#button').style.color='DodgerBlue'
})
btn.addEventListener('mouseover',(x)=>{
    x.preventDefault()
    document.querySelector('#button').style.color='red'
})
const bookcall=document.querySelector('#Bookcall');
//const name=document.querySelector('#name');
bookcall.addEventListener('submit',onsubmit)

function onsubmit(e){
    e.preventDefault();
    //console.log(name.value);
    const name=document.getElementById('name').value
    console.log(name)
    const email=document.getElementById('email').value
    console.log(email)
    
    const phone=document.getElementById('phone').value
    console.log(phone)
    const date=document.getElementById('date').value
    console.log(date)
    const time=document.getElementById('time').value
    console.log(time)
    document.querySelector('#button').style.color='black'


}

/*function onsignup(event){
    const name=document.getElementById('name').value
    console.log(name)
    const email=document.getElementById('email').value
    console.log(email)
    
    const phone=document.getElementById('phone').value
    console.log(phone)
    const date=document.getElementById('date').value
    console.log(date)
    const time=document.getElementById('time').value
    console.log(time)
    event.preventDefault(); 
}
*/