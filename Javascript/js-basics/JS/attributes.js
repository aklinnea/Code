console.log('attribute');

const h1Element = document.querySelector('h1');

h1Element.id = '128736';
h1Element.setAttribute('id', 'idbyset');

console.log(h1Element);

const pElement = document.querySelector('.p-element');
// pElement.className = 'one-class';
// pElement.setAttribute('class', 'new-class');
pElement.setAttribute('style', 'background-color: #ff0000;')
console.log(pElement);

const linkElement = document.createElement('a');
console.log(linkElement);

linkElement.setAttribute('href', 'https://www.kristiania.no');
linkElement.textContent = 'link til kristiania';

// hente body fra HTML
const bodyElement = document.querySelector('body');
// append linkElement til body
bodyElement.appendChild(linkElement);

const attrValue = document.createAttribute('style');
attrValue.value = 'background-color: #fcf0f3; padding: 10px;'

linkElement.setAttributeNode(attrValue);

// classList
linkElement.classList.add('link');

let links = [
    {name: 'Google', url: 'https://www.google.com'},
    {name: 'Facebook', url: 'https://www.facebook.com'},
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Instagram', url: 'https://www.instagram.com'}
  ];
  
  // Get the ul element
  let ulElement = document.querySelector('#my-list');
  
  // Create the li elements and links
  for (let i = 0; i < links.length; i++) {
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    aElement.setAttribute('href', links[i].url);
    aElement.setAttribute('target', '_blank');
    aElement.textContent = links[i].name;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  }



