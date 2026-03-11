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

    const nameVal = document.getElementById('nameInput').value.trim();
    const phoneVal = document.getElementById('phoneInput').value.trim();

    if (nameVal !== "" && phoneVal !== "") {
        
        const newContact = { 
            name: nameVal, 
            phone: phoneVal 
        };
        
        contacts.push(newContact); 
        console.log("המערך המעודכן:", contacts);

        document.getElementById('nameInput').value = "";
        document.getElementById('phoneInput').value = "";
        
        alert("איש קשר נוסף בהצלחה!");
    } else {
        alert("נא למלא את כל השדות");
    }
});