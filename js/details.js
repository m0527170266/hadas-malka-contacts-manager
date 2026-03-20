import { contacts } from './logic.js';

const params = new URLSearchParams(window.location.search);
const contactId = parseInt(params.get('id'));

const contact = contacts.find(c => c.id === contactId);

if (contact) {
    document.getElementById('contactName').textContent = contact.name;
    document.getElementById('contactPhone').textContent = contact.phone;
    document.getElementById('contactCategory').textContent = contact.category || "ללא קטגוריה";
} else {
    document.body.innerHTML = "<h1>איש קשר לא נמצא. נא לחזור לדף הראשי וללחוץ על שם.</h1>";
}