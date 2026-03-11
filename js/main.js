import { addContact, createContactsList } from './logic.js';
const formFields = [
    { type: 'text', placeholder: 'שם איש קשר', id: 'nameInput' },
    { type: 'text', placeholder: 'מספר טלפון', id: 'phoneInput' }
];

const contacts = [];

const contactForm = document.createElement('form');

formFields.forEach(field => {
    const input = document.createElement('input');
    input.type = field.type;
    input.placeholder = field.placeholder;
    input.id = field.id;
    contactForm.appendChild(input);
});

const submitBtn = document.createElement('button');
submitBtn.textContent = 'הוסף';
contactForm.appendChild(submitBtn);

document.getElementById('formContainer').appendChild(contactForm);

const phoneInput = document.getElementById('phoneInput');

phoneInput.addEventListener('keydown', (event) => {
    const allowedChars = "0123456789-";
    
    const controlKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];

    if (!allowedChars.includes(event.key) && !controlKeys.includes(event.key)) {
        event.preventDefault(); 
    }
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

   const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');

    if (nameInput.value.trim() !== "" && phoneInput.value.trim() !== "") {
        
        addContact(nameInput.value.trim(), phoneInput.value.trim());

        const newList = createContactsList();

        const oldList = document.getElementById('contactsList');
        oldList.replaceWith(newList);

        nameInput.value = "";
        phoneInput.value = "";
        
    }
     else
         {
        alert("נא למלא את כל השדות");}
});