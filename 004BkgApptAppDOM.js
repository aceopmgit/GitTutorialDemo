const button=document.getElementById('button')
button.addEventListener('click',submitUser)

function submitUser(e){
    e.preventDefault()
    localStorage.setItem('userName',document.getElementById('name').value);
    localStorage.setItem('userEmail',document.getElementById('email').value)
}

//this form some functionalities not added  watch the video from 1:30:00 --> https://www.youtube.com/watch?v=hdI2bqOjy3c

