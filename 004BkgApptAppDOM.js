const button=document.getElementById('button')
button.addEventListener('click',submitUser)

function submitUser(e){
    e.preventDefault()
    const details={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value
    }
    const details_serialised=JSON.stringify(details);
    localStorage.setItem('details',details_serialised);
    
    //console.log(localStorage.getItem('userName'))
}


//this form some functionalities not added  watch the video from 1:30:00 --> https://www.youtube.com/watch?v=hdI2bqOjy3c

