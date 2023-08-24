//******************Video JavaScript DOM Crash Course - Part 1*************************************************
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

//**************************************************************************getElementIdBy()
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

//********************************************************************************getElementsByClassName()
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

// ************************************************************************************getElementsByTagName
//works the same way as getElementsByClassName()
/*
const li=document.getElementsByTagName('li')
console.log(li);
li[1].textContent='Hello 2'
li[1].style.fontWeight='bold'
li[1].style.backgroundColor='Yellow'

//givesError
//items.style.backgroundColor='black';

for(i of li){
    i.style.backgroundColor='Red'
}
*/

//************************************************************************************querySelector

//const header=document.querySelector('#main-header')
//header.style.borderBottom='solid 4px black';
/*
const headerTitle=document.querySelector('#header-title');
headerTitle.style.borderBottom='solid 3px black';

const title=document.querySelector('.title')
// for getting class we use .classname
//For making title Add Items Bold
//title.style.fontWeight='Bold';
//console.log(title)

title.style.color='Green'

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

//************************************************************************************ querySelectorAll
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

//***********************************video JavaScript DOM Crash Course - Part 2**************************************
//Transversing the DOM
const itemList=document.querySelector('#items')

//****************************************************************parentNode
/*
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='Pink';
console.log(itemList.parentNode.parentNode);
*/

//*****************************************************************parentElement
/*
//Same as parentNode
//Both can be used in place of each other
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='Pink';
console.log(itemList.parentElement.parentElement);
*/

//******************************************************************childNodes
//console.log(itemList.childNodes);
//here text shown in output is line gap

//*******************************************************************children
//Instead of childNode it only gives us only elements ignoring line break and giving it as text
/*
console.log(itemList.children)
//to get a paticular chlid at index 1
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow' 
*/

//*******************************************************************firstChild
//console.log(itemList.firstChild);


//******************************************************************firstElementChild
//console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent='Hello'


//********************************************************************lastChild
//console.log(itemList.lastChild)


//********************************************************************lastElementChild
//console.log(itemList.lastElementChild)
//itemList.lastElementChild.textContent='Hello 4';


//*********************************************************************nextSibling
//console.log(itemList.nextSibling);


//*********************************************************************nextElementSibling
//console.log(itemList.nextElementSibling);


//*********************************************************************previousSibling
//console.log(itemList.previousSibling);


//*********************************************************************previousElementChild
//console.log(itemList.previousElementSibling)
//itemList.previousElementSibling.style.color='green';


//**********************************************************************Create Element
/*
//create a div
const newDiv=document.createElement('div');

//Add Class
newDiv.className='hello'

//Add id
newDiv.id='hello 1';

//Add Attribute
newDiv.setAttribute('title','Hello Div')

//createTextNode
const newDivText=document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);
console.log(newDiv)
const container=document.querySelector('header .container');
const h1=document.querySelector('header h1')

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1)

*/