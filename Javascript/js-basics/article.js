// lagre i en variabel html element fra document
const bodyElement = document.querySelector('body');
// bygge h1 og gi en textcontent som tittel
const h1Element = document.createElement('h1');
h1Element.textContent = ('Tittel til artikkel');
// bygge img tag og gi en src bilde verdi
const imgElement = document.createElement('img');
imgElement.src ='https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
imgElement.alt = 'rommet';
// bygge en paragraph og legge inn text
const pElement = document.createElement('p');
pElement.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
Exercitationem officiis similique nemo necessitatibus, dolor, 
voluptatibus autem repudiandae dignissimos excepturi ipsam dolorum molestiae minus tenetur, 
asperiores quae architecto iusto omnis officia amet reiciendis minima? Omnis deserunt nesciunt similique, 
quae magni ut, fugit voluptas labore obcaecati fuga nam qui, officiis expedita animi.`
    
// append alle elementer inn i hoved container
bodyElement.appendChild(h1Element);
bodyElement.appendChild(imgElement);
bodyElement.appendChild(pElement);

console.log(bodyElement);

// lage hovedcontainer ul 
const ulElement = document.createElement('ul');

/* loop med for
for(let i = 0; i <= 4; i++) {
    console.log(i);
    const liElement = document.createElement('li');
    liElement.textContent = 'Item ' + i;
    ulElement.appendChild(liElement); 
}
*/
console.log(ulElement);
bodyElement.appendChild(ulElement);

// partall
for(let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        const liElement = document.createElement('li');
        liElement.textContent = 'Item ' + i;
        ulElement.appendChild(liElement); 
    }
}

