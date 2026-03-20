import { addContact, createContactsList } from './logic.js';

const formFields = [
    { type: 'text', placeholder: 'שם איש קשר', id: 'nameInput' },
    { type: 'text', placeholder: 'מספר טלפון', id: 'phoneInput' }
];

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

const formContainer = document.getElementById('formContainer');
formContainer.appendChild(contactForm);

const actionsContainer = document.createElement('div');
actionsContainer.style.margin = "20px 0";
actionsContainer.style.display = "flex";
actionsContainer.style.gap = "10px";

const printBtn = document.createElement('button');
printBtn.textContent = 'הדפסה';
printBtn.onclick = () => window.print();

const clearAllBtn = document.createElement('button');
clearAllBtn.textContent = 'מחיקת כל אנשי הקשר';
clearAllBtn.style.backgroundColor = "#ff4d4d";
clearAllBtn.style.color = "white";
clearAllBtn.onclick = () => {
    if (confirm("האם למחוק את כל אנשי הקשר?")) {
        localStorage.removeItem('contacts');
        location.reload();
    }
};

const closeBtn = document.createElement('button');
closeBtn.textContent = 'סגירת האתר';
closeBtn.onclick = () => {
    if (confirm("לסגור את האתר?")) {
        window.close();
    }
};

actionsContainer.append(printBtn, clearAllBtn, closeBtn);
formContainer.appendChild(actionsContainer);

formContainer.appendChild(createContactsList());

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

        if (oldList) {
            oldList.replaceWith(newList);
        } else {
            formContainer.appendChild(newList);
        }

        nameInput.value = "";
        phoneInput.value = "";
        
    } else {
        alert("נא למלא את כל השדות");
    }
});