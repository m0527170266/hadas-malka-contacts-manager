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

document.getElementById('formContainer').appendChild(contactForm);