// get elements
const inputElement = document.getElementById('new-item');
const buttonAddElement = document.getElementById('add-button');
const ulShoppingListElement = document.getElementById('new-items-list');
ulShoppingListElement.classList.add('new-items-list');

// get stored items
const storedItems = JSON.parse(localStorage.getItem('shoppingListItems')) || [];

// render stored items
storedItems.forEach((item) => {
  const liElement = document.createElement('li');
  liElement.textContent = item.text;
  ulShoppingListElement.appendChild(liElement);

  // checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'done-item';
  const label = document.createElement("label");
  label.setAttribute('for', 'done-item');
  liElement.appendChild(checkbox);
  liElement.appendChild(label);
  checkbox.checked = item.done;

  // delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Slett';
  liElement.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    ulShoppingListElement.removeChild(liElement);
    // update local storage
    const index = storedItems.findIndex((storedItem) => storedItem.text === item.text);
    storedItems.splice(index, 1);
    localStorage.setItem('shoppingListItems', JSON.stringify(storedItems));
  });
});

// add button
buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
  if(event.code === 'Enter') {
    renderList();
  }  
});

// add list items
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

  // add item to stored items
  const item = {
    text: inputElement.value,
    done: false,
  };
  storedItems.push(item);
  localStorage.setItem('shoppingListItems', JSON.stringify(storedItems));

  deleteButton.addEventListener('click', () => {
    ulShoppingListElement.removeChild(liElement);
    // update local storage
    const index = storedItems.findIndex((storedItem) => storedItem.text === item.text);
    storedItems.splice(index, 1);
    localStorage.setItem('shoppingListItems', JSON.stringify(storedItems));
  });

  // clear value
  inputElement.value = '';
}

