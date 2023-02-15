// get elements
const inputElement = document.getElementById('new-item');
const buttonAddElement = document.getElementById('add-button');
const ulShoppingListElement = document.getElementById('new-items-list');
ulShoppingListElement.classList.add('new-items-list');



// add button
buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }  
})

// get list items
function renderList() {
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    ulShoppingListElement.appendChild(liElement); 

     // checkbox
     const checkbox = document.createElement('input');
     checkbox.type = 'checkbox';
     checkbox.id = 'done-item';
     const label = document.createElement("label");
     label.setAttribute('for', 'done-item');
     liElement.appendChild(checkbox);
     liElement.appendChild(label);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Slett';
    liElement.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        ulShoppingListElement.removeChild(liElement); 
})

       // clear value
       inputElement.value = '';
}


