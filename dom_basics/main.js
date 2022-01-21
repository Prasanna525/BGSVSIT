//Grab Single Element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));

//select multiple elements
//const nodeItems = document.querySelectorAll('.item');
//const colItems = console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

// nodeItems.forEach(item => console.log(item));

//  for(let i = 0; i < colItems.length; i++){
//      console.log(colItems[i]);
// }

//DOM manupulations
//const ul = document.querySelector('.items');
//ul.remove();


//Event Listener
// const btn = document.querySelector('.btn');
// const ul = document.querySelector('.items');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h4> JavaScript </h4>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === ''  || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all Fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        const text = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);
        li.appendChild(text);
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}