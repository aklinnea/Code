// variabel for container 'nav'
const navElement = document.createElement('nav');
// variabel for ul-list
const ulElement = document.createElement('ul');
// sette nav inne i header
const headerElement = document.querySelector('header');
headerElement.append(navElement);
// sette inn ul i nav
navElement.append(ulElement);
// en eller flere varibel for list items
// sette opp alle list items etter hverandre
const li1Element = document.createElement('li');
li1Element.textContent = 'About';
ulElement.appendChild(li1Element);

const li2Element = document.createElement('li');
li2Element.textContent = 'Products';
ulElement.appendChild(li2Element);

const li3Element = document.createElement('li');
li3Element.textContent = ' Contact';
ulElement.appendChild(li3Element);
console.log(headerElement);







