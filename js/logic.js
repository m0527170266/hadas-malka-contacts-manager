const contacts = [];
let counter = 1; 

export function addContact(name, phone) {
    const newContact = {
        id: counter++, 
        name: name,
        phone: phone
    };
    contacts.push(newContact);
}

export function createContactsList() {
    const ul = document.createElement('ul');
    ul.id = "contactsList"; 
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name} - ${contact.phone}`;
        ul.appendChild(li);
    });

    return ul; 
}