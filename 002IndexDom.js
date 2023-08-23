// Examining the document object
//console.dir(document)
//console.log(document.domain)
//console.log(document.URL)

//document.title="HEllo";
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.all);
//console.log(document.forms)

//*************getElementIdBy()
/*
//console.log(document.getElementById('header-title'))
const headerTitle=document.getElementById('header-title')
console.log(headerTitle)
headerTitle.textContent='hello';
headerTitle.innerText='Goodbye';
headerTitle.innerHTML='<h3>hello</h3>';
console.log(headerTitle)
headerTitle.style.borderBottom='solid 3px#000'
*/

//**************getElementsByClassName()
/*
const items=document.getElementsByClassName('list-group-item')
console.log(items);
items[1].textContent='Hello 2'
items[1].style.fontWeight='bold'
items[1].style.backgroundColor='Yellow'

//givesError
//items.style.backgroundColor='black';

for(i of items){
    i.style.backgroundColor='Red'
}
*/

// **************getElementsByTagName
//works the same way as getElementsByClassName()
/*
const li=document.getElementsByTagName('li')
console.log(li);
li[1].textContent='Hello 2'
li[1].style.fontWeight='bold'
li[1].style.backgroundColor='Yellow'

//***************givesError
//items.style.backgroundColor='black';

for(i of li){
    i.style.backgroundColor='Red'
}
*/

//****************querySelector

//const header=document.querySelector('#main-header')
//header.style.borderBottom='solid 4px black';

const headerTitle=document.querySelector('#header-title');
headerTitle.style.borderBottom='solid 3px black';

const title=document.querySelector('.title')
// for getting class we use .classname
//For making title Add Items Bold
//title.style.fontWeight='Bold';
//console.log(title)

title.style.color='Green'
/*
const input=document.querySelector('input')
//for tag we simply use tagName
input.value='Hello World'

const submit=document.querySelector('input[type="submit"]')
submit.value="Send";

const item=document.querySelector('.list-group-item')
item.style.color='red';

const lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

const seconditem=document.querySelector('.list-group-item:nth-child(2)')
seconditem.style.color='violet'

*/

//************ querySelectorAll
/*
const titles=document.querySelectorAll('.title')
console.log(titles);
titles[0].textContent='Hello'

//to make altenate item list grey at odd place

const odd=document.querySelectorAll('li:nth-child(odd)');
for(i of odd){
    i.style.backgroundColor='orange'
}

//to make altenate item list grey at odd place
const even=document.querySelectorAll('li:nth-child(even)');

for(i of even){
    i.style.backgroundColor='brown'
}
*/
