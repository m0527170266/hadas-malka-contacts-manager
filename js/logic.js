const contacts = [];
let counter = 1;

export function addContact(name, phone) {
    const newContact = {
        id: counter++,
        name: name,
        phone: phone,
        category: ""
    };
    contacts.push(newContact);
}

export function createContactsList() {
    const ul = document.createElement('ul');
    ul.id = "contactsList";
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.width = "300px"; // תואם לרוחב הטופס

    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.justifyContent = "space-between"; // מסדר את הטקסט מימין והסלקט משמאל
        li.style.gap = "15px";
        li.style.marginBottom = "10px";
        li.style.background = "#fff";
        li.style.padding = "10px";
        li.style.borderRadius = "4px";
        li.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";

        const span = document.createElement('span');
        // פונקציה פנימית לעדכון הטקסט עם האימוג'י
        const updateSpanText = () => {
            const emoji = contact.category ? contact.category + " " : "";
            span.textContent = `${emoji}${contact.name} - ${contact.phone}`;
        };
        
        updateSpanText();

        const select = document.createElement('select');
        const options = [
            { text: 'בחר קטגוריה', value: '' },
            { text: '🏠 משפחה', value: '🏠' },
            { text: '🎈 חברים', value: '🎈' },
            { text: '💼 עבודה', value: '💼' }
        ];

        options.forEach(opt => {
            const option = document.createElement('option');
            option.text = opt.text;
            option.value = opt.value;
            select.appendChild(option);
        });

        select.value = contact.category;

        select.addEventListener('change', () => {
            contact.category = select.value;
            updateSpanText(); // מעדכן את השם מיד כשבוחרים אימוג'י
            console.log("Updated Contacts Array:", contacts);
        });

        li.appendChild(span);
        li.appendChild(select);
        ul.appendChild(li);
    });

    return ul;
}