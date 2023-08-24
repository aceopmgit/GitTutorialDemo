//Transversing the DOM
const itemList=document.querySelector('#items')


console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='Pink';
console.log(itemList.parentNode.parentNode);

//Same as parentNode
//Both can be used in place of each other
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='grey';
console.log(itemList.parentElement.parentElement);



console.log(itemList.childNodes);
//here text shown in output is line gap

//Instead of childNode it only gives us only elements ignoring line break and giving it as text

console.log(itemList.children)
//to get a paticular chlid at index 1
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow' 



console.log(itemList.firstChild);



console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent='Hello'



console.log(itemList.lastChild)



console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent='Hello 4';


console.log(itemList.nextSibling);


console.log(itemList.nextElementSibling);


console.log(itemList.previousSibling);


console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color='green';



//create a div
const newDiv=document.createElement('div');

//Add Class
newDiv.className='hello'

//Add id
newDiv.id='hello 1';

//Add Attribute
newDiv.setAttribute('title','Hello Div')

//createTextNode
const newDivText=document.createTextNode('HEllo');

//Add text to div
newDiv.appendChild(newDivText);
console.log(newDiv)
const container=document.querySelector('header .container');
const h1=document.querySelector('header h1')

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1)

const divHello=document.createElement('div')
const divHelloText=document.createTextNode('HEllo');
divHello.appendChild(divHelloText);
divHello.style.fontSize='50px';
const after=document.querySelector('#items')
const before=document.querySelector('.list-group-item:nth-child(1)');
after.insertBefore(divHello,before)
