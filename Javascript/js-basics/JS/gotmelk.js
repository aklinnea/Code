// elements
const inputElement = document.getElementById('new-item');
// get button element
const buttonAddElement = document.getElementById('add-button');
// get list
const ulShoppingListElement = document.getElementById('new-items-list');
ulShoppingListElement.classList.add('new-items-list');
// get done list
const ulDoneListElement = document.getElementById('done-items-list');
ulDoneListElement.classList.add('done-items-list');



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
    // move done items
    const doneItemButton = document.createElement('button');
    doneItemButton.textContent = 'Ferdig';
    liElement.appendChild(doneItemButton);

    doneItemButton.addEventListener('click', () => {
        ulShoppingListElement.removeChild(liElement);
        ulDoneListElement.appendChild(liElement);
    })
    
    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Slett';
    liElement.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
            if (liElement.parentNode.classList.contains('new-items-list')) {
            ulShoppingListElement.removeChild(liElement);
          } else if (liElement.parentNode.classList.contains('done-items-list')) {
            ulDoneListElement.removeChild(liElement);
          }
    })
     // clear value
    inputElement.value = '';
};








