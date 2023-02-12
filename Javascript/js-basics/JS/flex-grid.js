// get input text element
const inputElement = document.getElementById('product');
// get button element
const buttonAddElement = document.getElementById('add-button');
// get list
const ulShoppingListElement = document.getElementById('shopping-list');
// eventListener som lytter på click hendelse på knapp
// lese verdi av input text og legge til i liste
buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }  
})
// eventlistener som lytter på tastatur knapp "enter"
// lese verdi av input text og legge til i liste


function renderList() {
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    ulShoppingListElement.appendChild(liElement);
};